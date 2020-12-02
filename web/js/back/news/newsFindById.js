$(function () {
    let newsId=localStorage.getItem("newsId");
    findById(newsId)
})
function findById(id) {
    let result=myAjax('/back/news/findById','get',{id:id});
    // $.ajax({
    //     url:'/back/news/findById',
    //     data:{id:id},
    //     type:'get',
    //     dataType:'json',
    //     success:function (data){
            setData(result.newsModel);
        // }
    // })
}
function setData(data) {
    $("#id").val(data.id);
    $("#newsHeadlines").val(data.newsHeadlines);
    $("#newsContent").val(data.newsContent);
}
function update() {
    let newsHeadlines=$("#newsHeadlines".val());
    let newsContent=$("#newsContent").val();
    let data={
        id:$("#id").val(),
        newsHeadlines:newsHeadlines,
        newsContent:newsContent
    };//let定义类型
    let result=myAjax('/back/news/newsEdit','post',data);
    // $.ajax({
    //     url:'/back/news/newsEdit',//访问servlet地址
    //     data: data,//页面传递到后台的值
    //     type:'post',//servlet方法
    //     dataType:'json',//返回json对象
    //     success:function (data) {//后台返回页面的值
//如果保存成功，返回查询页面，失败则提示
            if (result==1){
                $("#right").load("/back/News/newsManage.html");
            } else {
                alert("修改失败！");
            }
        // }
    // })
}