<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/10/5
  Time: 12:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/sirenjiaolian.css">
</head>
<body>
<jsp:include page="top.jsp"></jsp:include>
<div class="sirenjiaolian">
    <div>
        <div>
            <div>
                <div>
                    <div><img src="../img/scott-webb-22437_WPS图片.jpg" height="248" width="100%"/></div>
                </div>
                <div>
                    <div><img src="../img/p7up.png" height="19" width="15"/></div>
                    <div> 网站首页 </div>
                    <div>>></div>
                    <div> 私人教练 </div>
                </div>
            </div>
            <div>
                <div>私人教练</div>
                <div>OUR TEAM</div>
            </div>
            <div>
                <c:forEach items="${coachLista}" var="coachModel">
                    <div>
                        <div><img src="${coachModel.picture}" height="170" width="180"/></div>
                        <div>${coachModel.nameForhomejsp}</div>
                        <div>${coachModel.positionForhomejsp}</div>
                    </div>
                </c:forEach>
            </div>
        </div>
        <div>
            <div>
                <c:forEach items="${coachListb}" var="coachModel">
                    <div>
                        <div><img src="${coachModel.picture01}" height=170 width="180"/></div>
                        <div>${coachModel.name01}</div>
                        <div>${coachModel.position01}</div>
                    </div>
                </c:forEach>
            </div>
        </div>
        <div>
            <div>
                <div><img src="../img/acfa5605108c3150158055c03e58b035.png" height="260" width="360"/></div>
                <div>
                    <div>
                        <div>
                            <div>填表格可在私教带领下免费体验—次!</div>
                            <div>请仔细填写好下方预约表格，我们的客服人员会在24小时内与您联系，
                                谢谢您的支持与关注!</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>姓名</div>
                                    <div><input type="text"></div>
                                </div>
                                <div>
                                    <div>电话</div>
                                    <div><input type="text"></div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>邮箱</div>
                                    <div><input type="text"></div>
                                </div>
                                <div>
                                    <div>内容</div>
                                    <div><input type="text"></div>
                                </div>
                            </div>
                        </div>
                        <div>提交</div>
                        <div>THANKS</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div></div>
</div>
</body>
</html>
