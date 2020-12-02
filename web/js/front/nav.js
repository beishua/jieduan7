$(function () {
    findNav();
})

function setNavHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<a href="'+data[i].href+'">' +
            '<div>'+data[i].title+'</div>' +
            '</a>';
    }
    $("#navHtml").html(html);
}
function pmyAjax(url, type, data){
    let result = null;
    $.ajax({
        url: "http://localhost:8082" + url,
        type: type,
        data: data,
        dataType: 'json',
        async: false,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success: function (data) {
            result = data;
        }
    });
    return result;
}