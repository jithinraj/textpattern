<?php

/*
 * Textpattern Content Management System
 * https://textpattern.com/
 *
 * Copyright (C) 2017 The Textpattern Development Team
 *
 * This file is part of Textpattern.
 *
 * Textpattern is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * Textpattern is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Textpattern. If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * &lt;input type="radio" /&gt; tag set with yes/no options.
 *
 * @since   4.7.0
 * @package Widget
 */

namespace Textpattern\Widget;

class YesNoRadioSet extends RadioSet implements \Textpattern\Widget\WidgetCollectionInterface
{
    /**
     * Construct a yes/no pair of radio widgets.
     *
     * @param string $name    The RadioSet key (HTML name attribute)
     * @param string $default The key from the $options array to set as selected
     */

    public function __construct($name, $default = null)
    {
        $options = array(
            gTxt('no'),
            gTxt('yes'),
        );

        parent::__construct($name, $options, $default);
    }
}
