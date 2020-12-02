$(function () {
    let newsId=localStorage.getItem("newsId");
    findById(newsId)
})
function findById(id) {
    let result=myAjax('/back/news/findById','get',{id:id})
    // $.ajax({
    //     url:'/back/news/findById',
    //     data:{id:id},
    //     type:'get',
    //     dataType:'json',
    //     success:function (data) {
            setData(result.newsModel);
        // }
    // })
}
function setData(data){
    $("#id").val(data.id);
    $("#newsHeadlines").val(data.newsHeadlines);
    $("#newsContent").val(data.newsContent);
    // $("#picture").attr("src", data.picture);
}
function edit() {
    //取得页面的值
    let data=new FormData();
    data.append("id",$("#id").val());
    data.append("newsHeadlines",$("#newsHeadlines").val());
    data.append("newsContent",$("#newsContent").val());
    //调用后台
    let result=imgMyAjax('/back/news/newsEdit','post',data);
    // $.ajax({
    //     url:'/back/news/newsEdit',//访问servlet地址
    //     data: data,//页面传递到后台的值
    //     type:'post',//servlet方法
    //     dataType:'json',//返回json对象
    //     contentType:false,
    //     processData:false,//传递文件时需要的两句话
    //     success:function (data) {//后台返回页面的值
//如果保存成功，返回查询页面，失败则提示
            if (result.count==1){
                $(".right").load("/back/News/newsManage.html");
            } else {
                alert("修改失败！");
            }
        // }
    // })
}