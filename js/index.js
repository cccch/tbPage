//导航栏显示
(function(){
    var a = document.querySelectorAll('.top-nav a');
    var arr = [];
    for(var i=0;i<a.length;i++){
        if(a[i].children.length==3){
            arr.push(a[i]);
        }
    }
    for(var i=0;i<arr.length;i++){
        arr[i].onmouseover = function(){
            this.style.backgroundColor = '#fff';
            this.children[this.children.length-1].style.display = 'block';
        }
        arr[i].onmouseout = function(){
            this.children[this.children.length-1].style.display = 'none';
            this.style.backgroundColor = '#f5f5f5';
        }
    }
})();

//关闭二维码
(function(){
    var btn = document.querySelectorAll('.top-search>i a')[0];
    btn.onclick = function(){
        this.parentNode.style.display = 'none';
    }
})();
//搜索标签
(function(){
    var spans = document.querySelectorAll('.top-search-center-tag span');
    for(var i=0;i<spans.length;i++){
        spans[i].onclick = function(){
            for(var j=0;j<spans.length;j++){
                spans[j].className = '';
            }
            this.classList.add('top-search-current');
        }
    }
})();
//倒计时
(function(){
    var i = document.querySelectorAll('.tao h3 i');
    var time1 = +new Date()+18000000;
    var timer = null;
    timer = setInterval(function(){
        var time2 = +new Date();
        var h,m,s;
        h = +Math.floor((time1-time2)/1000/60/60);
        m = +Math.floor(((time1-time2)/1000/60)%60);
        s = +Math.floor(((time1-time2)/1000)%60);
        h = h<10?'0'+h:h;
        s = s<10?'0'+s:s;
        m = m<10?'0'+m:m;
        i[0].innerHTML = h;
        i[1].innerHTML = m;
        i[2].innerHTML = s;
        if((time1-time2)<=0){
            clearInterval(timer);
            h='00';
            s='00';
            m='00';
            i[0].innerHTML = h;
            i[1].innerHTML = m;
            i[2].innerHTML = s;
        }
   },1000)
})();
//轮播图
(function(){
/*滚动函数*/
    var timer = null;
    function animate(target,distance,callback){
        clearInterval(timer);
        var current = target.offsetLeft;
        timer = setInterval(function(){
            var step = distance - target.offsetLeft>0?Math.ceil((distance - target.offsetLeft)/20):Math.floor((distance - target.offsetLeft)/20);
            current +=step;
            target.style.left = current +'px';
            if(distance - target.offsetLeft == 0){
                clearInterval(timer);
                callback&&callback()
            }

        },5)
    }

    //全局setinterval
    var ul = document.querySelector('.main-center-banner1 ul');
    lis = ul.children;
    function fn(){
        animate(ol,-520*(index+1),function(){
            index++;
            if(index==6){
                index = 1;
                ol.style.left = -520*index + "px";
            }
            if(index==0){
                index = 5;
                ol.style.left = -520*index + "px";
            }
            for(var i=0;i<lis.length;i++){
                lis[i].className = '';
            }
            lis[index-1].className = 'li-current';

        });
    }
    var index = 1;
    var timer2 = null;
    var ol = document.querySelector('.main-center-banner1 ol');
    ol.onmouseover = function(){
        clearInterval(timer2);
    }
    ol.onmouseout = function(){
        timer2 = setInterval(fn,3000);
    }
    timer2 = setInterval(fn,3000)

    //按钮函数
    var btn_left = document.querySelector('.main-center-banner1 .left-arc');
    var btn_right = document.querySelector('.main-center-banner1 .right-arc');
    btn_left.onclick = function(){
        clearInterval(timer2);

        animate(ol,-520*(index-1),function(){
            index--;

            if(index==6){
                index = 1;
                ol.style.left = -520*index + "px";
            }
            if(index==0){
                index = 5;
                ol.style.left = -520*index + "px";
            }
            for(var i=0;i<lis.length;i++){
                lis[i].className = '';
            }
            lis[index-1].className = 'li-current';

        });

        timer2 = setInterval(fn,3000);
    }
    btn_right.onclick = function(){
        clearInterval(timer2);

        animate(ol,-520*(index+1),function(){
            index++;
            if(index==6){
                index = 1;
                ol.style.left = -520*index + "px";
            }
            if(index==0){
                index = 5;
                ol.style.left = -520*index + "px";
            }
            for(var i=0;i<lis.length;i++){
                lis[i].className = '';
            }
            lis[index-1].className = 'li-current';
        });
        timer2 = setInterval(fn,3000);
    }
    //小圆点点击事件
    var ullis = document.querySelectorAll('.main-center-banner1 ul li');
    for(var i=0;i<ullis.length;i++){
        ullis[i].index = i;
        ullis[i].onclick = function(){
            index = this.index +1;
            animate(ol,-520*index,function(){
                if(index==6){
                    index = 1;
                    ol.style.left = -520*index + "px";
                }
                if(index==0){
                    index = 5;
                    ol.style.left = -520*index + "px";
                }
                for(var j=0;j<lis.length;j++){
                    lis[j].className = '';
                }
                lis[index-1].className = 'li-current';
            })
        }
    }

})();