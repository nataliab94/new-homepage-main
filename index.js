$(document).ready(function () {

  $('.read_button').hover(
    function () {
      $(this).addClass('read_button_cursor');
    },
    function () {
      $(this).removeClass('read_button_cursor'); 
    }
  );

  $('.header_block').hover(
    function () {
      $(this).addClass('header_block_cursor'); 
    },
    function () {
      $(this).removeClass('header_block_cursor');
    }
  );

  $('.title').hover(
    function () {
      $(this).addClass('title_cursor'); 
    },
    function () {
      $(this).removeClass('title_cursor'); 
    }
  );

  $('.button').hover(
    function () {
      $(this).addClass('button_cursor'); 
    },
    function () {
      $(this).removeClass('button_cursor');
    }
  );

  // Otwieranie menu po kliknięciu ikony menu
  $('.icon_menu').on('click', function () {
    $('.buttons_menu').addClass('active');
  });

  // Zamykanie menu po kliknięciu ikony zamykania
  $('.icon_close').on('click', function () {
    $('.buttons_menu').removeClass('active'); 
  });
});
