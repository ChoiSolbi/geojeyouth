// $(document).ready(function(){})
$(function () {
  //all-menu modal
  const all_menu = $(".all-menu"),
    all_menu_wrapper = $(".all-menu-wrapper"),
    all_menu_mask = $(".all-menu-mask"),
    all_menu_close = $(".all-menu-close");
  // console.log(all_menu);
  // console.log(all_menu_wrapper);
  // console.log(all_menu_mask);
  // console.log(all_menu_close);

  //all-menu 버튼이 클릭되면 (click event)
  // -전체메뉴 모달창과 mask later가 나타난다
  all_menu.click(function () {
    all_menu_wrapper.addClass("active");
    all_menu_mask.addClass("active");
  });

  //all_menu_close 버튼이 클릭되면(click event)
  // -전체메뉴 모달창과 mask later가 사라진다
  all_menu_close.click(function () {
    all_menu_wrapper.removeClass("active");
    all_menu_mask.removeClass("active");
  });

  //모바일 메뉴기능
  const mb_bt = $(".mb-bt"),
    mb_nav = $(".mb-nav"),
    mb_menu_mask = $(".mb-menu-mask");

  // console.log(mb_menu_mask);
  // console.log(mb_nav);
  // console.log(mb_bt);
  //모바일 버튼이 클릭되면
  //-1. 모바일 메뉴가 생기고
  //-2. 모바일 버튼이 x로 변환됨
  mb_bt.click(function (e) {
    e.preventDefault();
    //클릭했을때 링크를 막아준다(a태그일때) 고유 default값을 막겠다

    mb_nav.toggleClass("active");
    mb_menu_mask.toggleClass("active");
    mb_bt.toggleClass("active");
    mb_menu_li.height(54);
  });
  //화면사이즈 체크
  //window사이즈가 리사이즈 되면 할일
  $(window).resize(function () {
    //화면너비를 계산한다.
    let temp = $(window).width();
    // console.log(temp);
    //1200px보다 크면 할일
    // 1.모바일 메뉴와 마스크레이어 제거(removeClass)
    // 2.모바일 버튼 제거(removeClass)
    // 3.모든 모바일 메뉴의 서브메뉴를 접는다.
    //1200px보다 작으면 할일
    // 1.전체메뉴와 마스크레이어 제거(removeClass)
    if (temp > 1200) {
      mb_nav.removeClass("active");
      mb_menu_mask.removeClass("active"); //1
      mb_bt.removeClass("active"); //2
      mb_menu_li.height(54); //3
    } else {
      all_menu_wrapper.removeClass("active");
      all_menu_mask.removeClass("active");
    }
  });
  // 모바일 서브메뉴 펼치기(아코디언) 기능
  const mb_menu_li = $(".mb-menu > li"),
    mb_submenu = $(".mb-submenu"),
    mb_mainMenu = $(".mb-mainMenu");
  // console.log(mb_menu_li);
  // console.log(mb_submenu);
  // console.log(mb_mainMenu);
  //펼쳐질 서브메뉴의 높이값 저장
  let mb_submenu_height = []; //배열선언

  //서브메뉴의 높이값을 계산하여 배열값으로 지정
  mb_submenu.each(function (index) {
    // 각각의 .mb-submenu로 가서
    // li의 개수를 파악
    let count = $(this).find("li").length;
    mb_submenu_height[index] = 52 * count + 22;
    // console.log(count);
  });
  // console.log(mb_submenu_height);

  // mb_mainMenu.each(function (index) {
  //   $(this).click(function (e) {
  //     e.preventDefault();
  //     // console.log("click : " + index);
  //     $(this).toggleClass("open");
  //     let isOpen = $(this).hasClass("open"); // hasClass=classList.contain 가지고 있는가
  //     if (isOpen) {
  //       let temp = mb_submenu_height[index];
  //       mb_menu_li.eq(index).height(temp + 54);
  //     } else {
  //       mb_menu_li.eq(index).height(54);
  //     }
  //   });
  // });

  //모바일 메뉴(li>a(.mb-mainMenu))클릭했을때
  mb_mainMenu.each(function (index) {
    $(this).click(function (e) {
      e.preventDefault();
      // console.log("click : " + index);
      $(this).toggleClass("open");
      let isOpen = $(this).hasClass("open");
      if (isOpen) {
        // mb_menu_li.height(54); //서브메뉴 다른거 클릭하면 열려있는 서브메뉴 닫기 //아코디언기능 추가
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
  //화면위로 이동
  $(".gotop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //비주얼 슬라이드
  let sw_visual = new Swiper(".sw-visual", {
    autoplay: true,
    loop: true,
    effect: "fade",
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //비주얼 슬라이드 일시멈춤 버튼
  const swiper_start = $(".swiper-start");

  swiper_start.click(function (e) {
    e.preventDefault();
    $(this).toggleClass("play");
    let temp = $(this).hasClass("play");
    if (temp) {
      // 슬라이드 멈춤
      sw_visual.autoplay.stop();
    } else {
      // 슬라이드 재생
      sw_visual.autoplay.start();
    }
  });

  //배너 슬라이드
  let sw_banner = new Swiper(".sw-banner", {
    autoplay: true,
    loop: true,
    slidesPerView: "auto",
    navigation: {
      prevEl: ".banner-back",
      nextEl: ".banner-forward",
    },
  });
  //배너 슬라이드 일시멈춤 버튼
  $(".banner-play").click(function () {
    let temp = $(this).find("span").text();
    if (temp == "play_arrow") {
      $(this).find("span").text("pause");
      sw_banner.autoplay.start();
    } else {
      $(this).find("span").text("play_arrow");
      sw_banner.autoplay.stop();
    }
  });
});
