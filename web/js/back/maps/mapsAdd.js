function mapsAdd() {
    //取得页面的值
    let data=new FormData();
    data.append("QQ",$("#QQ").val());
    data.append("phone",$("#phone").val());
    data.append("weChat",$("#weChat").val());
    data.append("microblog",$("#microblog").val());
    data.append("email",$("#email").val());
    data.append("address",$("#address").val());
    //调用后台
    let result=imgMyAjax('/back/maps/add','post',data);
    // $.ajax({
    //     url:'/back/maps/add',
    //     data:data,
    //     type: 'post',
    //     dataType: 'json',
    //     contentType:false,
    //     processData:false,//传递文件时需要的两句话
    //     success:function (data) {
            //通过后台传递过来的数据进行下一步执行
            if (result.count==1){
                $('#right').load('/back/Maps/mapsManage.html');
            }else {
                alert("增加失败！");
            }
        // }
    // })
}