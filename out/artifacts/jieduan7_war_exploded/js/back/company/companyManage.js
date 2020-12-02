$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    // data.title=$.trim($("#title").val());
    data.content=$.trim($("#content").val());
    let result=myAjax('/back/company/findAllBySome','get',data);
    // $.ajax({
    //     url: '/back/company/findAllBySome',
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
    let html='';//字符串拼接
    for (let i=0;i<data.length;i++){
        html += '   <tr>\n' +
            '            <td>' + data[i].id + '</td>\n' +
            // '            <td>' + data[i].corporateName + '</td>\n' +
            '            <td>' + (data[i].companyContent == undefined || data[i].companyContent == 'null' ? '' : data[i].companyContent) + '</td>\n' +
            '            <td><a href="javascript:edit(' + data[i].id + ')">编辑</a> <a href="javascript:del(' + data[i].id + ')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#companyFindAll").html(html);
}
function edit(id) {
    localStorage.setItem("companyId", id);
    // sessionStorage.setItem("trainId", id);
    $('.right').load('/back/Company/companyEdit.html');
}
function del(id) {
    let result=myAjax('/back/company/del','get',{id: id});
    // $.ajax({
    //     url: '/back/company/del',
    //     data: {id: id},
    //     type: 'get',
    //     dataType: 'json',
    //     success: function (data) {
            if (result.count == 1) {
                findAll();
            } else {
                alert("删除失败！");
            }
        // }
    // })
}
function cClear() {
    document.getElementById("content").value="";
}