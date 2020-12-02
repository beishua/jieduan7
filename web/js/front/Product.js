$(function () {
    $("#nav").load("/html/nav.html");
})
function findNav() {
    let data = myAjax('/product','get',{});
    setNavHtml(data.navList);
    setTypeHtml(data.productType);
    setProductData(data.productList);
}
function setProductData(data){
    let html='';
    for (let i=0;i<data.length;i++){
        html+='<div>\n' +
            '        <div onclick="toProductDetaile('+data[i].id+')"><img src="'+data[i].imgHref+'" height="170" width="180"/></div>\n' +
            '            <div>'+data[i].name+'</div>\n' +
            '            <div>'+data[i].pice+'</div>\n' +
            '        </div>';
    }
    $("#productHtml").html(html);
}
function toProductDetaile(id) {
    sessionStorage.setItem("productId",id);
    location.href="/back/Product/DetailPage.html";
}
function setTypeHtml(data) {
    let html='';
    for (let i=0;i<data.length;i++){
        html+= '<div onclick="findAllByTypeId('+data[i].id+')">'+data[i].name+'</div>';
    }
    $("#typeHtml").html(html);
}

function findAllByTypeId(programId) {
    //    select * from product where typeID=id limit  (pageNum-1)*8, 8 ;
    let data = myAjax('/typeId','get',{programId:programId,pageNum:1,pageSize:8});
    setProductData(data.list);
}
