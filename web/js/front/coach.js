$(function () {
    $("#nav").load("/html/nav.html");
})
function findNav() {
    let data = pmyAjax('/coach', 'get', {});
    setNavHtml(data.navList);
    setCoachHtml(data.coachLista);
    setBCoachHtml(data.coachListb);
}
function setCoachHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<div>'+
            '<div><img src="'+data[i].picture+'" height="170" width="180"/></div>'+
            '<div>'+data[i].nameForhomejsp+'</div>'+
            '<div>'+data[i].positionForhomejsp+'</div>'+
            '</div>';
    }
    $("#coachHtml").html(html);
}
function setBCoachHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<div>'+
            '<div><img src="'+data[i].picture01+'" height="170" width="180"/></div>'+
            '<div>'+data[i].name01+'</div>'+
            '<div>'+data[i].position01+'</div>'+
            '</div>';
    }
    $("#bCoachHtml").html(html);
}
