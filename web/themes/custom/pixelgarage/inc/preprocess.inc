<?php
/**
 * Created by PhpStorm.
 * User: ralph
 * Date: 06.02.15
 * Time: 17:23
 */

/**
 * Preprocess variables for the html template.
 */
function pixelgarage_preprocess_html(&$vars) {
  // make sure jQuery UI and effects is loaded for anonymous users
  if ($node = \Drupal::request()->attributes->get('node')) {
    $vars['attributes']['class'][] = 'page-node-' . $node->id();
  }
}

/**
 * Override or insert variables for the page templates.
 */
function pixelgarage_preprocess_page(&$vars) {
  // hide titles on login forms
  //pg_login_preprocess_page($vars);
}

//function pixelgarage_preprocess_field(&$variables) {
//  $element = $variables['element'];
//  if ($element['#name'] == 'field_link') {
//    $variables['items'][0]['content']['#options']['attributes']['class'][] = 'BUTT';
//  }
//}