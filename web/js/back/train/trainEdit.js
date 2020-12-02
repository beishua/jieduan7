$(function () {
    let trainId=localStorage.getItem("trainId");
    findById(trainId)
})
function findById(id) {
    let result=myAjax('/back/train/findById','get',{id:id});
    // $.ajax({
    //     url:'/back/train/findById',
    //     data:{id:id},
    //     type:'get',
    //     dataType:'json',
    //     success:function (data) {
            setData(result.trainModel);
        // }
    // })
}
function setData(data){
    $("#id").val(data.id);
    $("#trainname").val(data.trainname);
    $("#content").val(data.content);
    // $("#picture").attr("src", data.picture);
}
function edit() {
    //取得页面的值
    let data=new FormData();
    data.append("id",$("#id").val());
    data.append("trainname",$("#trainname").val());
    data.append("picture",$("#picture")[0].files[0]);
    data.append("content",$("#content").val());
    //调用后台
    let result=myAjax('/back/train/trainEdit','post',data);
    // $.ajax({
    //     url:'/back/train/trainEdit',//访问servlet地址
    //     data: data,//页面传递到后台的值
    //     type:'post',//servlet方法
    //     dataType:'json',//返回json对象
        // success:function (data) {//后台返回页面的值
//如果保存成功，返回查询页面，失败则提示
            if (result==1){
                $(".right").load("/back/Train/trainManage.html");
            } else {
                alert("修改失败！");
            }
        // }
    // })
}