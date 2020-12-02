<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/10/2
  Time: 21:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/hangyedongtai.css">
</head>
<body>
<jsp:include page="top.jsp"></jsp:include>
<div class="beijing">
    <div><img src="../img/scott-webb-22437_WPS图片.jpg" height="248" width="100%"/></div>
</div>
<div class="hongyedongtai">
    <div>
        <div>
            <div>
                <div>
                    <div><img src="../img/p7up.png" height="19" width="15"/></div>
                    <div>网站首页</div>
                    <div> > > </div>
                    <div>行业动态</div>
                </div>
            </div>
            <div>
                <div>
                    <div>公司新闻</div>
                    <div>行业动态</div>
                    <div>媒体新闻</div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <c:forEach items="${newsLista}" var="newsModel">
                    <div>
                        <div>
                            <div>${newsModel.day}</div>
                            <div>${newsModel.year}</div>
                        </div>
                        <div>
                            <div>${newsModel.title05}</div>
                            <div>${newsModel.content05}</div>
                        </div>
                    </div>
                </c:forEach>
                <div>
                    <div>
                        <div>${newsModel.day}</div>
                        <div>${newsModel.year}</div>
                    </div>
                    <div>${newsModel.content06}</div>
                </div>
                <div>
                    <div>
                        <div>${newsModel.day}</div>
                        <div>${newsModel.year}</div>
                    </div>
                    <div>${newsModel.content07}</div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div>
            <div> < </div>
            <div>1</div>
            <div> > </div>
        </div>
    </div>
    <div></div>
</div>

</body>
</html>
