<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/9/28
  Time: 20:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/nav.css">
    <style>
        a{
            text-decoration:none;
        }
    </style>
</head>
<body>
<div class="nav">
    <div>
        <div>
            <div>
                <div><img src="../img/4idy.png" height="60" width="100"/></div>
                <div>
                    <div>万息健身</div>
                    <div>FITNESS</div>
                </div>
            </div>
            <div>
                <div>
                    <c:forEach items="${navList}" var="navModel">
                        <a href="${navModel.href}">
                            <div>${navModel.title}</div>
                        </a>
                    </c:forEach>
<%--                    <a href="home.html"><div>网站首页</div></a>--%>
<%--                    <a href="AboutUs.html"> <div>关于我们</div></a>--%>
<%--                    <a href="CompanyNews.html"><div>新闻资讯</div></a>--%>
<%--                    <a href="Product.html"><div>产品中心</div></a>--%>
<%--                    <a href="JiaoLianModel.html"><div>私教预约</div></a>--%>
<%--                    <a href="Maps.html"><div>联系我们</div></a>--%>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
