$(function () {
    $("#nav").load("/html/nav.html");
    $("#page").load("/back/page.html");
})

function findNav() {
    let data = pmyAjax('/home', 'get', {});
    // console.log(data);
    setNavHtml(data.navList);
    setCoachHtmlForHome(data.coachList);
    setNewsHtml(data.newsList);
}
function setCoachHtmlForHome(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<div>'+
            '<div><img src="'+data[i].pictureForhomejsp+'" height="200" width="200"/></div>'+
            '<div>'+data[i].nameForhomejsp+'</div>'+
            '<div>'+data[i].positionForhomejsp+'</div>'+
            '</div>';
    }
    $("#coachHtmlForHome").html(html);
}
function setNewsHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html += '<div>' +
            '<div><img src="' + data[i].picture + '" height="200" width="200"/></div>' +
            '<div>' + data[i].content + '</div>' +
            '<div>' + data[i].date + '</div>' +
            '<div>' + data[i].content01 + '</div>' +
            '</div>';
    }
    $("#newsHtml").html(html);
}