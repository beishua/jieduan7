// $(function () {
//     let companyId=localStorage.getItem("companyId");
//     findById(companyId)
// })
// function findById(id) {
//
//     $.ajax({
//         url:'/back/company/findById',
//         data:{id:id},
//         type:'get',
//         dataType:'json',
//         success:function (data){
//             setData(data.companyModel);
//         }
//     })
// }
// function setData(data) {
//     // $("#id").val(data.id);
//     // $("#corporateName").val(data.corporateName);
//     $("#companyContent").val(data.companyContent);
//
// }
// function update() {
//     let companyContent=$("#companyContent").val();
//     let data={
//         id:sessionStorage.getItem("companyId"),
//         // corporateName:$("#corporateName").val(),
//         companyContent:companyContent
//     };//let定义类型
//     $.ajax({
//         url:'/back/company/companyEdit',//访问servlet地址
//         data: data,//页面传递到后台的值
//         type:'post',//servlet方法
//         dataType:'json',//返回json对象
//         success:function (data) {//后台返回页面的值
// //如果保存成功，返回查询页面，失败则提示
//             if (data==1){
//                 $("#right").load("/back/companyManage.html");
//             } else {
//                 alert("修改失败！");
//             }
//         }
//     })
// }