<?php
/*
Plugin Name: Everything is a box
Description: Box debug for Bricks Builder editor.
Version: 1.0
Author: Alessandro
License: MIT
*/

defined( 'ABSPATH' ) or die;

class Ale_Box_Functions{

    public function __construct() {
        define( 'ALE_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
        define( 'ALE_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
    }
    
    public function init() {
        add_action( 'wp_enqueue_scripts', array( $this, 'frontend_css_js' ), 20 );
    }
    
    public function frontend_css_js() {
        if (bricks_is_builder_main()) {
            wp_enqueue_script( 'ale_bricks_custom', ALE_PLUGIN_URL . 'assets/js/everything-is-a-box.js', ['bricks-scripts'] );
        }
    }

}

$ale_plugin_functions = new Ale_Box_Functions();
$ale_plugin_functions->init();

