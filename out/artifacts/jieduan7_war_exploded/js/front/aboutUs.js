$(function () {
    $("#nav").load("/html/nav.html");
})
function findNav() {
    let data = pmyAjax('/aboutus', 'get', {});
    // console.log(data);
    setNavHtml(data.navList);
    setCompanyHtml(data.companyList);
    setACompanyHtml(data.companyLista);
    setBCompanyHtml(data.companyListb);
}
function setCompanyHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<div >\n' +
            '<div><img src="'+data[i].picture01+'" height="120" width="420"/></div>\n' +
                '<div>\n' +
            '     <div>'+data[i].title01+'</div>\n' +
            '     <div>'+data[i].content01+'</div>\n' +
                '</div>\n' +
            ' </div>';
    }
    $("#companyHtml").html(html);
}
function setACompanyHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<div><img src="'+data[i].picture02+'" height="140" width="180"/></div>';
    }
    $("#aCompanyHtml").html(html);
}
function setBCompanyHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+=' <div><img src="'+data[i].picture03+'" height="140" width="180"/></div>';
    }
    $("#bCompanyHtml").html(html);
}