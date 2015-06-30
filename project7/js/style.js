window.onload=function(){
    var nav=document.getElementById('nav');
    var lis=nav.getElementsByClassName('navLink');
    var menus=nav.getElementsByClassName('menu');
    console.log(lis);
    console.log(menus);
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){
                if(j!==this.index){
                    menus[j].style.display='none';
                }

            }
            if(menus[this.index].style.display=='none'){
               menus[this.index].style.display='block';
            }else{

                menus[this.index].style.display='none';
            }
        }
    }
}