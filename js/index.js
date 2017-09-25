/**
* 功能：加载数据
*
*/
/************************************************/
/* DOM加载完毕后执行（多媒体资源尚未开始加载） */
/************************************************/
document.onreadystatechange = function(){
    if(document.readyState == "interactive"){
        pagelayout();
    }
}
/************************************************/
/* 判定是否为主页面 */
/************************************************/
function pagelayout(){
    //调用页面header加载内容的函数
    headerLoad();
    //调用地区选择项
    selectonclink();
    //调用页面footerder加载内容的函数
    footerLoad();
    //登录按钮的状态
    pointout();
    //获取当前页面的logo链接
    var logo_page = document.getElementsByClassName("logo_page")[0];
    //获取登录按钮
    var login_btn = document.getElementsByClassName("login_btn")[0];
    //获取当前页面的域名
    var name = document.title;
    /*判断当前网页域名*/
    if(name == "家居购物"){
        click(logo_page,"#");
        ulachlick("page/");
        click(login_btn,"page/loginpage.html");
    }else{ 
        click(logo_page,"../index.html");
        ulachlick("");
        click(login_btn,"loginpage.html");
    }
}
/**
* 功能：点击导航栏部分跳转相应界面
**/
function ulachlick(file){
    /*功能：获取当前页面的导航栏li*/
    //由于每个页面的导航就只用5个，所这里直接就a<=4
    for(var a = 0;a<=4;a++){
        var ula = document.getElementsByTagName("ul")[0].children[a].children[0];
        switch(a){
            case 0:
                click(ula,file+"sofapage.html");
                break;
            case 1:
                click(ula,file+"tablepage.html");
                break;
            case 2:
                click(ula,file+"bedpage.html");
                break;
            case 3:
                click(ula,file+"storagepage.html");
                break;
            default:
                click(ula,file+"morepage.html");
                break;
        }
    }
}
/**
* 功能：点击链接或按钮跳转相应界面
**/
function click(logoclick,url){
    logoclick.onclick = function(){
        location.href = url;
    }

}
/**
* 功能：导航栏加载部分
**/
function headerLoad(){
    var header = document.getElementsByTagName("header")[0];
    header.innerHTML += '<figure><!-- 联系我们--><div class="relation"><a href="#" target="_blank" class="relation_page"></a></div><!-- 户里·家的logo--><div class="logo"><a href="#" target="_self" class="logo_page"></a></div><!-- 户里·家的登录部分--><div class="login"><a href="#" class="login_btn"></a><span class="divider_0"></span><a href="#" class="login_shop"></a></div><!-- 选择地区--><div class="select"><i class="text_select">成都地区</i><i class="text_img"></i>'+selectcust()+'</div></figure><nav class="header_nav"><div class="navconut"><ul><li><a href="#" target="_self" class="sofa">沙发&nbsp;&nbsp;&nbsp;SOFAS</a><div><a href="#">单人位</a><a href="#">双人位</a><a href="#">三人位</a><a href="#">休闲沙发</a><a href="#">转角沙发</a></div></li><li><a href="#" target="_self" class="tables">桌椅&nbsp;&nbsp;&nbsp;TABLES/CHAIRS</a> <div><div class="table1"><a href="#">餐桌</a><a href="#">餐椅</a><a href="#">书桌</a><a href="#">凳子</a></div><div class="table2"><a href="#">电脑桌</a><a href="#">休闲椅</a><a href="#">梳妆台</a><a href="#">户外椅</a></div><div class="clear"></div><div class="table3"><a href="#">其他 </a></div></div></li><li><a href="#" class="beds">床&nbsp;&nbsp;&nbsp;BEDS</a><div><a href="#">1.8米</a><a href="#">1.5米</a><a href="#">其他</a></div> </li><li><a href="#" class="storage">柜&nbsp;&nbsp;&nbsp;STORAGE</a><div><div class="storage1"><a href="#">衣柜</a><a href="#">书柜</a><a href="#">鞋柜</a></div><div class="storage2"><a href="#">储物柜</a><a href="#">电视柜</a><a href="#">床头柜</a></div><div class="clear"></div><div class="storage3"><a href="#">其他 </a></div></div></li><li><a href="#" class="more">更多&nbsp;&nbsp;&nbsp;MORE</a><div><a href="#">组合产品</a><a href="#">日用产品</a><a href="#">家居饰品</a><a href="#">其他</a></div></li> </ul><div class="search"><input type="text" placeholder="搜索"><i></i></div></div></nav>';
}
/**
* 功能：加载地区选择项
**/
function selectcust(){
    //定义一个空变量来存地区的内容;
    var s = "";
    s += '<dl>'+
        '<dt data-value="0">成都地区</dt>'+
        '<dt data-value="1">北京地区</dt>'+
        '<dt data-value="2">上海地区</dt>'+
        '<dt data-value="3">深圳地区</dt>'+
        '<dt data-value="4">其他地区</dt>'+
        '</dl>';
    return s;
}
/**
* 功能：地区选择
**/
function selectonclink(){
    //获取内容显示i
    var text_select = document.getElementsByClassName("text_select")[0];
    //获取图片按钮
    var text_img = document.getElementsByClassName("text_img")[0];
    //获取dl
    var dl = document.getElementsByTagName("dl")[0];
    //获取dt
    var dt = document.getElementsByTagName("dt");
    text_img.onclick = function(){
        dl.style.display = "block";
    }
    for(let x = 0; x < dt.length; x++){
        dt[x].onclick = function(){
            //把dl里的值赋给text-select
            text_select.textContent = dt[x].textContent;
            dl.style.display = "none";
        }
    }
    dl.onmouseleave = function(){
        dl.style.display = "none";
    }
}
/** 
* 功能：尾页加载部分
**/
function footerLoad(){
    var footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML +='<div class="footer_title">生活要过的朴素而有味道，但不用过得奢华</div><div class="footer_ul1"><ul><li class = "theme1"><i>环保</i><span>无甲醛 大自然</span></li><li><i>低价</i><span>低于购买价6折</span></li><li><i>安全</i><span>专业清洁消毒处理</span></li><li><i>省心</i><span>专业物流配送安装</span></li><li><i>快捷</i><span>24小时内送货</span></li></ul></div><div class="footer_ul2"><ul><li><h3>关于我们</h3><p><a href="#">关于户里</a><a href="#">注册协议</a></p><p><a href="#">业务合作</a><a href="#">免责声明</a></p><p><a href="#">加入户里</a><a href="#">隐私保护</a></p></li><li><h3>会员中心</h3><p><a href="#">会员计划</a></p><p><a href="#">积分规则</a></p><p><a href="#">投诉建议</a></p></li><li><h3>联系客服</h3><p><a href="#">电话:</a></p><p><a href="#">028-67635062</a> </p><p><a href="#">邮箱:</a></p><p><a href="#">hello@hulihome.com</a></p></li><li><h3>流程指南</h3><p><a href="#">购买家具</a><a href="#">出售家具</a></p><p><a href="#">支付方式</a><a href="#">配送安装</a></p><p><a href="#">售后保障</a></p></li><li><p><i class="sina"></i><span>新浪微博@家居网</span></p><div class="sina_img"></div></li><li><p><i class="WeChat2"></i><span>关注微信“家居网</span></p><div class="WeChat2_img"></div></li></ul></div><div class="footer_WeChat"><span class="footer_WeChatimg">蜀ICP备13022224号 四川程友科技开发有限公司</span></div>';
}
/**
* 功能：判断登录按钮的状态
**/
function  pointout(){
    var login_btn = document.getElementsByClassName("login_btn")[0];
    //获取登录以后的状态
    var str = sessionStorage.getItem("str");
    //判断登录状态
    if(str == "YES"){
        var login_user = sessionStorage.getItem("user");
        login_btn.className = "";
        login_btn.textContent = login_user;
        login_btn.style.position = "relative";
        login_btn.style.top = "-12px";
        login_btn.style.textDecoration = "underline";
    }else{
        login_btn.className = "login_btn";
    }
}
