<%--
  Created by IntelliJ IDEA.
  User: wdm28
  Date: 2020/10/14
  Time: 19:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="/js/jquery.js"></script>
    <script src="/js/back/user/userRegister.js"></script>
    <link rel="stylesheet" href="/css/back/userRegister.css">

</head>
<body>
<div class="userRegister">
    <div>
<%--        <form action="userRegister" method="post">--%>
            <div>用户名：<input type="text" id="username" name="username" pattern="^[a-zA-Z]\w{5,15}$"></div>
            <div>密码：<input type="password" id="password" name="password" pattern="^[a-zA-Z]\w{5,15}$"></div>
            <div>重新输入密码：<input type="password" id="rePassword" name="rePassword" pattern="^[a-zA-Z]\w{5,15}$" onblur="checkPassword()"></div>
            <label id="passwordTip"></label>
<%--            <div>验证码：<input type="text" id="code" name="code" pattern="\w{4}"></div >--%>
            <div>手机号：<input type="text" id="phone" name="phone"></div>
            <div>性别：<label><input type="radio" name="sex" value="保密">保密</label>
                <input type="radio"name="sex" value="男" id="nan"><label for="nan">男</label>
                <label><input type="radio"name="sex" value="女">女</label></div>
            <div>生日：<input type="date" id="birthday" name="birthday"></div>
            <div>爱好：<label><input type="checkbox" name="hobby" value="游戏">游戏</label>
                <label><input type="checkbox" name="hobby" value="篮球">篮球</label>
                <label><input type="checkbox" name="hobby" value="羽毛球">羽毛球</label>
                <label><input type="checkbox" name="hobby" value="乒乓球">乒乓球</label></div>
            <div>自我评价：<textarea id="introduce" name="introduce"></textarea></div>
            <div class="userRegister-button">
                <div><input type="button" value="注册" onclick="register()" >
                    <input type="reset" value="重置"></div>
            </div>
<%--        </form>--%>
    </div>
</div>
</body>
</html>
