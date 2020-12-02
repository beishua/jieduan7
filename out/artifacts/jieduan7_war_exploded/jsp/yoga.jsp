<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/10/4
  Time: 15:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/yujia.css">
</head>
<body>
<jsp:include page="top.jsp"></jsp:include>
<div class="yujiachanpin">
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
                <c:forEach items="${yogaList}" var="yogaModel">
                    <div>
                        <div>
                            <div><img src="${yogaModel.picture}" height="170" width="180"/></div>
                            <div>${yogaModel.name}</div>
                            <div>${yogaModel.pice}</div>
                        </div>
                    </div>
                </c:forEach>
            </div>
        </div>
        <div>
            <div>
                <a href="chanpinzhongxin.html"><div> < </div></a>
                <div>1</div>
                <div> > </div>
            </div>
        </div>
    </div>
    <div></div>
</div>
</body>
</html>
