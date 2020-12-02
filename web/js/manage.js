$(function () {
    setUser();
})
function setUser() {
    $.ajax({
        url:'http://localhost:8082/back/user/manage',
        data:'',
        type:'get',
        dataType:'json',
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        async: false ,
        success:function(data){
            if (data.username==null){
                window.open("/login.html");
            }else {
                $("#username").html(data.username); //对应servlet-输出语句中put值
            }
        }
    })
}