$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.navName=$.trim($("#navName").val());
    data.navContent=$("#navContent").val();
    let result=myAjax('/back/nav/findAllBySome','get',data);
    // $.ajax({
    //     url: '/back/nav/findAllBySome',
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
            '        <td>' + data[i].navName + '</td>\n' +
            '        <td>' + data[i].navContent + '</td>\n' +
            '        <td><a href="javascript:edit('+ data[i].id + ')">编辑</a> <a href="javascript:del('+ data[i].id + ')">删除</a></td>\n' +
            '    </tr>';
    }
    $("#navFindAll").html(html);
}
function edit(id) {
    localStorage.setItem("navId", id);
    $('#right').load('/back/Nav/navEdit.html');
}
function del(id) {
    let result=myAjax('/back/nav/del','get',{id: id});
    // $.ajax({
    //     url: '/back/nav/del',
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
function navClear() {
    document.getElementById("navName").value="";
    document.getElementById("navContent").value="";
}