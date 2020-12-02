$(function () {
    let companyId=localStorage.getItem("companyId");
    findById(companyId)
})
function findById(id) {
    let result=myAjax('/back/company/findById','get',{id:id});
    setData(result.companyModel);
}
function setData(data){
    $("#id").val(data.id);
    $("#companyContent").val(data.companyContent);
}
function edit() {
    //取得页面的值
    let data=new FormData();
    data.append("id",$("#id").val());
    data.append("companyContent",$("#companyContent").val());
    //调用后台
    let result=imgMyAjax('/back/company/companyEdit','post',data);
    if (result.count==1){
        $(".right").load("/back/Company/companyManage.html");
    } else {
        alert("修改失败！");
    }
}