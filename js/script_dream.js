$(function () {
  const all_menu = $(".all-menu"),
    all_menu_wrapper = $(".all-menu-wrapper"),
    all_menu_mask = $(".all-menu-mask"),
    all_menu_close = $(".all-menu-close");

  //all-menu 버튼이 클릭되면 (click event)
  all_menu.click(function () {
    all_menu_wrapper.addClass("active");
    all_menu_mask.addClass("active");
  });

  //all_menu_close 버튼이 클릭되면(click event)
  all_menu_close.click(function () {
    all_menu_wrapper.removeClass("active");
    all_menu_mask.removeClass("active");
  });

  const mb_bt = $(".mb-bt"),
    mb_nav = $(".mb-nav"),
    mb_menu_mask = $(".mb-menu-mask");

  //모바일 버튼이 클릭
  mb_bt.click(function (e) {
    e.preventDefault();

    mb_nav.toggleClass("active");
    mb_menu_mask.toggleClass("active");
    mb_bt.toggleClass("active");
    mb_menu_li.height(54);
  });

  $(window).resize(function () {
    let temp = $(window).width();
    if (temp > 1200) {
      mb_nav.removeClass("active");
      mb_menu_mask.removeClass("active");
      mb_bt.removeClass("active");
      mb_menu_li.height(54);
    } else {
      all_menu_wrapper.removeClass("active");
      all_menu_mask.removeClass("active");
    }
  });

  const mb_menu_li = $(".mb-menu > li"),
    mb_submenu = $(".mb-submenu"),
    mb_mainMenu = $(".mb-mainMenu");
  let mb_submenu_height = [];

  mb_submenu.each(function (index) {
    let count = $(this).find("li").length;
    mb_submenu_height[index] = 52 * count + 22;
  });

  mb_mainMenu.each(function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      $(this).toggleClass("open");
      let isOpen = $(this).hasClass("open");
      if (isOpen) {
        let temp = mb_submenu_height[index];
        mb_menu_li.eq(index).height(temp + 54);
      } else {
        mb_menu_li.eq(index).height(54);
      }
    });
  });

  mb_menu_mask.click(function () {
    mb_nav.removeClass("active");
    mb_menu_mask.removeClass("active");
    mb_bt.removeClass("active");
    mb_menu_li.height(54);
  });
  let intSlide = new Swiper(".intro-slide", {
    loop: true,
    navigation: {
      prevEl: ".slide-pre",
      nextEl: ".slide-next",
    },
  });
  let photo = $(".photo a img");

  //화면위로 이동
  $(".gotop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
