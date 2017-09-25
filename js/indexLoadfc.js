/**
* 功能：页面的每个功能
**/
/************************************************/
/********** 首页和子页面的功能 ********/
/************************************************/

/**********************************/
/**** 功能1：图片轮播 *****/
/**********************************/
function homepage(){
    //获取第一行第一列的元素
    var firrow = document.getElementsByClassName("firstline_firstrow")[0];
    //定义一个计数器来记录图片变化的过程
    var a = 0;
    //轮播功能
    function photograph(){
        if(a<3){
            a++;
        }else{
            a=0;
        }
        firrow.style.backgroundImage = 'url(img/furn_low' +(a+1)+ '.jpg)';
    }
    setInterval(photograph,2000);
}
/**********************************/
/**** 功能2：动态加载商品展示页面的内容数据 *****/
/**********************************/
//定义一个对象
var data = {
    sofa:{
        Name: "沙发&nbsp;&nbsp;&nbsp;SOFAS",
        navName: ["全部","单人床","双人床","三人床","休闲床","转角沙发"],
        imgName: "../img/timg-log2.jpg",
        goodsName: "高级沙发",
        oldPrice: "￥980",
        newPrice: "￥400"
    },
    table:{
        Name: "桌椅&nbsp;&nbsp;&nbsp;TABLES/CHAIRS",
        navName: ["全部","餐桌","书桌","电脑桌","梳妆台","餐椅","凳子","休闲椅","户外椅","其他"],
        imgName: "../img/timg-log2.jpg",
        goodsName: "高级桌子",
        oldPrice: "￥780",
        newPrice: "￥800"
    },
    bed:{
        Name: "床&nbsp;&nbsp;&nbsp;BEDS",
        navName: ["全部","1.5M床","1.8M床","其他"],
        imgName: "../img/timg-log2.jpg",
        goodsName: "高级床铺",
        oldPrice: "￥780",
        newPrice: "￥800" 
    },
    storage:{
        Name: "柜&nbsp;&nbsp;&nbsp;STORAGE",
        navName: ["全部","衣柜","储物柜","电视柜","书柜","鞋柜","床头柜","其他"],
        imgName: "../img/timg-log2.jpg",
        goodsName: "高级柜子",
        oldPrice: "￥780",
        newPrice: "￥800"  
    },
    more:{
        Name:"更多&nbsp;&nbsp;&nbsp;MORE",
        navName: ["全部","组合产品","日用家居","家居饰品","其他"],
        imgName: "../img/timg-log2.jpg",
        goodsName: "高级跟多",
        oldPrice: "￥780",
        newPrice: "￥800"  
    }
}
//将对象里数组部分的长度取出
var sofa_leng = data.sofa.navName.length,
    table_leng = data.table.navName.length,
    bed_leng = data.bed.navName.length,
    storage_leng = data.storage.navName.length,
    more_leng = data.more.navName.length;
//将对象的下标用一个变量存起来
var sofa = data.sofa,
    table = data.table,
    bed = data.bed,
    storage = data.storage,
    more = data.more;
