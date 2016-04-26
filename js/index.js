window.onload=function(){
    var $btn=$('li','.min-nav');
    var $sd=$('.min-slide-nav');
    $sd.hide();
    var flag=true;
    $btn.eq(0).click(function(){
        if(flag){
            $sd.slideDown();
            flag=false;
            return;
        }
        if(!flag){
            $sd.slideUp();
            flag=true;
        }

    })
    var $bnBox=$('.banner');
    var $banner=$('a','.wheel');
    var $w=$banner.width();
    var $b=$('a','.an');
    $b.eq(0).addClass('current');
    $banner.css('left',$w).eq(0).css('left',0);
    var now=0;
    var next=0;
    var t=setInterval(move,3000);
    function move(){
        next++;
        if(next>=$banner.length){
            next=0;
        }
        $banner.eq(now).animate({'left':-$w},function(){
            $(this).css('left',$w);
            $b.removeClass().eq(next).addClass('current');
        });
        $banner.eq(next).animate({'left':0},function(){
            now=next;
        });
    //    $b.click(function(){
    //        var index=$(this).index();
    //        if(index>now){
    //            $banner.eq(now).animate({'left':-$w},function(){
    //                $(this).css('left',$w);
    //                $b.removeClass().eq(index).addClass('current');
    //            });
    //            $banner.eq(index).animate({'left':0},function(){
    //                now=index=next;
    //            });
    //        }
    //        if(index<now){
    //            $banner.eq(now).animate({'left':$w},function(){
    //                $(this).css('left',$w);
    //                $b.removeClass().eq(index).addClass('current');
    //            });
    //            $banner.eq(index).css('left',-$w).animate({'left':0},function(){
    //                now=index=next;
    //            });
    //        }
    //    //})
    }
    $bnBox.mouseover(function(){
        clearInterval(t);
    }).mouseout(function(){
        t=setInterval(move,3000);
    });


    var $fslide=$('.slide-info','.footer-info-min');
    var $fbtns=$('li','.footer-info-min');
    $fslide.hide();
    var flag=true;
    $fbtns.click(function(){
        var index=$(this).index();
        if(flag){
            $fslide.hide().eq(index).slideDown();
            flag=false;
            return;
        }
       if(!flag){
           $fslide.eq(index).slideUp();
           flag=true;
       }
    })
}