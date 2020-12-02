$(function () {
    let mapsId=localStorage.getItem("mapsId");
    findById(mapsId)
})
function findById(id) {
    let result=myAjax('/back/maps/findById','get',{id:id});
    // $.ajax({
    //     url:'/back/maps/findById',
    //     data:{id:id},
    //     type:'get',
    //     dataType:'json',
    //     success:function (data) {
            setData(result.mapsModel);
        // }
    // })
}
function setData(data){
    $("#id").val(data.id);
    $("#QQ").val(data.QQ);
    $("#phone").val(data.phone);
    $("#weChat").val(data.weChat);
    $("#microblog").val(data.microblog);
    $("#email").val(data.email);
    $("#address").val(data.address);
}
function edit() {
    //取得页面的值
    let data=new FormData();
    data.append("id",$("#id").val());
    data.append("QQ",$("#QQ").val());
    data.append("phone",$("#phone").val());
    data.append("weChat",$("#weChat").val());
    data.append("microblog",$("#microblog").val());
    data.append("email",$("#email").val());
    data.append("address",$("#address").val());
    //调用后台
    let result=imgMyAjax('/back/maps/mapsEdit','post',data);
    // $.ajax({
    //     url:'/back/maps/mapsEdit',//访问servlet地址
    //     data: data,//页面传递到后台的值
    //     type:'post',//servlet方法
    //     dataType:'json',//返回json对象
    //     contentType:false,
    //     processData:false,//传递文件时需要的两句话
    //     success:function (data) {//后台返回页面的值
//如果保存成功，返回查询页面，失败则提示
            if (result.count==1){
                $(".right").load("/back/Maps/mapsManage.html");
            } else {
                alert("修改失败！");
            }
        // }
    // })
}