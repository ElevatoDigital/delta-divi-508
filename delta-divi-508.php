<?php
/**
* Plugin Name: Delta Divi 508
* Plugin URI: https://github.com/DeltaSystems/delta-divi-508
* Description: Accessibility tweaks to the Divi theme.
* Version: 0.1.1
* Author: Delta Systems
* Author URI: https://deltasystems.com/
* License: GNU General Public License
*/


/* Enqueue assets */
function d508_register_assets() {
	wp_register_style( 'd508_css', plugins_url( 'delta-divi-508/style.css' ), '', null, 'screen' );
	wp_enqueue_style( 'd508_css' );

	wp_register_script( 'd508_js', plugins_url( 'delta-divi-508/script.js' ), array( 'jquery' ), null, true );
	wp_enqueue_script( 'd508_js' );
}
add_action( 'wp_enqueue_scripts', 'd508_register_assets', 9999 );

/* Add to wp_footer */
function d508_footer() {
  // Skip links
  echo'<a href="#et-main-area" class="skip-to-content" tabindex="1">Skip to Content</a>';
  echo'<a href="#et-top-navigation" class="skip-to-content" tabindex="2">Skip to Navigation</a>';
}
add_action('wp_footer', 'd508_footer');
