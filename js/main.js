var rellax = new Rellax(' .rellax ',{
        
  // 中央寄せ
  center: true
  
});

$(window).scroll(function (){
  $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
          }
      });
  });

$("#nav_icon").hover(function() {
  $("#drop_nav").animate({"top": '40px'},600);
  $("#drop_nav").css({"visibility": 'visible'});
}, function() {
  $("#drop_nav").animate({"top": 0},600);
});

var pics_src = new Array("./images/girl.jpg","./images/top_app.png");
var right_src = new Array("./images/model2.png","./images/pc.png");
var colors= new Array("#a2d1be","#f2f2f2");
var colors2 = new Array("#d9f0f2","#3f3736");
var left_color = $("#left_color");
var right_color=$('#right_color');
            var num = 0;
            var count = -1;
            slideshow_timer();

            function slideshow_timer(){
              if (num == 2){
                  num = 0;
              }
              if(count >= 4){
                count = 0;
              }
              count ++;
              if(count >=0){
                if(count%4 == 3){
                document.getElementById("right").src=right_src[num];
                num ++;
                }
                else if(count%4==2){
                  document.getElementById("left").src=pics_src[num];
                  right_color.css({"background-color": colors2[num]});
                  right_color.addClass('add_ani');
                }else if(count%4==1){
                  left_color.css({"background-color": colors[num]});
                  left_color.addClass('add_ani');
                  right_color.removeClass('add_ani');
                }else{
                  left_color.removeClass('add_ani');
                }
                setTimeout("slideshow_timer()",1200); 
              }
            }

$(function(){

      
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function() {
       // スクロールの速度
       var speed = 400; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });

    var headNav = $("#nav_bar");
	//scrollだけだと読み込み時困るのでloadも追加
	$(window).on('load scroll', function () {
		//現在の位置が500px以上かつ、クラスfixedが付与されていない時
		if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
			//headerの高さ分上に設定
			headNav.css({"top": '-100px'});
			//クラスfixedを付与
			headNav.addClass('fixed');
			//位置を0に設定し、アニメーションのスピードを指定
            headNav.animate({"top": 0},600);
            headNav.css({"visibility": 'visible'});
		}
		//現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
		else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
            headNav.removeClass('fixed');
            headNav.css({"visibility": 'hidden'});
            $("#drop_nav").css({"visibility": 'hidden'});
		}
    });
    
    // $(function() {
    //     $('#works a').bind('click', function(event) {
    //       var $anchor = $(this);
    //       /*
    //       if you want to use one of the easing effects:
    //       $('html, body').stop().animate({
    //           scrollLeft: $($anchor.attr('href')).offset().left
    //       }, 1500,'easeInOutExpo');
    //        */
    //       $('html, body').stop().animate({
    //         scrollLeft: $($anchor.attr('href')).offset().left
    //       }, 1000);
    //       event.preventDefault();
    //     });
    //   });
 });