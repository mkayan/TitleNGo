  $('.topnav li a').on('click', function () {
      // Reset the active class from siblings
      // Clear the sub link selection when the top link is not active
      // Add class to the parent li for every link
      // Add active to the first sibling
      $(this).parent()
          .siblings('.active').removeClass('active').end()
          .find('> .subnav li.active').removeClass('active').end()
          .addClass('active')
          .find('> .subnav li:first').addClass('active');
      $('#bannerImg').attr('src', 'assets/titlengo_subpage-banner-wide.jpg');
      $('#bannerImg').addClass('smallImg');
      $('.header').css("height", "200px");
      $('#bannerText').hide();
  });
  $('.smallnav li a').on('click', function () {
      $(this).parent()
          .siblings('.active').removeClass('active').end()
          .find('> .subnav li.active').removeClass('active').end()
          .addClass('active')
          .find('> .subnav li:first').addClass('active');

  });
  $('#collapsible-nav').hide();
  $('.navbar-toggle').click(function () {
      $('#collapsible-nav').toggle();
      $('img.bg').toggleClass('largeImg');
      $('.header').toggleClass('largeHeader');


  })
