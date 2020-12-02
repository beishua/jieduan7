$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.id=$.trim($("#id").val());
    data.corporateName=$.trim($("#corporateName").val());
    data.companyContent=$("#companyContent").val();
    let result=myAjax('/back/company/findAll','get',data);
    // $.ajax({
    //     url: '/back/company/findAll',
    //     data:data,
    //     type: 'get',
    //     dataType: 'json',
    //     success: function (data) {
            setData(result.list);
            $("#pageCount").html(result.number);
        // }
    // })
}
function setData(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html +='    <tr>\n' +
            '        <td>' + data[i].id + '</td>\n' +
            '        <td>' + data[i].corporateName + '</td>\n' +
            '        <td>' + data[i].companyContent + '</td>\n' +
            '        <td><a href="javascript:edit('+ data[i].id + ')">编辑</a> <a href="javascript:del('+ data[i].id + ')">删除</a></td>\n' +
            '    </tr>';
    }
    $("#companyFindAll").html(html);
}
