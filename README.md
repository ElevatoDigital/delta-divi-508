# Delta Divi 508

A WordPress plugin to help the Divi theme be more Section 508 compliant.

This plugin just focuses on menu accessibility. Divi has dozens of modules and theme options. Not every module or option combination has been tested or fixed.

## Requirements

* A Divi 3.0 theme or child theme

## Installation

* Make a folder in WordPress's `plugins` folder called `delta-divi-508`
* Copy plugin files to that folder
* Activate plugin in WordPress admin

## What this plugin does

* Adds Skip-to links for content and navigation
* Adds ability for keyboard to focus on and interact with navigation elements
* Menu drop downs work with keyboard
* Escape key closes slide out and full screen menus
* Focused elements are outlined
* Hides the menu search form field if not used
* Adds a label to the menu search field
* Adds text to menu hamburger button used to toggle menus and search
* Link text is underlined
* Changes Divi's `.screen-reader-text` class to not `display:none` so screen readers can actually see it.
* Social icon links have text screen readers can see
* Viewport allows user scaling

## What this plugin will not do

* Change text size to a relative size instead of pixels
* Make the admin visual editor accessible

## Things to do

* Add Aria tags
* Make the mobile version of default top menu style also accessible
* Test on iOS Voiceover
* See if skip-to-nav can focus to specific nav child elements, depending on which menu used, instead of parent nav element
* Test all the modules for accessibility. There are to many for this first release.

## Release Notes

### Version: 0.1.1

* Changed viewport to allow user scaling
* Social icon links have text screen readers can see
* Escape key closes slideout and fullscreen menus
* Fullscreen menu focus bug fixed

### Version: 0.1

Initial Release
