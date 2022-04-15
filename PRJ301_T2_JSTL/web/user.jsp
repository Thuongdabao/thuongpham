<%-- 
    Document   : user
   
    Author     : Thuong Pham
--%>

<%@page import="thuong.dto.UserDTO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>User Page</title>
    </head>
    <body>
        <h1>Hello User co roleID la US</h1>
        <%--
            UserDTO loginUser= (UserDTO) session.getAttribute("LOGIN_USER");
       --%>
        <h1>Wellcome: ${sessionScope.LOGIN_USER.fullname} </h1>
    </body>
</html>
