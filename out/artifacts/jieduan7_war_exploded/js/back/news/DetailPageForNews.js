$(function () {
    $("#nav").load("/html/nav.html");
    findByNewsId();
})
function findNav() {
    let data = myAjax('/news', 'get', {});
    setNavHtml(data.navList);
    setTypeForDetaileHtml(data.newsType);
}
function setNewsForNewsDetailed(data) {
    let html='';
    html = '<div >' + data.titleForNewsDetailed + '</div>\n' +
        '   <div>' + data.dateForNewsDetailed + '</div>\n' +
        '   <div>' + data.contentForNewsDetailed + '</div>';
    $("#newsForNewsDetailedHtml").html(html);
    // console.log(data);
}
function setTypeForDetaileHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+= '<div onclick="findAllByNewsTypeId('+data[i].id+')">'+data[i].nameForDetaile+'</div>';
    }
    $("#typeForNewsDetailedHtml").html(html);
}
function findByNewsId() {
    let id=sessionStorage.getItem("newsId");
    let data=myAjax("/newsId","get",{id:id});//查询三条数据 第一条 上一个 第二条 自己本身 第三条 下一个
    setNewsForNewsDetailed(data.list[1]);
    $("#last").html(data.list[0].title);
    $("#last").attr("title",data.list[0].id);
    $("#next").html(data.list[2].title);
    $("#next").attr("title",data.list[2].id);
    console.log(data);
}
function lasta() {
    sessionStorage.setItem("newsId",$("#last").attr("title"));
    findByNewsId();
}
function nexta() {
    sessionStorage.setItem("newsId",$("#next").attr("title"));
    findByNewsId();
}