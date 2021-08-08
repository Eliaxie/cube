
clicked = 0;
attribute = 0;

window.onscroll = function() {scroll()};


lunghezzalato = document.getElementById('lato').clientHeight;

var latoheight = $('.maintab').height();
latoheight = latoheight + 200;

$("#expansionface1").click(function()  {
  $('.transformmovement').toggleClass('.transformmovementreverse');
  $('.transformcube').toggleClass('transformcubereverse');

  window.scrollTo(0, 0);
  if (attribute==0) {
    document.body.setAttribute('data-theme', 'face1expanded');
    attribute=attribute+1;
  }
  else {
    document.body.removeAttribute('data-theme', 'face1expanded');
    attribute=attribute-1;
  }
  if (clicked % 2 == 0){
    document.getElementById("expansionface1").value = "-";
    $('.cube__face').css('max-height', latoheight + "px");
  }
  else {
    document.getElementById("expansionface1").value = "+";
    $('.cube__face').css('max-height', 'var(--cubeheightmax)');
  }

  clicked = clicked + 1;
});


function scroll() {
  if (clicked % 2 == 0){
      document.documentElement.style.setProperty('--scrollvaluehor', Math.min(document.documentElement.scrollTop/6, 180)+"deg");
      document.documentElement.style.setProperty('--scrollvaluever', Math.min(Math.max(document.documentElement.scrollTop/6 - 180, 0 ), 90)+"deg");
      document.documentElement.style.setProperty('--scrollvaluehorsecond', Math.min(Math.max(document.documentElement.scrollTop/6 - 270, 0 ), 180)+"deg");
  }
}
