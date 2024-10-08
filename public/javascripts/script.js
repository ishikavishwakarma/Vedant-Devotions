$(document).ready (() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleclass('active')
    })
})



// videoslider

$('#facebook_0').magnificPopup({
    items: {
      src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556367432847'
    },
    type: 'iframe'
  });
  
  
  $('#facebook_1').magnificPopup({
    items: {
      src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556367432847'
    },
    type: 'iframe'
  });
  
  $('#facebook_2').magnificPopup({
    items: {
      src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556282892847'
    },
    type: 'iframe'
  });
  
  
  $('#facebook_3').magnificPopup({
    items: {
      src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154603410842847'  },
    type: 'iframe'
  });
  
  $('#facebook_4').magnificPopup({
    items: {
      src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154582395637847'  },
    type: 'iframe'
  });
  
  $('#facebook_5').magnificPopup({
    items: {
      src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556282892847'  },
    type: 'iframe'
  });
  $('#facebook_6').magnificPopup({
    items: {
      src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556367432847'  },
    type: 'iframe'
  });



  // welcome nav

  const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
 
  // endd welcome

// videoslider


// signup section
