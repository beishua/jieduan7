function checkPassword() {
    //局部变量
    let password=document.getElementById("password").value;
    let rePassword=document.getElementById("rePassword").value;
    if (password!=rePassword){
        document.getElementById("passwordTip").innerHTML="两次密码输入不一致，请重新输入!";
        document.getElementById("passwordTip").style.color = "red";
    }else {
        document.getElementById("passwordTip").innerHTML = "密码输入一致!";
        document.getElementById("passwordTip").style.color = "green";
    }
}
function register() {
    let data={
        username:$("#username").val(),
        password:$("#password").val(),
        // code:$("#code").val(),
        phone:$("#phone").val(),
        sex:$("input[name=sex]:checkbox").val(),
        birthday:$("#birthday").val(),
        hobby:aihao(),
        introduce:$("#introduce").val()};//let定义类型
        let result=myAjax('userRegister','post',data);
        // $.ajax({
        //     url:'userRegister',//访问servlet地址
        // data: data,//页面传递到后台的值
        // type:'post',//servlet方法
        // dataType:'json',//返回json对象
        // success:function (data){//后台返回页面的值
        //     console.log(data);
            if (result==1){
                window.open("/back/login.html");
            }else if (result==4){
            alert("您输入的用户名已存在！");
            }else{
                alert("注册失败！");
            }
    // }
    // })
}

function aihao() {
    let hb=[];
    $("input[name='hobby']:checkbox").each(function () {
        if ($(this).attr('checkbox')) {
            hb.push($(this).val())
        }
    })
    return hb;
}