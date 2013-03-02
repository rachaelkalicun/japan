//= require_tree .

$.hisrc.speedTest();

$(document).ready(function(){
  $(".flexnav").flexNav();
  $(".hisrc img").hisrc({
    useTransparentGif: true,
    transparentGifSrc: '/images/spacer.gif' // use for IE
  });

});