$(function () {
    // let userId=localStorage.getItem("userId");
    findById();
})
function findById() {
    let result=myAjax('/back/user/findById','get',{id:sessionStorage.getItem("userId")});
    // $.ajax({
    //     url:'/back/user/findById',
    //     data:{id:sessionStorage.getItem("userId")},
    //     type:'get',
    //     dataType:'json',
    //     success:function (data){
            setData(result.userModel);
    // }
    // })
}
function setData(data) {
    $("#userId").val(data.id);
    $("#username1").val(data.username);
    $("#phone").val(data.phone);
    $("input[name='sex'][value="+data.sex+"]").attr("checked",true);
    $("#birthday").val(data.birthday);
    $('input:checkbox[name=hobby]').each(function (){
    let string=data.hobby;//将后台拿到的爱好转换为数组
        // 后台传递过来的值为[游戏，乒乓球，篮球]，所以需要将中括号去掉，然后用字符的方法split转换为数组
        string = string.replace("[","").replace("]","");
        let hobby=string.split(",");
        for (let i=0;i<hobby.length;i++){
           if ($(this).val()==$.trim(hobby[i])){
               $(this).attr('checked',true);
               break;
           }
        }
    });
    $("#introduce").val(data.introduce);
    console.log(data);
}
function edit() {
    let data = {
        id: $("#userId").val(),
        username: $("#username").val(),
        password: $("#password").val(),
        phone: $("#phone").val(),
        sex: $("input[name='sex']:checked").val(),
        birthday: $("#birthday").val(),
        hobby: JSON.stringify(aihao()),
        introduce: $("#introduce").val()
    };
    // let result = myAjax('/back/user/userEdit', 'post', data);
    $.ajax({
        url:'http://localhost:8082/back/user/userEdit',//访问servlet地址
        data: data,//页面传递到后台的值
        type:'post',//servlet方法
        dataType:'json',//返回json对象
        async: false,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success:function (data) {//后台返回页面的值
//如果保存成功，返回查询页面，失败则提示
            if (data.count==1){
                $(".right").load("/back/User/userManage.html");
            } else {
                alert("修改失败！");
            }
        }
    })
}
function aihao() {
    let hb = [];
    $("input:checkbox[name='hobby']").each(function () {
        if ($(this).prop('checked')){
            hb.push($(this).val())
        }
    })
    return hb;
}
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