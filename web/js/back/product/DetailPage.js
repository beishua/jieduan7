$(function () {
    $("#nav").load("/html/nav.html");
    findById();
})
function findNav() {
    let data = myAjax('/product','get',{});
    setNavHtml(data.navList);
    setTypeHtml(data.productType);
}
function setDetailPage(data) {
    let html='';
    html = '<div>\n' +
        '            <div>\n' +
        '                <div style="font-weight: bold">' + data.title + '</div>\n' +
        '                <div style="color:rgb(100,100,100)">' + data.dataForDetailed + '</div>\n' +
        '            </div>\n' +
        '            <div style="padding: 10px">' + data.smallTileForDetailed + '</div>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <div style="margin: 20px 0 0 270px"><img src="' + data.imgHref + '" height="220" width="225"/></div>\n' +
        '        </div>\n' +
        '        <div>' + data.contentForDetailed + '</div>';
    $("#detailPageHtml").html(html);
}
function setTypeHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+= '<div onclick="findAllByTypeId('+data[i].id+')">'+data[i].name+'</div>';
    }
    $("#typeHtml").html(html);
}
function findById(){
    let id=sessionStorage.getItem("productId");
    let data=myAjax("/productId","get",{id:id});//查询三条数据 第一条 上一个 第二条 自己本身 第三条 下一个
    setDetailPage(data.list[1]);
    $("#last").html(data.list[0].title);
    $("#last").attr("title",data.list[0].id);
    $("#next").html(data.list[2].title);
    $("#next").attr("title",data.list[2].id);
}
function lasta() {
    sessionStorage.setItem("productId",$("#last").attr("title"));
    findById();
}
function nexta() {
    sessionStorage.setItem("productId",$("#next").attr("title"));
    findById();
}