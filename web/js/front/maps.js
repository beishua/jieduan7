$(function () {
    $("#nav").load("/html/nav.html");
})
function findNav() {
    let data = pmyAjax('/lianxi', 'get', {});
    console.log(data);
    setNavHtml(data.navList);
}