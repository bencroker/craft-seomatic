<?php
/**
 * SEOmatic plugin for Craft CMS 3.x
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful,
 * and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2017 nystudio107
 */

namespace nystudio107\seomatic\models;

use nystudio107\seomatic\Seomatic;
use nystudio107\seomatic\base\FrontendTemplate;
use nystudio107\seomatic\base\SitemapInterface;
use nystudio107\seomatic\helpers\Field as FieldHelper;
use nystudio107\seomatic\services\MetaBundles;

use Craft;
use craft\elements\Asset;
use craft\elements\Entry;
use craft\elements\Category;
use craft\fields\Assets as AssetsField;
use craft\fields\Matrix as MatrixField;
use craft\helpers\UrlHelper;

use yii\caching\TagDependency;

/**
 * @author    nystudio107
 * @package   Seomatic
 * @since     3.0.0
 */
class SitemapTemplate extends FrontendTemplate implements SitemapInterface
{
    // Constants
    // =========================================================================

    const TEMPLATE_TYPE = 'SitemapTemplate';

    const CACHE_KEY = 'seomatic_sitemap_';

    const SITEMAP_CACHE_TAG = 'seomatic_sitemap_';

    const FILE_TYPES = [
        'excel',
        'pdf',
        'illustrator',
        'powerpoint',
        'text',
        'word',
        'xml',
    ];

    // Static Methods
    // =========================================================================

    /**
     * @param array $config
     *
     * @return null|SitemapTemplate
     */
    public static function create(array $config = [])
    {
        $defaults = [
            'path'       => 'sitemaps/<type:[-\w\.*]+>/<handle:[-\w\.*]+>/<siteId:\d+>/<file:[-\w\.*]+>',
            'template'   => '',
            'controller' => 'sitemap',
            'action'     => 'sitemap',
        ];
        $config = array_merge($config, $defaults);
        $model = new SitemapTemplate($config);

        return $model;
    }

    // Public Properties
    // =========================================================================

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        $rules = parent::rules();
        $rules = array_merge($rules, [
        ]);

        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function fields()
    {
        $fields = parent::fields();
        if ($this->scenario === 'default') {
        }

        return $fields;
    }

    /**
     * @inheritdoc
     */
    public function render($params = []): string
    {
        $cache = Craft::$app->getCache();
        $type = $params['type'];
        $handle = $params['handle'];
        $siteId = $params['siteId'];
        $duration = Seomatic::$devMode ? $this::DEVMODE_SITEMAP_CACHE_DURATION : $this::SITEMAP_CACHE_DURATION;
        $dependency = new TagDependency([
            'tags' => [
                $this::GLOBAL_SITEMAP_CACHE_TAG,
                $this::SITEMAP_CACHE_TAG . $handle . $siteId,
            ],
        ]);

        return $cache->getOrSet($this::CACHE_KEY . $handle . $siteId, function () use ($type, $handle, $siteId) {
            Craft::info(
                'Sitemap cache miss: ' . $handle . '/' . $siteId,
                __METHOD__
            );
            $lines = [];
            // Sitemap index XML header and opening tag
            $lines[] = '<?xml version="1.0" encoding="UTF-8"?>';
            // One sitemap entry for each element
            $metaBundle = Seomatic::$plugin->metaBundles->getMetaBundleBySourceHandle($type, $handle, $siteId);
            $multiSite = count($metaBundle->sourceAltSiteSettings) > 1;
            $elements = null;
            if ($metaBundle && $metaBundle->sitemapUrls) {
                $urlsetLine = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
                if ($metaBundle->sitemapAssets) {
                    $urlsetLine .= ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
                    $urlsetLine .= ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"';
                }
                if ($multiSite) {
                    $urlsetLine .= ' xmlns:xhtml="http://www.w3.org/1999/xhtml"';
                }
                $urlsetLine .= '>';
                $lines[] = $urlsetLine;
                // Handle each element type separately
                switch ($metaBundle->sourceBundleType) {
                    case MetaBundles::SECTION_META_BUNDLE:
                        $elements = Entry::find()
                            ->section($metaBundle->sourceHandle)
                            ->siteId($metaBundle->sourceSiteId)
                            ->limit(null);
                        break;
                    case MetaBundles::CATEGORYGROUP_META_BUNDLE:
                        $elements = Category::find()
                            ->siteId($metaBundle->sourceSiteId)
                            ->limit(null);
                        break;
                }
                // Output the sitemap entry
                /** @var  $element Entry */
                foreach ($elements as $element) {
                    $path = ($element->uri === '__home__') ? '' : $element->uri;
                    $url = UrlHelper::siteUrl($path);
                    $lines[] = '  <url>';
                    // Standard sitemap key/values
                    $lines[] = '    <loc>';
                    $lines[] = '      ' . $url;
                    $lines[] = '    </loc>';
                    $lines[] = '    <lastmod>';
                    $lines[] = '      ' . $element->dateUpdated->format(\DateTime::W3C);
                    $lines[] = '    </lastmod>';
                    $lines[] = '    <changefreq>';
                    $lines[] = '      ' . $metaBundle->sitemapChangeFreq;
                    $lines[] = '    </changefreq>';
                    $lines[] = '    <priority>';
                    $lines[] = '      ' . $metaBundle->sitemapPriority;
                    $lines[] = '    </priority>';
                    // Handle alternate URLs if this is multi-site
                    if ($multiSite && $metaBundle->sitemapAltLinks) {
                        /** @var  $altSiteSettings */
                        foreach ($metaBundle->sourceAltSiteSettings as $altSiteSettings) {
                            $altElement = null;
                            // Handle each element type separately
                            switch ($metaBundle->sourceBundleType) {
                                case MetaBundles::SECTION_META_BUNDLE:
                                    $altElement = Entry::find()
                                        ->section($metaBundle->sourceHandle)
                                        ->id($element->id)
                                        ->siteId($altSiteSettings['siteId'])
                                        ->limit(1)
                                        ->one();
                                    break;

                                case MetaBundles::CATEGORYGROUP_META_BUNDLE:
                                    $altElement = Category::find()
                                        ->id($element->id)
                                        ->siteId($altSiteSettings['siteId'])
                                        ->limit(1)
                                        ->one();
                                    break;
                                    // @todo: handle Commerce products
                            }
                            if ($altElement) {
                                $lines[] = '    <xhtml:link rel="alternate"'
                                    . ' hreflang="' . $altSiteSettings['language'] . '"'
                                    . ' href="' . $altElement->url . '"'
                                    . ' />';
                            }
                        }
                    }
                    // Handle any Assets
                    if ($metaBundle->sitemapAssets) {
                        // Regular Assets fields
                        $assetFields = FieldHelper::fieldsOfType($element, AssetsField::className());
                        foreach ($assetFields as $assetField) {
                            foreach ($element[$assetField] as $asset) {
                                $this->assetSitemapItem($asset, $lines);
                            }
                        }
                        // Assets embeded in Matrix fields
                        $matrixFields = FieldHelper::fieldsOfType($element, MatrixField::className());
                        foreach ($matrixFields as $matrixField) {
                            foreach ($element[$matrixField] as $matrixBlock) {
                                $assetFields = FieldHelper::matrixFieldsOfType($matrixBlock, AssetsField::className());
                                foreach ($assetFields as $assetField) {
                                    foreach ($matrixBlock[$assetField] as $asset) {
                                        $this->assetSitemapItem($asset, $lines);
                                    }
                                }
                            }
                        }
                    }
                    $lines[] = '  </url>';
                    // Include links to any known file types in the assets fields
                    if ($metaBundle->sitemapFiles) {
                        // Regular Assets fields
                        $assetFields = FieldHelper::fieldsOfType($element, AssetsField::className());
                        foreach ($assetFields as $assetField) {
                            foreach ($element[$assetField] as $asset) {
                                $this->assetFilesSitemapLink($asset, $metaBundle, $lines);
                            }
                        }
                        // Assets embeded in Matrix fields
                        $matrixFields = FieldHelper::fieldsOfType($element, MatrixField::className());
                        foreach ($matrixFields as $matrixField) {
                            foreach ($element[$matrixField] as $matrixBlock) {
                                $assetFields = FieldHelper::matrixFieldsOfType($matrixBlock, AssetsField::className());
                                foreach ($assetFields as $assetField) {
                                    foreach ($matrixBlock[$assetField] as $asset) {
                                        $this->assetFilesSitemapLink($asset, $metaBundle, $lines);
                                    }
                                }
                            }
                        }
                    }
                }
                // Sitemap index closing tag
                $lines[] = '</urlset>';
            }

            return implode("\r\n", $lines);
        }, $duration, $dependency);
    }

