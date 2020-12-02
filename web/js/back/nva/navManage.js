$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.navName=$.trim($("#navName").val());
    data.navContent=$.trim($("#navContent").val());
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
    let html='';//字符串拼接
    for (let i=0;i<data.length;i++){
        html +='   <tr>\n' +
            '            <td>'+data[i].id +'</td>\n' +
            '            <td>'+data[i].navName +'</td>\n' +
            '            <td>'+(data[i].navContent==undefined||data[i].navContent=='null'?'':data[i].navContent) +'</td>\n' +
            '            <td><a href="javascript:edit('+data[i].id+')">编辑</a> <a href="javascript:del('+data[i].id+')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#navFindAll").html(html);
}
