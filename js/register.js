/**
* 功能：注册功能
**/
/*********************************************/
/* 获取文本框个按钮节点 */
/*********************************************/
//获取注册邮箱
var user = document.getElementsByClassName("userName")[0],
    //获取邮提示信息
    span_Prompt = document.getElementsByClassName("Prompt");
//获取第一个密码框
var userPwd = document.getElementsByClassName("userPwd")[0];
//获取确认密码框
var newUserPwd = document.getElementsByClassName("newUserPwd")[0];
//获取注册按钮
var enrollbtn = document.getElementsByClassName("loginBtn")[0];
/*********************************************/
/*功能： 验证输入的内容 */
/*********************************************/
function register(){
    //验证输入邮箱
    user.oninput = function(){
        //获取当前输入的用户名
        var user_emailvalue = user.value;
        if(/^\w{1,}@+\w{1,}\.[A-Za-z]{1,}/.test(user_emailvalue)){
            span_Prompt[0].textContent = "";
            enrollbtn.disabled = false;
            return true;
        }else if(user_emailvalue == ""){
            span_Prompt[0].textContent = "";
            enrollbtn.disabled = true;
        }else{
            span_Prompt[0].textContent = "输入的邮箱的格式不正确！";
            return false;
        }
    }
    //验证输入密码
    userPwd.oninput = function(){
        //获取当前输入的密码
        var pwd_value = userPwd.value;
        if(/^\w{6,}$/.test(pwd_value)){
            span_Prompt[1].textContent = "";
            enrollbtn.style.cursor = 'pointer';
            return true;
        }else if(pwd_value == ""){
            span_Prompt[1].textContent = "";
            enrollbtn.style.cursor = 'not-allowed';
        }else{
            span_Prompt[1].textContent = "输入6到16位数的密码！";
            return false;
        }
    }
    //判断两次密码是否相同
    newUserPwd.oninput = function(){
        //获取两次输入的密码
        var pwd_value = userPwd.value,
            newpwd_value = newUserPwd.value;
        if(pwd_value == newpwd_value){
            span_Prompt[2].textContent = "";
            enrollbtn.style.backgroundColor = "#299a25";
            return true;
        }else if(newpwd_value  == ""){
            span_Prompt[2].textContent = "";
            enrollbtn.style.backgroundColor = "#838281";
        }else{
            span_Prompt[2].textContent = "两次密码不一样";
            return false;
        }
    }
    //回掉缓存函数
    enroll();
}
//调用验证函数
register();
/*********************************************/
/*功能： 缓存注册账号 */
/*********************************************/
function enroll(){
    enrollbtn.onclick = function(){
        var pwd_value = userPwd.value,
            newpwd_value = newUserPwd.value,
            user_value = user.value;
        sessionStorage.setItem("user",user_value);
        sessionStorage.setItem("pwd",pwd_value);
        sessionStorage.setItem("newpwd",newpwd_value);
        alert("注册成功");
        location.href = "loginpage.html";
    }
}
