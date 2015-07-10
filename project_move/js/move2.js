/**
 * @author miaov
 */
function getStyle(obj, attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, json,fn)
{
    clearInterval(obj.timer);

    obj.timer=setInterval(function (){
        //1.取当前值
        var iCur=0;
        var bStop=true;//这一次运动结束---所有的值都到达啦
        for( var attr in json){
            if(attr=='opacity')
            {
                iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
            }
            else
            {
                iCur=parseInt(getStyle(obj, attr));
            }
//2.计算速度值
            var iSpeed=(json[attr]-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

            if(iCur!=json[attr])
            {
                bStop=false;
            }

                if(attr=='opacity')
                {
                    obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
                    obj.style.opacity=(iCur+iSpeed)/100;
                }
                else
                {
                    obj.style[attr]=iCur+iSpeed+'px';
                }
            if(bStop){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }
        }

    }, 30)
}/**
 * Created by xutong on 2015/7/8.
 */
