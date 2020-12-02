$(function () {
    $("#nav").load("/html/nav.html");
})
function findNav() {
    let data = pmyAjax('/coach', 'get', {});
    setNavHtml(data.navList);
  console.log(data);
}