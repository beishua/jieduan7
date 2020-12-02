//使用jquery方法
function flushCode(object) {
    // document.getElementById("getCode").;
    $(object).attr("src","http://localhost:8082/code?date=" + new Date());
}
function login() {
    let username=$("#username").val();
    let password=$("#password").val();
    let code=$("#code").val();
    let reg=/^[a-zA-Z]\w{5,15}$/;
    if (!reg.test(username)){
        alert("您输入的用户名不正确！");
        return;
    }
    if (!reg.test(password)){
        alert("您输入的密码不正确！");
        return;
    }
    $.ajax({
        url:'http://localhost:8082/login',
        data:{username:username,password:password,code:code},
        type:'post',
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        async: false,
        dataType:'json',
        success:function (data) {
            if (data==1){
                window.open("/back/manage.html");
            }else if(data==0){
                alert("您输入的用户名或密码不正确！");
            }else if(data==2){
                alert("您输入的验证码不正确！");
            }
        }
    })
}


