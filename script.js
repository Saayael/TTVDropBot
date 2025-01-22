function usBanner() {
  $('#image1').delay(6000).fadeOut(3000).delay(6000).fadeIn(3000);
  $('#image2').delay(6000).fadeIn(3000).delay(6000).fadeOut(3000);
};
setInterval("usBanner()", 18000);