    /**
     * @param Asset $asset
     * @param array $lines
     */
    protected function assetSitemapItem(Asset $asset, array &$lines)
    {
        switch ($asset->kind) {
            case 'image':
                $lines[] = '    <image:image>';
                $lines[] = '      <image:loc>';
                $lines[] = '        ' . $asset->url;
                $lines[] = '      </image:loc>';
                $lines[] = '      <image:title>';
                $lines[] = '        ' . $asset->title;
                $lines[] = '      </image:title>';
                $lines[] = '    </image:image>';
                break;

            case 'video':
                $lines[] = '    <video:video>';
                $lines[] = '      <video:content_loc>';
                $lines[] = '        ' . $asset->url;
                $lines[] = '      </video:content_loc>';
                $lines[] = '      <video:title>';
                $lines[] = '        ' . $asset->title;
                $lines[] = '      </video:title>';
                $lines[] = '      <video:thumbnail_loc>';
                $lines[] = '        ' . $asset->getThumbUrl(320);
                $lines[] = '      </video:thumbnail_loc>';
                $lines[] = '    </video:video>';
                break;
        }
    }

    /**
     * @param Asset      $asset
     * @param MetaBundle $metaBundle
     * @param array      $lines
     */
    protected function assetFilesSitemapLink(Asset $asset, MetaBundle $metaBundle, array &$lines)
    {
        if (in_array($asset->kind, $this::FILE_TYPES)) {
            $lines[] = '  <url>';
            $lines[] = '    <loc>';
            $lines[] = '      ' . $asset->url;
            $lines[] = '    </loc>';
            $lines[] = '    <lastmod>';
            $lines[] = '      ' . $asset->dateUpdated->format(\DateTime::W3C);
            $lines[] = '    </lastmod>';
            $lines[] = '    <changefreq>';
            $lines[] = '      ' . $metaBundle->sitemapChangeFreq;
            $lines[] = '    </changefreq>';
            $lines[] = '    <priority>';
            $lines[] = '      ' . $metaBundle->sitemapPriority;
            $lines[] = '    </priority>';
            $lines[] = '  </url>';
        }
    }

    /**
     * Invalidate a sitemap cache
     *
     * @param string $handle
     * @param int    $siteId
     */
    public function invalidateCache(string $handle, int $siteId)
    {
        $cache = Craft::$app->getCache();
        TagDependency::invalidate($cache, $this::SITEMAP_CACHE_TAG . $handle . $siteId);
        Craft::info(
            'Sitemap cache cleared: ' . $handle,
            __METHOD__
        );
    }
}
