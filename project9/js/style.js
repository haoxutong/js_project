window.onload= function () {
    var oDiv=document.getElementById('box');
    var aPicLi=document.getElementById('pic_list').getElementsByTagName('li');
    var aTxtLi=document.getElementById('text_list').getElementsByTagName('li');
    var oIcoUl=document.getElementById('ico_list').getElementsByTagName('ul')[0];
    var aIcoLi=oIcoUl.getElementsByTagName('li');
    var oBtnPrev=document.getElementById('btn_prev');
    var oBtnNext=document.getElementById('btn_next');
    var iNowUlLeft=0;
    var iNow=0;
    var i=0;
    oBtnPrev.onclick=function(){
        if(iNowUlLeft>0){
            iNowUlLeft--;
            fixUlLeft();
        }
    };
    function fixUlLeft(){
        oBtnPrev.className=iNowUlLeft==0?'btn':'btn showBtn';
        oBtnNext.className=iNowUlLeft==(aIcoLi.length-7)?'btn':'btn showBtn';
        miaovStartMove(oIcoUl,{left:-aIcoLi[0].offsetWidth*iNowUlLeft})

    }
}