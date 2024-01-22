// $("body").animate({scrollTop : 200} , 3000)

$(function () {
  let sidebarInnerWidth = $(".sideBar-inner").innerWidth();
  $("#sideBar").animate({ left: -sidebarInnerWidth });

  $(".spinner").fadeOut(1000, function () {
    $("#loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $("#loading").remove();
    });
  });

  // /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  // particlesJS.load("particles-js", "js/particles.json", function () {
  //   console.log("callback - particles.js config loaded");
  // });

  let sectionOffset = $("#about").offset().top;
  // console.log(sectionOffset)
  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    // console.log(windowScroll);
    if (windowScroll > sectionOffset - 50) {
      $(".navbar").css("backgroundColor", "rgba(0,0,0,0.7)");
      $("#btnUp").fadeIn(500);
    } else {
      $(".navbar").css("backgroundColor", "transparent");
      $("#btnUp").fadeOut(500);
    }
  });

  $("a[href^='#']").click(function (eventInfo) {
    let aHref = eventInfo.target.getAttribute("href");
    let section = $(aHref).offset().top;
    $("html , body").animate({ scrollTop: section }, 1000);
  });

  $("#btnUp").click(function () {
    $("html , body").animate({ scrollTop: 0 }, 1000);
  });

  let colorBox = $(".color-box");

  colorBox.eq(0).css("backgroundColor", "#09c");
  colorBox.eq(1).css("backgroundColor", "white");
  colorBox.eq(2).css("backgroundColor", "lightgreen");
  colorBox.eq(3).css("backgroundColor", "lightblue");
  colorBox.eq(4).css("backgroundColor", "grey");

  colorBox.click(function (eventInfo) {
    let bgColor = $(eventInfo.target).css("backgroundColor");
    $("h3 , h1").css("color", bgColor);
  });

  $(".imgItem").click(function (eventInfo) {
    let imgSrc = eventInfo.target.getAttribute("src");
    $(".header").css("backgroundImage", `url(${imgSrc})`);
  });

  $("#sideBar i").click(function () {
    if ($("#sideBar").css("left") == "0px") {
      $("#sideBar").animate({ left: -sidebarInnerWidth }, 1000);
    } else {
      $("#sideBar").animate({ left: "0px" }, 1000);
    }
  });
});

// $(document).ready(function(){
//   $(".spinner").fadeOut(1000 , function () {
//       $("#loading").fadeOut(1000 , function(){
//         $("body").css("overflow" , "auto");
//         $("#loading").remove()
//       })
//     })
// })
