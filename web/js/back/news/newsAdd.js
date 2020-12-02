function newsAdd() {
    //取得页面的值
    let data=new FormData();
    // data.append("coach",$("#coach").val());
    data.append("newsHeadlines",$("#newsHeadlines").val());
    data.append("newsContent",$("#newsContent").val());
    //调用后台
    let result=imgMyAjax('/back/news/add','post',data);
    // $.ajax({
    //     url:'/back/news/add',
    //     data:data,
    //     type: 'post',
    //     dataType: 'json',
    //     contentType:false,
    //     processData:false,//传递文件时需要的两句话
    //     success:function (data) {
            //通过后台传递过来的数据进行下一步执行
            if (result.count==1){
                $('#right').load('/back/News/newsManage.html');
            }else {
                alert("增加失败！");
            }
        // }
    // })
}