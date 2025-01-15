$(document).ready(function () {
  // Obsługa hover dla różnych elementów
  $('.read_button').hover(
    function () {
      $(this).addClass('read_button_cursor'); // Dodaj klasę, gdy kursor jest na elemencie
    },
    function () {
      $(this).removeClass('read_button_cursor'); // Usuń klasę, gdy kursor zjedzie
    }
  );

  $('.header_block').hover(
    function () {
      $(this).addClass('header_block_cursor'); // Dodaj klasę, gdy kursor jest na elemencie
    },
    function () {
      $(this).removeClass('header_block_cursor'); // Usuń klasę, gdy kursor zjedzie
    }
  );

  $('.title').hover(
    function () {
      $(this).addClass('title_cursor'); // Dodaj klasę, gdy kursor jest na elemencie
    },
    function () {
      $(this).removeClass('title_cursor'); // Usuń klasę, gdy kursor zjedzie
    }
  );

  $('.button').hover(
    function () {
      $(this).addClass('button_cursor'); // Dodaj klasę, gdy kursor jest na elemencie
    },
    function () {
      $(this).removeClass('button_cursor'); // Usuń klasę, gdy kursor zjedzie
    }
  );

  // Otwieranie menu po kliknięciu ikony menu
  $('.icon_menu').on('click', function () {
    $('.buttons_menu').addClass('active'); // Dodaj klasę `active` do menu
  });

  // Zamykanie menu po kliknięciu ikony zamykania
  $('.icon_close').on('click', function () {
    $('.buttons_menu').removeClass('active'); // Usuń klasę `active` z menu
  });
});
