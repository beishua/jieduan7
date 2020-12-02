$(function () {
    $("#nav").load("/html/nav.html");
})
function findNav() {
    let data = myAjax('/news', 'get', {});
    setNavHtml(data.navList);
    setNewsHtml(data.newsLista);
    setTypeForDetaile(data.newsType);
}
function setNewsHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<div>\n' +
            '<div>\n' +
            '<div>'+data[i].day+'</div>\n' +
            '<div>'+data[i].year+'</div>\n' +
            '</div>\n' +
            '<div>\n' +
            '<div onclick="toNewsDetaile('+data[i].id+')" style="cursor: pointer">'+data[i].title05+'</div>\n' +
            '<div>'+data[i].content05+'</div>\n' +
            '</div>\n' +
            '</div>';
    }
    $("#newsHtml").html(html);
}
function toNewsDetaile(id) {
    sessionStorage.setItem("newsId",id);
    location.href="/back/News/DetailPageForNews.html";
}
function setTypeForDetaile(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+= '<div onclick="findAllByNewsTypeId('+data[i].id+')">'+data[i].nameForDetaile+'</div>';
    }
    $("#typeForDetaile").html(html);
}
function findAllByNewsTypeId(newsId) {
    let data = myAjax('/newsTypeId','get',{newsId:newsId,pageNum:1,pageSize:8});
    setNewsHtml(data.list);
}