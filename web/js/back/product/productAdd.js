function productAdd() {
    //取得页面的值
    let data=new FormData();
    data.append("id",localStorage.getItem("productId"));
    data.append("title",$("#title").val());
    data.append("imgHref",$("#imgHref")[0].files[0]);
    data.append("pice",$("#pice").val());
    data.append("contentForDetailed",$("#contentForDetailed").val());
    //调用后台
    let result=imgMyAjax('/back/product/add','post',data);
    // $.ajax({
    //     url:'/back/product/productUpdate',
    //     data:data,
    //     type: 'post',
    //     dataType: 'json',
    //     contentType:false,
    //     processData:false,//传递文件时需要的两句话
    //     success:function (data) {
    //通过后台传递过来的数据进行下一步执行
    if (result.count==1){
        $('.right').load('/back/Product/productManage.html');
    }else {
        alert("新增失败！");
    }
    // }
    // })
}
function setData(data) {
    $("#id").val(data.id);
    $("#title").val(data.title);
    $("#pice").val(data.content);
    $("#contentForDetailed").val(data.contentForDetailed);
    $('#program option[value=' + data.programId + ']').attr('selected', true);
}