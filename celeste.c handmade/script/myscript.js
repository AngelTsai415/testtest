$(function () {

    
    //滑動至指定位置
    $("nav a").click(function () {
        var btn = $(this).attr("href"); //返回取得屬性與值
        var pos = $(btn).offset(); //抓取相對的座標位置
        $("html,body").animate({ scrollTop: pos.top }, 1000);
        //變數pos的top(y軸)
    });

    //置頂按鈕
    $("#gotop").click(function(){
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    //淡出淡入
    $(window).scroll(function(){

        if( $(this).scrollTop() > 200 ){

            $('#gotop').stop().fadeTo('fast',.7)

        } else {

            $('#gotop').stop().fadeOut('fast')

        }
    });

    //滾動滑入效果
    $('.box').smoove({

      offset: '30%',
      moveX: '100px',
      moveY: '100px' 
    
    });

    


});