function navAdd() {
    //取得页面的值
    let data=new FormData();
    data.append("navName",$("#navName").val());
    data.append("navContent",$("#navContent").val());
    //调用后台
    let result=imgMyAjax('/back/nav/add','post',data);
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
                $('#right').load('/back/Nav/navManage.html');
            }else {
                alert("增加失败！");
            }
        // }
    // })
}