$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.title=$.trim($("#title").val());
    data.content=$.trim($("#content").val());//对应页面
    let result=myAjax('/back/news/findAllBySome','get',data);
    // $.ajax({
    //     url: '/back/news/findAllBySome',
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
            '            <td>'+data[i].newsHeadlines +'</td>\n' +
            '            <td>'+(data[i].newsContent==undefined||data[i].newsContent=='null'?'':data[i].newsContent) +'</td>\n' +
            '            <td><a href="javascript:edit('+data[i].id+')">编辑</a> <a href="javascript:del('+data[i].id+')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#newsFindAll").html(html);
}
function edit(id) {
    localStorage.setItem("newsId",id);
    // localStorage.setItem("productTitle",title);
    //点击编辑跳转到编辑页面，同时，需要根据当前id将所有数据赋值到对应的地方
    $("#right").load("/back/News/newsUpdate.html");
}
function del(id) {
    let result=myAjax( '/back/news/del','get',{id: id});
    // $.ajax({
    //     url: '/back/news/del',
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
function nClear() {
    document.getElementById("title").value="";
    document.getElementById("content").value="";
}
