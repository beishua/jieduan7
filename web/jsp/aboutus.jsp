<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/guanyuwomen.css">
</head>
<body>
<jsp:include page="top.jsp"></jsp:include>
<div class="beijing">
    <div><img src="../img/scott-webb-22437_WPS图片.jpg" height="248" width="100%"/></div>
</div>
<div class="guanyuwomen">
    <div>
        <div>
            <div><img src="../img/p7up.png" height="19" width="15"/></div>
            <div>网站首页</div>
            <div> > > </div>
            <div>关于我们</div>
        </div>
        <div><img src="${companyModel.picture}" height="300" width="100%"/></div>
        <div>
            <div>${companyModel.title}</div>
            <div>${companyModel.content1}</div>
            <div></div>
        </div>
        <div>
            <div>${companyModel.title1}</div>
            <div>${companyModel.content2}</div>
        </div>
        <div></div>
    </div>
</div>
<div class="jieshao">
    <div>
        <div>
            <c:forEach items="${companyList}" var="companyModel">
                <div>
                    <div><img src="${companyModel.picture01}" height="120" width="420"/></div>
                    <div>
                        <div>${companyModel.title01}</div>
                        <div>${companyModel.content01}</div>
                    </div>
                </div>
            </c:forEach>
        </div>
    </div>
</div>
<div class="xueyuanfengcai">
    <div>
        <div>
            <div>学员风采</div>
            <div>STUDENTS SHOW</div>
        </div>
        <div>
            <c:forEach items="${companyLista}" var="companyModel">
                <div><img src="${companyModel.picture02}" height="140" width="180"/></div>
            </c:forEach>
        </div>
        <div>
            <c:forEach items="${companyListb}" var="companyModel">
                <div><img src="${companyModel.picture03}" height="140" width="180"/></div>
            </c:forEach>
        </div>
        <div><img src="${companyModel.picture04}" height="140" width="180"/></div>
    </div>
    <div>立即预约</div>
</div>
<div class="dibu">
</div>
</body>
</html>