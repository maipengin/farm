$(window).on('load',function(){
  $("#splash-logo").delay(1000).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1000).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg1').on('animationend', function() {
  //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる

  });

  // ＊季節のしおり
function fadeAnime(){
  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述


  var parallaxBkImg = function(){
    $(window).on('load resize', function() {
      $(window).on('load scroll', function(){
        var $winTop = $(window).scrollTop();
        var $target = $('.p-bgImage');
        var $winWidth = $(window).width();
        if($winWidth < 736) {
          $target.each(function(index){
            var $position = $winTop - $target.eq(index).offset().top;
            if($winTop > $target.eq(index).offset().top - 800) {
              $target.eq(index).css({
                'background-position-y': $position * .4
              });
            }
          });
        }
      });
    });
  }();
