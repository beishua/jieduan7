//加载页面的时候执行里面的方法
$(function () {
    $("#page").load("/back/page.html");
    // findAll();
})
//根据条件查询
function findAll(){
    let data={};
    data.pageNum = $.trim($("#pageNum").val());
    data.pageSize = $.trim($("#pageSize").val());
    data.username=$.trim($("#username1").val());
    data.phone=$.trim($("#phone").val());
    data.sex=$("#sex").find("option:selected").text();
    data.startBirthday=$("#startBirthday").val();
    data.endBirthday=$("#endBirthday").val();
    data.hobby=JSON.stringify(aihao());
    data.introduce=$.trim($("#introduce").val());
    let result = myAjax('/back/user/findAllBySome', 'get', data);
    // console.log(data);
    // $.ajax({
    //     url: '/back/user/findAllBySome',
    //     data:data,
    //     type: 'get',
    //     dataType: 'json',
    //     success: function () {
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
            '            <td>' + (data[i].username == undefined || data[i].username == 'null' ? '' : data[i].username) + '</td>\n' +
            '            <td>' + (data[i].phone == undefined || data[i].phone == 'null' ? '' : data[i].phone) + '</td>\n' +
            '            <td>' + (data[i].sex == undefined || data[i].sex == 'null' ? '' : data[i].sex) + '</td>\n' +
            '            <td>' + (data[i].birthday == undefined || data[i].birthday == 'null' ? '' : data[i].birthday) + '</td>\n' +
            '            <td>' + (data[i].hobby == undefined || data[i].hobby == 'null' ? '' : data[i].hobby) + '</td>\n' +
            '            <td>' + (data[i].introduce == undefined || data[i].introduce == 'null' ? '' : data[i].introduce) + '</td>\n' +
            '            <td><a href="javascript:edit(' + data[i].id + ')">编辑</a> <a href="javascript:del(' + data[i].id + ')">删除</a></td>\n' +
            '        </tr>';
    }
    $("#userFindAll").html(html);//对当前的tbody进行赋值
}
function edit(id) {
    sessionStorage.setItem("userId", id);
    $('#right').load('/back/User/userEdit.html');
}
function del(id) {
    let result=myAjax('/back/user/delete','get',{id:id});
    // $.ajax({
    //     url: '/back/user/delete',
    //     data: {id:id},
    //     type: 'get',
    //     dataType: 'json',
    //     success: function (data) {
            if (result.count == 1) {
                findAll();//刷新页面
            } else {
                alert("删除失败！")
            }
        // }
    // })
}


function aihao() {
    let hb = [];
    $("input:checkbox[name='hobby']").each(function () {
        if ($(this).prop("checked")){
            hb.push($(this).val())
        }
    })
    return hb;
}
function uClear() {
    document.getElementById("username1").value="";
    document.getElementById("phone").value="";
    document.getElementById("sex").value="";
    document.getElementById("startBirthday").value="";
    document.getElementById("endBirthday").value="";
    document.getElementById("hobby").value="";
    document.getElementById("introduce").value="";
}