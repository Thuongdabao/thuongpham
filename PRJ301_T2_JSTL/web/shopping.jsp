<%-- 
    Document   : shopping
    Created on : 
    Author     : Thuong Pham
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Milk Tea Page</title>
    </head>
    <body>
        <h1>Welcome to my milk tea!!!</h1>
        <form action="MainController">
            Choose your milk tea:
            <select name="cmbTea">
                <option value="T01-Ice Tea-10">Ice Tea</option>
                <option value="T02-Chocolate Tea-50">Chocolate Tea</option>
                <option value="T03-Peach Tea-60">Peach Tea</option>
                <option value="T04-Matcha Tea-70">Matcha Tea</option>

            </select>
            <input type="number"name="quantity"value="1"/>
            <input type="submit"name="action"value="Add To Cart"/>
            <input type="submit"name="action"value="View Cart"/>
        </form>
        <%--
            String message = (String) request.getAttribute("SHOPPING_MESSAGE");
            if (message == null) {
                message = "";
            }

        %>
        <%= message--%>
        ${requestScope.SHOPPING_MESSAGE}
    </body>
</html>
