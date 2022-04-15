
<%@page import="thuong.Tea.Tea"%>
<%@page import="thuong.Tea.Cart"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>View Cart Page</title>
    </head>
    <body>
        <h1>Your shopping cart: </h1>
        <%
            Cart cart = (Cart) session.getAttribute("CART");
            if (cart == null) {
        %>
        <h1>Ban chua chon san pham nao!!!</h1> 
        <%
        } else {
        %>
        <table border="1">
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Modify</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <%
                    int count = 1;
                    double total = 0;
                    for (Tea tea : cart.getCart().values()) {
                        total += tea.getQuantity() * tea.getPrice();
                %>
            <form action="MainController">


                <tr>
                    <td><%= count++%></td>
                    <td>
                        <input type="text" name="id" value="<%=tea.getId()%>" readonly=""/>
                    </td>
                    <td><%=tea.getName()%></td>
                   
                   
                   <td>
                       <input type="number"name="quantity"value="<%= tea.getQuantity()%>" min="1" required=""/> 
                    </td>
                    <td><%=tea.getPrice()%></td>
                    <td><%=tea.getQuantity() * tea.getPrice()%></td>
                    <td>
                        <input type="submit" name="action"value="Modify"/>
                        <!--<input type="hidden" name="id"value="<%= tea.getId()%>"/>-->
                    </td>
                    <td>
                        <input type="submit"name="action"value="Remove"/>
                        
                    </td>
                </tr> 
            </form>
            <%
                }
            %>

        </tbody>
    </table>
    <h1>Total: <%= total%>   </h1> 

    <%
        }
    %>
    <a href="shopping.jsp">Add more</a>
</body>
</html>
