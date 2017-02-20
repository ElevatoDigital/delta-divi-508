(function($) {

/* Accessibility tweaks for Divi
------------------------------------------------------- */

/*  Test 1 - full screen or slide out menu?
              test element is visible = .et_slide_in_menu_container
    Test 2 - is Search enabled?
              top-nav - if #et_top_search
              slide out - hide .et_search_outer, target .et_slide_in_menu_container .et-search-form

    to do: escape key closes slide out and full screen menus

*/

/* Specific nemu type fixes */

  /* If full screen or slide out menu active */
  if( $('.et_slide_in_menu_container').length ) {

    // Hide top menu search field from screen readers
    $('.et_search_outer').hide();

    // Add a label to the search field
    $('.et_slide_in_menu_container .et-search-field').attr('id', 'divi-s').before('<label class="screen-reader-text" for="divi-s">Search for:</label>');

    // Menu focus
    // Keyboard control on menu button

    // Turn the toggle button into a proper anchor tag for keyboard control
    // trigger('click') wasn't working on the span
    var $span = $("span.mobile_menu_bar.et_pb_header_toggle.et_toggle_slide_menu");
    $span.replaceWith(function () {
        return $('<a/>', {
            class: 'mobile_menu_bar et_pb_header_toggle et_toggle_slide_menu',
            html: this.innerHTML,
            href: '#'
        });
    });

    var $span = $("span.mobile_menu_bar.et_pb_header_toggle.et_toggle_fullscreen_menu");
    $span.replaceWith(function () {
        return $('<a/>', {
            class: 'mobile_menu_bar et_pb_header_toggle et_toggle_fullscreen_menu',
            html: this.innerHTML,
            href: '#'
        });
    });

    // focus in on menu items if menu is not open
    $('.et_pb_header_toggle').keyup( function(e) {
      if( $('.et_pb_slide_menu_opened, .et_pb_fullscreen_menu_opened').length ) {
        if(e.which == 13) { // Enter Key press
          // if menu searh form
          if( $('.et_slide_in_menu_container .et-search-form').length ) {
            $('.et_slide_in_menu_container .et-search-field').focus();
          } else {
            $('.et_first_mobile_item a').focus();
          }
        }
      }
    });

    // foucus out, close menu and focus on content area
    $('.et_mobile_menu > li:last-child a').focusout( function() {
      if( $('.et_pb_slide_menu_opened, .et_pb_fullscreen_menu_opened').length > 0 ) {
        $('.et_pb_header_toggle').trigger('click');
        $('#et-main-area').focus();
      }
    });
    $('.skip-to-content').focusin( function() {
      if( $('.et_pb_slide_menu_opened, .et_pb_fullscreen_menu_opened').length > 0 ) {
        $('.et_pb_header_toggle').trigger('click').focus();
      }
    });

  /* Else is top menu */
  } else {

    /* if menu search is turned on */
    if( $( "#et_top_search" ).length ) {

      // Add a label to the search field
      $('.et_search_outer .et-search-field').attr('id', 'divi-s').before('<label class="screen-reader-text" for="divi-s">Search for:</label>');

      // Search form targets need label text and tabindex for focus
      $('#et_top_search').attr('tabindex', '0'); // This needs focus for click
      $('#et_search_icon').append('<i class="screen-reader-text">Open Search</i>');
      $('.et_close_search_field').append('<i class="screen-reader-text">Close Search</i>').attr('tabindex', '0');

      // Keyboard control on search button
      $('#et_top_search').focus( keypress_enter );
      // Keyboard control on search close button
      $('.et_close_search_field').focus( keypress_enter );

    /* Else no menu search */
    } else {
      $('.et_search_outer').hide(); // Hide from keybord
    }

    // Menu focus

    // Make menu dropdowns keyboard accessible
    $('.menu-item-has-children').focusin( function() {
      $(this).addClass("focused_menu");
    });
    $('.menu-item-has-children').focusout( function() {
      $(this).removeClass("focused_menu");
    });

  }

/* End specific nemu type fixes */


/* Global fixes */

  // Skip Link targets need tabindex for focus
  $('#et-top-navigation, #et-main-area').attr('tabindex', '-1');

  // Makes skip-to links focus on their targets
  $('.skip-to-content').click( function() {
    skip_id = $(this).attr('href');
    $(skip_id).focus();
  });

  // add text to menu button and tabindex for focus
  $('.mobile_menu_bar').append('<i class="screen-reader-text">Menu Button</i>').attr('tabindex', '0');

/* End global fixes */


  // Enter key causes a click
  function keypress_enter() {
    $(this).keypress( function(e) {
      if(e.which == 13) {
        $(this).trigger('click');
      }
    });
  }

})(jQuery);
