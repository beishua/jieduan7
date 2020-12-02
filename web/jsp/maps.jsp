<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/11/10
  Time: 17:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/lianxi.css">
    <script src="/js/jquery.js"></script>
    <script src="/js/common.js"></script>
    <script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=W3PIbxhuICW2z3kIZRsgKOmys5dGDIsS"></script>
</head>
<body>
<jsp:include page="top.jsp"></jsp:include>
<div class="lianxiwomen">
    <div>
        <div>
            <div><img src="../img/scott-webb-22437_WPS图片.jpg" height="248" width="100%"/></div>
        </div>
        <div>
            <div><img src="../img/p7up.png" height="19" width="15"/></div>
            <div> 网站首页</div>
            <div>>></div>
            <div> 联系我们</div>
        </div>
        <div>
            <div>
                <div id="allmap"></div>
            </div>
            <div>
                <div>
                    <c:forEach items="${mapsList}" var="mapsModel">
                        <div>
                            <div><img src="${mapsModel.imgHref}" height="60" width="60"/></div>
                            <div>${mapsModel.title}</div>
                        </div>
                    </c:forEach>
                </div>
                <div>
                    <c:forEach items="${mapsLista}" var="mapsModel">
                        <div>
                            <div><img src="${mapsModel.imgHref1}" height="60" width="60"/></div>
                            <div>${mapsModel.title1}</div>
                        </div>
                    </c:forEach>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script type="text/javascript">
    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(104.066443, 30.57935), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
</script>
