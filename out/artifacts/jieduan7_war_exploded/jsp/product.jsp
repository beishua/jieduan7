<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/9/29
  Time: 22:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/chanpinzhongxin.css">
</head>
<body>
<jsp:include page="top.jsp"></jsp:include>
<div class="chanpin">
    <div>
        <div>
            <div>
                <div><img src="../img/scott-webb-22437_WPS图片.jpg" height="248" width="100%"/></div>
            </div>
            <div>
                <div><img src="../img/p7up.png" height="19" width="15"/></div>
                <div> 网站首页 </div>
                <div>>></div>
                <div> 产品中心 </div>
            </div>
        </div>
        <div>
            <div>
                <div>杠铃</div>
                <div>瑜伽</div>
                <div>拳击</div>
                <div>健身操</div>
            </div>

            <div>
                <c:forEach items="${productList}" var="productModel">
                    <div>
                        <div><img src="${productModel.picture}" height="170" width="180"/></div>
                        <div>${productModel.name}</div>
                        <div>${productModel.pice}</div>
                    </div>
                </c:forEach>
            </div>
            <div>
                <c:forEach items="${productLista}" var="productModel">
                    <div>
                        <div><img src="${productModel.picture01}" height="170" width="180"/></div>
                        <div>${productModel.name01}</div>
                        <div>${productModel.pice}</div>
                    </div>
                </c:forEach>
            </div>
        </div>
        <div>
            <div> < </div>
            <div>1</div>
            <div>2</div>
            <a href="yujia.html"><div> > </div></a>
        </div>
    </div>
    <div></div>
</div>
</body>
</html>
