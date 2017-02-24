(function($) {

/* Accessibility tweaks for Divi
------------------------------------------------------- */

/*  Test 1 - full screen or slide out menu?
              test element is visible = .et_slide_in_menu_container
    Test 2 - is Search enabled?
              top-nav - if #et_top_search
              slide out - hide .et_search_outer, target .et_slide_in_menu_container .et-search-form

    to do: Make common selectors variables

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
            html: '<i class="screen-reader-text">Open Menu</i>',
            href: '#'
        });
    });

    var $span = $("span.mobile_menu_bar.et_pb_header_toggle.et_toggle_fullscreen_menu");
    $span.replaceWith(function () {
        return $('<a/>', {
            class: 'mobile_menu_bar et_pb_header_toggle et_toggle_fullscreen_menu',
            html: '<i class="screen-reader-text">Open Menu</i>',
            href: '#'
        });
    });

    // add text to close menu button and tabindex for focus
    $('.et_slide_in_menu_container .mobile_menu_bar').append('<i class="screen-reader-text">Close Menu</i>').attr('tabindex', '0');




    // focus in on menu items if opening menu
    $('.et_pb_header_toggle').keyup( function() {
      if( $('body').hasClass('et_pb_slide_menu_active') || $('body').hasClass('et_pb_fullscreen_menu_active') ) {
        // Give close menu button key access (making it an anchor tag breaks layout)
        $('.et_slide_in_menu_container .et_toggle_fullscreen_menu').keyup( function(e) {
          if(e.which == 13) {
            $(this).trigger('click');
            $('.et_pb_header_toggle').focus();
          }
        });
        // if menu searh form
        if( $('.et_slide_in_menu_container .et-search-form').length ) {
          $('.et_slide_in_menu_container .et-search-field').focus();
        // if a slide menu
        } else if ( $('body').hasClass('et_pb_slide_menu_active') ) {
          $('.et_first_mobile_item a').focus();
          $('.et_slide_in_menu_container').focus();
        // if the full menu
        } else {
          $('.et_slide_in_menu_container .mobile_menu_bar').focus();
        }
      }
    });

    // foucus out, close menu and focus on content area
    //$('.et_mobile_menu > li:last-child a').focusout( function() {
    $('.logo_container a').focusin( function() {
      if( $('body').hasClass('et_pb_slide_menu_active') || $('body').hasClass('et_pb_fullscreen_menu_active') ) {
        $('.et_pb_header_toggle').click();
        $('#et-main-area').focus();
      }
    });
    $('.skip-to-content').focusin( function() {
      if( $('body').hasClass('et_pb_slide_menu_active') || $('body').hasClass('et_pb_fullscreen_menu_active') ) {
        $('.et_pb_header_toggle').click().focus();
      }
    });

    // Escape key closes slideout or fullscreen menu
    $(document).keyup( function(e) {
      if( $('body').hasClass('et_pb_slide_menu_active') || $('body').hasClass('et_pb_fullscreen_menu_active') ) {
        if(e.which == 27) {
          $('.et_pb_header_toggle').click().focus();
        }
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
      $(this).addClass("d508_focused_menu");
    });
    $('.menu-item-has-children').focusout( function() {
      $(this).removeClass("d508_focused_menu");
    });

  }

/* End specific nemu type fixes */


/* Global fixes */

  // Change viewport meta tag to allow for user scale
  $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0');

  // Add skip links after open `<body>` tag
  $('body').prepend('<a href="#et-main-area" class="d508_skip_to">Skip to Content</a> <a href="#et-top-navigation" class="d508_skip_to">Skip to Navigation</a>');

  // Skip Link targets need tabindex for focus
  $('#et-top-navigation, #et-main-area').attr('tabindex', '-1');

  // Makes skip-to links focus on their targets
  $('.d508_skip_to').click( function() {
    skip_id = $(this).attr('href');
    $(skip_id).focus();
  });

/* End global fixes */


  // Enter key causes a click on this element
  function keypress_enter() {
    $(this).keyup( function(e) {
      if(e.which == 13) {
        $(this).trigger('click');
      }
    });
  }

})(jQuery);
