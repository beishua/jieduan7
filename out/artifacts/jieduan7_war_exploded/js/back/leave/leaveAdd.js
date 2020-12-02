function leaveAdd(){
    //取得页面的值
    let data=new FormData();
    data.append("name",$("#name").val());
    data.append("phone",$("#phone").val());
    data.append("email",$("#email").val());
    data.append("content",$("#content").val());
    //调用后台
    let result=imgMyAjax('/leave/add','post',data);
    // $.ajax({
    //     url:'/back/nav/add',
    //     data:data,
    //     type: 'post',
    //     dataType: 'json',
    //     contentType:false,
    //     processData:false,//传递文件时需要的两句话
    //     success:function (data) {
    //通过后台传递过来的数据进行下一步执行
    if (result.count==1){
        alert("留言成功！");
    }
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("content").value="";
}