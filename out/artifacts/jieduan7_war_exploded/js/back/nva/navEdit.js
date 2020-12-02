$(function () {
    let navId=localStorage.getItem("navId");
    findById(navId);
})
function findById(id) {
    let result=myAjax('/back/nav/findById','get',{id:id});
    // $.ajax({
    //     url:'/back/nav/findById',
    //     data:{id:id},
    //     type:'get',
    //     dataType:'json',
    //     success:function (data) {
            setData(result.navModel);
        // }
    // })
}
function setData(data){
    $("#id").val(data.id);
    $("#navName").val(data.navName);
    $("#navContent").val(data.navContent);
}
function edit() {
    let data={
        id:$("#id").val(),
        navName:$("#navName").val(),
        navContent:$("#navContent").val(),
    };//let定义类型
    let result=myAjax('/back/nav/navEdit','post',data);
    // $.ajax({
    //     url:'/back/nav/navEdit',//访问servlet地址
    //     data: data,//页面传递到后台的值
    //     type:'post',//servlet方法
    //     dataType:'json',//返回json对象
    //     success:function (data) {//后台返回页面的值
//如果保存成功，返回查询页面，失败则提示
            if (result.result==1){
                $(".right").load("/back/Nav/navManage.html");
            } else {
                alert("修改失败！");
            }
        // }
    // })
}