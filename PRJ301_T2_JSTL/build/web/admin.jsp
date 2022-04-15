<%-- 
    Document   : admin
    
    Author     : Thuong Pham
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="java.util.List"%>
<%@page import="thuong.dto.UserDTO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ADMIN Page</title>
    </head>
    <body>
        
        <%--<c:if test="${sessionScope.LOGIN_USER == null or sessionScope.LOGIN_USER.roleID ne 'AD'}">
            <c:redirect url="login.jsp"></c:redirect>
        </c:if>
        ${sessionScope.LOGIN_USER.fullName} 
        --%>
        <h1>Wellcome ADMIN</h1>

        <c:url var="logoutLink" value="MainController">
            <c:param name="action" value="Logout"></c:param>
        </c:url>
        <a href="${logoutLink}">Logout</a>


        <form action="MainController">
            Search<input type="text" name="search"value="${param.search}"/>
            <input type="submit" name="action" value="Search"/>
        </form>

        <c:if test="${requestScope.LIST_USERS != null}">
            <c:if test="${not empty requestScope.LIST_USERS}">
                <table border="1">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User ID</th>
                            <th>Full Name</th>
                            <th>Role ID</th>
                            <th>Password</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach var="user" varStatus="counter" items="${requestScope.LIST_USERS}">
                        <form action="MainController" method="POST">

                            <tr>
                                <td>${counter.count}</td>
                                <td>
                                    <input type="text" name="userID" value="${user.userID}" readonly=""/>
                                </td>
                                <td>
                                    <input type="text" name="fullName" value="${user.fullname}" required=""/>
                                </td>
                                <td>
                                    <input type="text"name="roleID" value="${user.roleID}" required=""/>

                                </td>
                                <td>${user.password}</td>
                                <td>
                                    <c:url var="deleteLink" value="MainController">
                                        <c:param name="action" value="Delete"></c:param>
                                        <c:param name="search" value="${param.search}"></c:param>
                                        <c:param name="userID" value="${user.userID}"></c:param>
                                    </c:url>
                                    <a href="${deleteLink}">Delete</a>
                                </td>
                                <td>
                                    <input type="submit" name="action" value="Update"/>
                                    <input type="hidden" name="search" value="${param.search}"/>
                                </td>
                            </tr>
                        </form>
                    </c:forEach>

                </tbody>
            </table>
            ${requestScope.ERROR_MESSAGE}


        </c:if>
    </c:if>




</body>
</html>
