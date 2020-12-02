$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.name=$.trim($("#name").val());
    data.phone=$.trim($("#phone").val());
    data.email=$.trim($("#email").val());
    data.content=$.trim($("#content").val());
    let result=myAjax('/back/leave/findAllBySome','get',data);
    // $.ajax({
    //     url: '/back/leave/findAllBySome',
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
            '            <td>'+data[i].name +'</td>\n' +
            '            <td>'+(data[i].phone==undefined||data[i].phone=='null'?'':data[i].phone) +'</td>\n' +
            '            <td>'+(data[i].email==undefined||data[i].email=='null'?'':data[i].email) +'</td>\n' +
            '            <td>'+(data[i].content==undefined||data[i].content=='null'?'':data[i].content) +'</td>\n' +
            '            <td><a href="javascript:del('+data[i].id+')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#leaveFindAll").html(html);
}

function del(id) {
    let result=myAjax( '/back/leave/del','get',{id: id});
    // $.ajax({
    //     url: '/back/leave/del',
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
function clear() {
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("content").value="";
}
