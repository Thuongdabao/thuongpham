<%-- 
    Document   : CreateUser
    Created on : 
    Author     : Thuong Pham
--%>


<%@page import="thuong.dto.UserError"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Create new user page</title>
    </head>
    <body>
        <h1>Create New User</h1>
        <%
            UserError userError = (UserError) request.getAttribute("USER_ERROR");
            if (userError == null) {
                userError = new UserError();
            }
        %>
        <form action="MainController" method="POST">
            User ID(*)<input type="text"name="userID" required=""/> 
            ${requestScope.USER_ERROR.userID} </br>
            Full Name(*)<input type="text"name="fullName" required=""/> 
            ${requestScope.USER_ERROR.fullName}
            </br>
            Role ID(*)<select name="roleID"required=""/>
            <option value=""></option>
            <option value="US">US</option>
            <option value="GU">GU</option>
            <option value="ST">ST</option> 
        </select>
        ${requestScope.USER_ERROR.roleID}
        </br>
        Password(*)<input type="password"name="password"required=""/>
        ${requestScope.USER_ERROR.password}
        </br>
        Confirm(*)<input type="password"name="confirm" required=""/>
        ${requestScope.USER_ERROR.confirm}
        </br>
        <input type="submit"name="action"value="Create"/>
        <input type="reset"value="Reset"/>
        <%--=userError.getMessageError()--%>
    </form>
</body>
</html>
