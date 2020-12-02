$(function () {
    $("#page").load("/back/page.html");
    findAll();
})
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.productTitle=$.trim($("#productTitle").val());
    data.imgHref=$.trim($("#imgHref").val());
    data.productContent=$.trim($("#productContent").val());
    data.contentForDetailed=$.trim($("#contentForDetailed").val());
    let result=myAjax('/back/product/findAllBySome','get',data);
    // $.ajax({
    //     url: '/back/product/findAllBySome',
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
            '        <td>' + data[i].title + '</td>\n' +
            '        <td><img src="'+ data[i].imgHref + '" width="40px" height="30px"</td>\n' +
            '        <td>' + data[i].content + '</td>\n' +
            '        <td>' + data[i].contentForDetailed + '</td>\n' +
            '        <td><a href="javascript:update('+ data[i].id + ')">编辑</a> <a href="javascript:del('+ data[i].id + ')">删除</a></td>\n' +
            '    </tr>';
    }
    $("#productFindAll").html(html);
}
function update(id) {
    localStorage.setItem("productId",id);
    // localStorage.setItem("productTitle",title);
    //点击编辑跳转到编辑页面，同时，需要根据当前id将所有数据赋值到对应的地方
    $(".right").load("/back/Product/productUpdate.html");
}
function del(id) {
    let result=myAjax('/back/product/del','get',{id: id});
    // $.ajax({
    //     url: '/back/product/del',
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
function pClear() {
    document.getElementById("productTitle").value="";
    document.getElementById("productContent").value="";
    document.getElementById("contentForDetailed").value="";
}
