$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.name= $.trim($("#name").val());
    data.picture= $.trim($("#picture").val());
    data.content= $.trim($("#content").val());
    let result=myAjax('/back/train/findAllBySome','get',data);
    // $.ajax({
    //     url: '/back/train/findAllBySome',
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
            '            <td>'+data[i].trainname +'</td>\n' +
            '            <td><img src="'+data[i].picture+'"width="50px" height="40px"></td>\n' +
            '            <td>'+(data[i].content==undefined||data[i].content=='null'?'':data[i].content) +'</td>\n' +
            '            <td><a href="javascript:edit('+data[i].id+')">编辑</a> <a href="javascript:del('+data[i].id+')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#trainFindAll").html(html);
}
function edit(id) {
    localStorage.setItem("trainId", id);
    // sessionStorage.setItem("trainId", id);
    $('#right').load('/back/Train/trainEdit.html');
}
function del(id) {
    let data = myAjax('/back/train/del', 'get', {id: id});
    // $.ajax({
    //     url: 'http://localhost:8082/back/train/del',
    //     data: {id: id},
    //     type: 'get',
    //     dataType: 'json',
    //     async: false,
    //     xhrFields: {
    //         withCredentials: true //允许跨域带Cookie
    //     },
    //     success: function (data) {
            if (data.count == 1) {
                findAll();
            } else {
                alert("删除失败！");
            }
        // }
    // })
}
function tClear() {
    document.getElementById("name").value="";
    document.getElementById("content").value="";
}