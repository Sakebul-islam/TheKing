(function ($) {
  // preloder
  $(document).ready(function () {
    // Users can skip the loading process if they want.

    // Will wait for everything on the page to load.
    $(window).bind("load", function () {
      $(".preloder-overlay, body").addClass("loaded");
      setTimeout(function () {
        $(".preloder-overlay").css({ display: "none" });
      }, 2000);
    });

    // Will remove overlay after 1min for users cannnot load properly.
    setTimeout(function () {
      $(".overlay, body").addClass("loaded");
    }, 60000);
  });

  // lightcase
  $(function () {
    $("a[data-rel^=lightcase]").lightcase();
  });
  // lightcase gallery
  $(function () {
    $(".gallery").lightcase();
  });

  // header top show and hide
  $(".icofont-info-square").on("click", function (e) {
    var element = $(".header__top");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.slideUp(300, "swing");
      $(".overlayTwo").removeClass("active");
    } else {
      element.addClass("open");
      element.slideDown(300, "swing");
      $(".overlayTwo").addClass("active");
    }
  });

  // sticky menu
  $(function () {
    var fixed_top = $(".header");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 400) {
        fixed_top.addClass("animated fadeInDown menu-fixed");
      } else {
        fixed_top.removeClass("animated fadeInDown menu-fixed");
      }
    });
  });
  // search button
  $(function () {
    $(document).on("click", ".search, .search__close", function () {
      $(".search__input").toggleClass("show");
    });
  });

  // side-bar cart
  $(function () {
    $(document).on(
      "click",
      ".add-cart__button, .side__sidebar-close",
      function () {
        $(".cart__sidebar").toggleClass("show");
      }
    );
  });

  // header top cart item remove
  $(function () {
    $(".remove-cart").on("click", function (e) {
      e.preventDefault();
      $(this).parent().parent().parent().hide(400);
    });
  });

  // shop cart + - start here
  $(function () {
    $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  });

  // revew slider
  $(function () {
    $(".revew-slide").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,

      responsive: [
        {
          breakpoint: 768,
          pauseOnHover: false,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  // sponsor slider
  $(function () {
    $(".sponsor__wrapper").slick({
      arrows: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      loop: true,
      pauseOnHover: false,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  // blog page image slider
  $(function () {
    $(".slider-img").slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });
  });

  // Cart page product-itm remove
  $(function () {
    $(".delet").on("click", function (e) {
      e.preventDefault();
      $(this).parent().parent().hide(300);
    });
  });

  // filter active class add
  $(function () {
    $(".filter-item").click(function () {
      $(".filter-item").removeClass("active");
      $(this).addClass("active");
    });
  });

  // scroll up start here
  $(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").css({
          bottom: "5%",
          opacity: "1",
          transition: "all 0.5s ease",
        });
      } else {
        $(".scrollToTop").css({
          bottom: "-30%",
          opacity: "0",
          transition: "all .5s ease",
        });
      }
    });

    //Click event to scroll to top
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  });

  // model option start here
  $(function () {
    $(".view-modal").on("click", function () {
      $(".modal").addClass("show");
    });
    $(".close").on("click", function () {
      $(".modal").removeClass("show");
    });
  });

  // product view mode change js
  $(function () {
    $(".shop-page__product-view-style").on("click", "a", function (e) {
      e.preventDefault();
      var shopProductWrap = $(".product-wrapper");
      var viewMode = $(this).data("target");
      $(".shop-page__product-view-style a").removeClass("active");
      $(this).addClass("active");
      shopProductWrap.removeClass("grid list").addClass(viewMode);
    });
  });

  // banner__slider;
  $(function () {
    $(".banner__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
    });
  });

  // ajax contact form
  $(document).ready(function () {
    $(function () {
      var form = $("#contact-form");
      var formMessages = $(".form-message");
      $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
          type: "POST",
          url: $(form).attr("action"),
          data: formData,
        })
          .done(function (response) {
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");
            $(formMessages).text(response);
            $("#contact-form input, #contact-form textarea").val("");
          })
          .fail(function (data) {
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");
            if (data.responseText !== "") {
              $(formMessages).text(data.responseText);
            } else {
              $(formMessages).text(
                "Oops! An error occured and your message could not be sent."
              );
            }
          });
      });
    });
  });

  //Menu Dropdown Icon Adding
  $("ul")
    .parent("li")
    .hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos,
        });
      }
    });
  $(".menu li a").on("click", function (e) {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(300, "swing");
    } else {
      element.addClass("open");
      element.children("ul").slideDown(300, "swing");
      element.siblings("li").children("ul").slideUp(300, "swing");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp(300, "swing");
    }
  });

  $(".header-bar").on("click", function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("active");
    $(".menu").toggleClass("active");
  });
  $(".search-button").on("click", function () {
    $(".header-form").addClass("active");
  });
  $(".header-form .bg-lay").on("click", function () {
    $(".header-form").removeClass("active");
  });
})(jQuery);
