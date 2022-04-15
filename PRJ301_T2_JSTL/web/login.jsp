<%-- 
    Document   : login
 
    Author     : Thuong Pham
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login Page</title>
    </head>
    <body>
        <form action="MainController" method="POST">
            User ID<input type="text"name="userID"/><br/>
            Password<input type="password"name="password"/>
           <input type="submit"name="action"value="Login"/>
           <input type="reset"value="Reset"/><br/>
           
           <form/>
           <a href="createUser.jsp">Create User</a><br/>
           <a href="shopping.jsp">Shopping Page</a>
           
           <%--
               String error= (String) request.getAttribute("ERROR");
               if( error== null){
                   error="";
               }
           %>
           <%= error --%>
           ${requestScope.ERROR}
    </body>
</html>
