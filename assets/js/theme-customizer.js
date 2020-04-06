/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 */
( function( $ ) {

    // Update the site title in real time...
    wp.customize( 'blogname', function( value ) {
        value.bind( function( newval ) {
            $( '#site-title a' ).html( newval );
        } );
    } );

    //Update the site description in real time...
    wp.customize( 'blogdescription', function( value ) {
        value.bind( function( newval ) {
            $( '.site-description' ).html( newval );
        } );
    } );

    //Update site title color in real time...
    wp.customize( 'header_textcolor', function( value ) {
        value.bind( function( newval ) {
            $('#site-title a').css('color', newval );
        } );
    } );

    //Update site background color...
    wp.customize( 'setting_section_color_primary', function( value ) {
        value.bind( function( newval ) {
            $('.text-supernova,').css('color', newval );
            $('.text-secondary,').css('color', newval );
            $('.logo-text span,').css('color', newval );
            $('section.s-products ul.products-list li a:before,').css('color', newval );
            $('section.s-history .timeline ul li:hover a strong,').css('color', newval );
            $('section.s-history .timeline ul li.active a strong').css('color', newval );
        } );
    } );

    //Update site title color in real time...
    wp.customize( 'mytheme_options[link_textcolor]', function( value ) {
        value.bind( function( newval ) {
            $('a').css('color', newval );
            $('p').css('color', newval );
            $('div').css('color', newval );
            $('body').css('background-color', newval );
        } );
    } );

} )( jQuery );
