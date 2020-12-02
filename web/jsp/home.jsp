<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/9/28
  Time: 22:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/css/home.css">
</head>
<body>
<!--首页-->
<jsp:include page="top.jsp"></jsp:include>
<div class="quanjishou">
    <div>
        <div><img src="../img/jghy.jpg" height="1287" width="1920"/></div>
    </div>
</div>
<div class="shouyeguanyuwomen">
    <div>
        <div>
            <div>关于我们</div>
            <div>ABOUT US</div>
        </div>
        ${companyModel.centont}
    </div>
</div>
<div class="shouyesirenjiaolian">
    <div>
        <div>
            <div>
                <div>私人教练</div>
                <div>OUR TEAM</div>
            </div>
            <div>
                <c:forEach items="${coachList}" var="coachModel">
                    <div>
                        <div><img src="${coachModel.pictureForhomejsp}" height="200" width="200"/></div>
                        <div>${coachModel.nameForhomejsp}</div>
                        <div>${coachModel.positionForhomejsp}</div>
                    </div>
                </c:forEach>
            </div>
            <div>
                <div>MORE+</div>
            </div>
        </div>
    </div>
</div>
<div class="lizhi">
    <div>
        <div>
            <div>${companyModel.titleForhomejsp}</div>
            <div>${companyModel.contentForhomejsp}</div>
        </div>
        <div>MORE+</div>
    </div>
</div>
<div class="xinwenzixun">
    <div>
        <div>
            <div>新闻资讯</div>
            <div>NEWS</div>
        </div>
        <div>
            <div>
                <c:forEach items="${newsList}" var="newsModel">
                    <div>
                        <div><img src="${newsModel.picture}" height="200" width="200"/></div>
                        <div>${newsModel.title}</div>
                        <div>${newsModel.date}</div>
                        <div>${newsModel.content}</div>
                        <div>${newsModel.content01}</div>
                        <div>${newsModel.content02}</div>
                    </div>
                </c:forEach>
            </div>
        </div>
        <div>MORE+</div>
    </div>
</div>
<div class="onlin">
    <div>
        <div>
            <div>
                <div><img src="../img/acfa5605108c3150158055c03e58b035.png" height="260" width="360"/></div>
                <div>
                    <div>填表格可在私教带领下免费体验—次!</div>
                    <div>请仔细填写好下方预约表格，我们的客服人员会在24小时内与您联系，
                        谢谢您的支持与关注!</div>
                    <div>
                        <div>
                            <div>姓名</div>
                            <div><input type="text"></div>
                        </div>
                        <div>
                            <div>电话</div>
                            <div><input type="text"></div>
                        </div>
                        <div>
                            <div>邮箱</div>
                            <div><input type="text"></div>
                        </div>
                        <div>
                            <div>内容</div>
                            <div><input type="text"></div>
                        </div>
                    </div>
                    <div>提交</div>
                    <div>THANKS</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="jiewei"></div>
</body>
</html>
