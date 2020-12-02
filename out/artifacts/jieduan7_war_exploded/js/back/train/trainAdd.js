function trainAdd() {
    //取得页面的值
    let data=new FormData();
    // data.append("id",$("#id").val());
    data.append("trainname",$("#trainname").val());
    data.append("picture",$("#picture")[0].files[0]);
    data.append("content",$("#content").val());
    //调用后台
    let result=imgMyAjax('/back/train/add','post',data);
    // $.ajax({
    //     url:'/back/train/add',
    //     data:data,
    //     type: 'post',
    //     dataType: 'json',
    //     contentType:false,
    //     processData:false,//传递文件时需要的两句话
    //     success:function (data) {
            //通过后台传递过来的数据进行下一步执行
            if (result.count==1){
                $('#right').load('/back/Train/trainManage.html');
            }else {
                alert("增加失败！");
            }
        // }
    // })
}