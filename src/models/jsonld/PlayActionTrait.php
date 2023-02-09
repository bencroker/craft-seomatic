<?php

/**
 * SEOmatic plugin for Craft CMS 4
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful, and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2023 nystudio107
 */

namespace nystudio107\seomatic\models\jsonld;

/**
 * schema.org version: v15.0-release
 * Trait for PlayAction.
 *
 * @author    nystudio107
 * @package   Seomatic
 * @see       https://schema.org/PlayAction
 */
trait PlayActionTrait
{
    /**
     * Upcoming or past event associated with this place, organization, or action.
     *
     * @var Event
     */
    public $event;

    /**
     * An intended audience, i.e. a group for whom something was created.
     *
     * @var Audience
     */
    public $audience;
}
