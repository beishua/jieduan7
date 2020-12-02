$(function () {
    getProgramFindAll();
})
function getProgramFindAll() {
    let result=myAjax('/back/program/findAll','get','');
    // $.ajax({
    //     url:'/back/program/findAll',//对应servlet
    //     data:'',
    //     type:'get',
    //     dataType:'json',
    //     success:function (data) {
            let html='';
            result=result.list;
            for (let i = 0; i < result.length; i++) {
                html += '<option value="' + result[i].id + '">' + result[i].name + '</option>';
            }
            $("#program").html(html);//对应html
        // }
    // })
}