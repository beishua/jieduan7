<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/9/30
  Time: 11:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/gongsixinwen.css">
</head>
<body>
<jsp:include page="top.jsp"></jsp:include>
<div class="xinwen">
    <div>
        <div>
            <div>
                <div><img src="../img/scott-webb-22437_WPS图片.jpg" height="248" width="100%"/></div>
            </div>
            <div>
                <div><img src="../img/p7up.png" height="19" width="15"/></div>
                <div> 网站首页 </div>
                <div>>></div>
                <div> 行业动态 </div>
            </div>
        </div>
        <!--    动态    -->
        <div>
            <div>
                <div>公司新闻</div>
                <div>行业动态</div>
                <div>媒体报道</div>
            </div>
            <div>
                <c:forEach items="${newsLista}" var="newsModel">
                <div>
                    <div>
                        <div>${newsModel.day}</div>
                        <div>${newsModel.year}</div>
                    </div>
                    <div>
                        <div>${newsModel.title03}</div>
                        <div>${newsModel.content03}</div>
                    </div>
                </div>
                </c:forEach>
            </div>
        </div>
        <!--        -->
        <div>
            <div>
                <div>公司新闻</div>
                <div>行业动态</div>
                <div>媒体报道</div>
            </div>
            <div>
                <c:forEach items="${newsListb}" var="newsModel">
                    <div>
                        <div>
                            <div>${newsModel.day}</div>
                            <div>${newsModel.year}</div>
                        </div>
                        <div>
                            <div>${newsModel.title04}</div>
                            <div>${newsModel.content04}</div>
                        </div>
                    </div>
                </c:forEach>
            </div>
        </div>
    </div>
    <div>
        <div>
            <div><</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>></div>
        </div>
    </div>
</div>
</body>
</html>
