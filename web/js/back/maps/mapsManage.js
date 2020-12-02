$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.id=$.trim($("#id").val());
    data.QQ=$.trim($("#QQ").val());
    data.phone=$.trim($("#phone").val());
    data.weChat=$.trim($("#weChat").val());
    data.microblog=$.trim($("#microblog").val());
    data.email=$.trim($("#email").val());
    data.address=$.trim($("#address").val());
    let result=myAjax( '/back/maps/findAllBySome','get',data);
    // $.ajax({
    //     url: '/back/maps/findAllBySome',
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
            '            <td>' + data[i].QQ + '</td>\n' +
            '            <td>' + (data[i].phone == undefined || data[i].phone == 'null' ? '' : data[i].phone) + '</td>\n' +
            '            <td>' + (data[i].weChat == undefined || data[i].weChat == 'null' ? '' : data[i].weChat) + '</td>\n' +
            '            <td>' + (data[i].microblog== undefined || data[i].microblog == 'null' ? '' : data[i].microblog) + '</td>\n' +
            '            <td>' + (data[i].email == undefined || data[i].email == 'null' ? '' : data[i].email) + '</td>\n' +
            '            <td>' + (data[i].address == undefined || data[i].address == 'null' ? '' : data[i].address) + '</td>\n' +
            '            <td><a href="javascript:edit(' + data[i].id + ')">编辑</a> <a href="javascript:del(' + data[i].id + ')">删除</a></td>\n' +
            '        </tr>';
    }
    console.log(data);
    $("#mapsFindAll").html(html);
}
function edit(id) {
    localStorage.setItem("mapsId", id);
    $('.right').load('/back/Maps/mapsEdit.html');
}
function del(id) {
    let result=myAjax( '/back/maps/del','get',{id: id});
    // $.ajax({
    //     url: '/back/maps/del',
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