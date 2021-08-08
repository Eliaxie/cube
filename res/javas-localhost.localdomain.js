
clicked = 0;

window.onscroll = function() {scroll()};

lunghezzalato = document.getElementById('lato').clientHeight;

$("#expansionface1").click(function()  {
  window.scrollTo(0,0);
  document.documentElement.style.setProperty('--scrollvaluehor', 0+"deg");
  document.documentElement.style.setProperty('--scrollvaluever', 0+"deg");
  document.documentElement.style.setProperty('--scrollvaluehorsecond', 0+"deg");
  $('.maintab').toggleClass('maintab-active');
  $('.cube__face').toggleClass('cube__face-active');
  $('.cube').toggleClass('cube-active');
  $('.scene').toggleClass('scene-active');
  $('.body').toggleClass('body-active');
  $('.expansionbar').toggleClass('expansionbar-active');
  clicked = clicked + 1;
});


function scroll() {
  if (clicked % 2 == 0){
      document.documentElement.style.setProperty('--scrollvaluehor', Math.min(document.documentElement.scrollTop/6, 180)+"deg");
      document.documentElement.style.setProperty('--scrollvaluever', Math.min(Math.max(document.documentElement.scrollTop/6 - 180, 0 ), 90)+"deg");
      document.documentElement.style.setProperty('--scrollvaluehorsecond', Math.min(Math.max(document.documentElement.scrollTop/6 - 270, 0 ), 180)+"deg");
  }
}
