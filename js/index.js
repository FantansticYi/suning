$(function () {
    /*手势切换轮播图*/
    /*1.自动轮播 无缝*/
    /*2.点随着变化*/
    /*3.完成手势切换*/

    var $banner = $('.sn_banner');
    var width = $banner.width();

    var $imageBox = $banner.find('ul:first');
    var $pointBox = $banner.find('ul:last');
    var $points = $pointBox.find('li');

    var animationFuc = function () {
        /*动画*/
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,function () {
            /*动画执行完成的回调*/
            if(index >= 9){
                index = 1;
                /*瞬间*/
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if(index <= 0 ){
                index = 8;
                /*瞬间*/
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            /*index  1-8*/
            /*2.点随着变化*/
            $points.removeClass('now').eq(index-1).addClass('now');

        });
    }

    /*1.自动轮播 无缝*/
    var index = 1;
    var timer = setInterval(function () {
        index ++;
        animationFuc();
    },5000);

    /*3.完成手势切换  android 4.0 兼容 */
    /*左滑的手势  下一张*/
    $banner.on('swipeLeft',function () {
        index ++;
        animationFuc();
    });
    /*右滑的手势  上一张*/
    $banner.on('swipeRight',function () {
        index --;
        animationFuc();
    });

});