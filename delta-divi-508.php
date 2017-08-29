<?php
/**
* Plugin Name: Delta Divi 508
* Plugin URI: https://github.com/DeltaSystems/delta-divi-508
* Description: Accessibility tweaks to the Divi theme.
* Version: 0.1.6
* Author: Delta Systems
* Author URI: http://justcalldelta.com/
* License: GNU General Public License
*/

/* Exit if accessed directly */
if ( ! defined( 'ABSPATH' ) ) exit;

$theme = wp_get_theme(); // If installed theme or parent theme is Divi
if ('Divi' == $theme->name || 'Divi' == $theme->parent_theme) {

	/* Enqueue assets */
	function d508_register_assets() {
		wp_register_style( 'd508_css', plugins_url( 'delta-divi-508/styles/style-min.css' ), '', null, 'screen' );
		wp_enqueue_style( 'd508_css' );

		wp_register_script( 'd508_js', plugins_url( 'delta-divi-508/scripts/script-min.js' ), array( 'jquery' ), null, true );
		wp_enqueue_script( 'd508_js' );
	}
	add_action( 'wp_enqueue_scripts', 'd508_register_assets', 9999 );

}