//通过对象里的数组navName里的长度来的每个li的长度
function show(name,leng){
    //定义一个空变量来内容li
    var ss = "";
    for(var i = 0;i<leng;i++){
        ss += '<li>'+'<a href="">'+name.navName[i]+'</a>'+'</li>';
    }
    return ss;
}
//每个子页面界面(沙发，床，柜，更多，桌椅)
function Childpage(name,leng){
    //获取section容器
    var section = document.getElementsByTagName("section")[0];
    section.innerHTML += '<div class="classifyBanner">'+
        '<h1>'+name.Name+'</h1>'+
        '<ul>'+show(name,leng)+
        '</ul>'+
        '</div>'+
        '<div class="classifyheader">'+
        '<div class="classifyheader_ datum">'+
        '<a href="">材料</a>'+
        '<ul>'+
        '<li>实木</li>'+
        '<li>其他</li>'+
        '</ul>'+
        '</div>'+
        '<div class="classifyheader_Cond">'+
        '<a href="">成色</a>'+
        '<ul>'+
        '<li>9成新以上</li>'+
        '<li>7-9成新</li>'+
        '<li>5-7成新</li>'+
        '<li>其他</li>'+
        '</ul>'+
        '</div>'+
        '<div class="classifyheader_Price">'+
        '<a href="">价格</a>'+
        '<ul>'+
        '<li>从低到高</li>'+
        '<li>从高到底</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<div class="clear"></div>'+
        '<div class="shop_selection">'+
        '<!--第一行-->'+
        '<div class="shop_selectionline1">'+
        '<!--第一列-->'+
        '<div class="selecline1 low1">'+
        '<figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '<!--第二列-->'+
        '<div class="selecline1 low2">'+
        '<figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '<!--第三列-->'+
        '<div class="selecline1 low3">'+
        ' <figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '</div>'+
        '<div class="clear"></div>'+
        '<!--第二行-->'+
        '<div class="shop_selectionline2">'+
        '<!--第一列-->'+
        '<div class="selecline2 low1">'+
        '<figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '<!--第二列-->'+
        '<div class="selecline2 low2">'+
        '<figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '<!--第三列-->'+
        '<div class="selecline2 low3">'+
        '<figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '</div>'+
        '<div class="clear"></div>'+
        '<!--第三行-->'+
        '<div class="shop_selectionline3">'+
        '<!--第一列-->'+
        '<div class="selecline3 low1">'+
        '<figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '<!--第二列-->'+
        '<div class="selecline3 low2">'+
        '<figure class="low1_count"></figure>'+
        '<address class="low1_rate">'+
        '<span class="rateName">'+name.goodsName+'</span>'+
        '<span class="rate_number">'+
        '<span class="cost price">'+name.oldPrice+'</span>'+
        '<span>'+name.newPrice+'</span>'+
        '</span>'+
        '</address>'+
        '</div>'+
        '</div>'+
        '<div class="clear"></div>'+
        '</div>'; 
}
//设置子页面导航栏样式
function styleul(ulwith,liwidth){
    //获取元素ul和里
    var div_ul = document.getElementsByClassName("classifyBanner")[0],
        ul = div_ul.children[1];
    var ul_li = ul.getElementsByTagName("li");
    //更改当前ul的宽度
    ul.style.width = ulwith;
    for(var c = 0; c<=ul_li.length; c++){
        ul_li[c].style.width = liwidth;
    }
}
/******************************/
/*功能3：展示商品后点击跳转到商品详细界面*/
/******************************/
function url(){
    var low1 = document.getElementsByClassName("low1")[0];
    low1.onclick = function(){
        location.href = "goodspage.html";
    }
}
/**图片选项功能**/
function imgdispaly(){
    //获取每一张图片
    var img = document.getElementsByTagName("img");
    //获取缩略图按钮
    var div_img = document.getElementsByClassName("img_secondary")[0],
        img_li = div_img.getElementsByTagName("li"),
        img_li_leng = img_li.length;
    for(var a = 0; a<img_li_leng; a++){
        img_li[a].index = a;
        img_li[a].onclick = function(){
            for(var a = 0; a<img_li_leng; a++){
                img_li[a].className = "";
                img[a].style.display = 'none';
            }
            this.className = 'active';
            img[this.index].style.display = 'block';
        }
    }
}
/**库存数量功能**/
function number(){
    //获取文本框
    var textNumber = document.getElementsByClassName("shopNumber")[0];
    //获取"＋"按钮
    var plus = document.getElementsByClassName("plus")[0],
        //获取"-"按钮
        minus = document.getElementsByClassName("minus")[0];
    plus.onclick = function(){
        var a = Number(textNumber.value);
        if(a < 5){
            a++;
            textNumber.value = a;
        }else{
            plus.disabled = true;
            plus.style.cursor = 'not-allowed';
            minus.style.cursor = 'pointer';
        }
    }
    minus.onclick = function(){
        var a = Number(textNumber.value);
        if(a < 1){
            minus.disabled = true;
            minus.style.cursor = 'not-allowed';
            plus.style.cursor = 'pointer';
        }else{
            a--;
            textNumber.value = a;
        } 
    }
}
/*********************************************/
/*功:4：登录功能 */
/*********************************************/
function login(){
    //获取注册邮箱
    var user = document.getElementsByClassName("userName")[0];
    //获取邮提示信息
    var logBox = document.getElementsByClassName("loginBox")[0],
        span_Prompt = logBox.getElementsByTagName("span");
    //获取密码框
    var userPwd = document.getElementsByClassName("userPwd")[0];

    //获取登录按钮
    var loginBtn = document.getElementsByClassName("loginBtn")[0];
    /***验证登录的账号和密码是否正确****/
    user.oninput = function(){
        var login_user = user.value;
        var register_user = sessionStorage.getItem("user");
        if(login_user == register_user){
            span_Prompt[0].textContent = "√";
            loginBtn.disabled = false;
            span_Prompt[0].style.color = "#299a25";
        }else{
            span_Prompt[0].textContent = "";
            loginBtn.style.cursor = 'not-allowed';
        }
    }
    userPwd.oninput = function(){
        var login_pwd = userPwd.value;
        var register_pwd = sessionStorage.getItem("newpwd");
        if(login_pwd == register_pwd){
            span_Prompt[1].textContent = "√";
            loginBtn.style.cursor = 'pointer';
            loginBtn.style.backgroundColor = "#299a25";
            span_Prompt[1].style.color = "#299a25";
        }else{
            span_Prompt[1].textContent = "";
            loginBtn.disabled = false;
            loginBtn.style.backgroundColor = "#838281";
        }
    } 
    //调用loginBtn点击事件函数
    loginregi();
}
//获取登录界面的登录按钮
function loginregi(){
    //获取注册邮箱
    var user = document.getElementsByClassName("userName")[0];
    //获取邮提示信息
    var logBox = document.getElementsByClassName("loginBox")[0],
        span_Prompt = logBox.getElementsByTagName("span");
    //获取密码框
    var userPwd = document.getElementsByClassName("userPwd")[0];
    //获取登录按钮
    var loginBtn = document.getElementsByClassName("loginBtn")[0];
    loginBtn.onclick = function(){
        var register_user = sessionStorage.getItem("user");
        var login_btn = document.getElementsByClassName("login_btn")[0];
        alert("登录成功");
        location.href = "#";
        user.value = ""
        userPwd.value = "";
        span_Prompt[0].textContent = "";
        span_Prompt[1].textContent = "";
        var str = "YES";
        sessionStorage.setItem("str",str);
    }
}
/***********************/
/*功能5：判定页面的当前前置*/
/***********************/
//描述：通过获取当前不一样的文本域名来判断当前页面该用怎样的功能函数
function page(){
    var name = document.title;
    if(name == "家居购物"){
        homepage();
    }else if(name == "商品--沙发"){
        Childpage(sofa,sofa_leng);
        url();
    }else if(name == "商品--桌椅"){
        Childpage(table,table_leng);
        styleul("1169px","116.6px");
        url();
    }else if(name == "商品--床"){
        Childpage(bed,bed_leng);
        styleul("1000px","248.6px");
        url();
    }else if(name == "商品--柜"){
        Childpage(storage,storage_leng);
        styleul("1100px","136.6px");
        url();
    }else if(name == "更多选择"){
        Childpage(more,more_leng);
        styleul("1000px","199.6px");
        url();
    }else if(name == "商品详情"){
        imgdispaly();  
        number();
    }else if(name == "用户登录"){
        login();
    }else if(name == "用户注册"){
    }
}
//调用判定页面的函数
page();