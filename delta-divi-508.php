<?php
/**
* Plugin Name: Delta Divi 508
* Plugin URI: https://github.com/DeltaSystems/delta-divi-508
* Description: Accessibility tweaks to the Divi theme.
* Version: 0.1.2
* Author: Delta Systems
* Author URI: https://deltasystems.com/
* License: GNU General Public License
*/

/* Exit if accessed directly */
if ( ! defined( 'ABSPATH' ) ) exit;

/* Enqueue assets */
function d508_register_assets() {
	wp_register_style( 'd508_css', plugins_url( 'delta-divi-508/style.css' ), '', null, 'screen' );
	wp_enqueue_style( 'd508_css' );

	wp_register_script( 'd508_js', plugins_url( 'delta-divi-508/script.js' ), array( 'jquery' ), null, true );
	wp_enqueue_script( 'd508_js' );
}
add_action( 'wp_enqueue_scripts', 'd508_register_assets', 9999 );
