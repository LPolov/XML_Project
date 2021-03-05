function displayInfo() {

    //Create the XHR object
    var xhttp = new XMLHttpRequest();
    //Open the file
    xhttp.open("GET", "question6.xml", false);
    //Send the request
    xhttp.send();
    // Read data
    xmlDoc = xhttp.responseText;
    //Display data   
    document.getElementById("display").innerHTML = xmlDoc; 

    let suppliers = document.getElementsByTagName("supplier");
    let products;
    let output = "<table border='1'>";
    output += "<th>SupplierID</th>";
    output += "<th>ProductID</th>";
    output += "<th>Name</th>";
    output += "<th>Retail Price</th>";
    output += "<th>In stock</th>";
    output += "<th>Rating Avg</th>";

    for(i=0; i<suppliers.length; i++) {
        products = suppliers[i].getElementsByTagName("product");

        for (j=0; j< products.length; j++) {

            if (products[j].getAttribute('instock') == 'N') {
                output += "<tr>";
                output += "<td style=\"background-color: red\">" + suppliers[i].getAttribute("id") + "</td>";
                output += "<td style=\"background-color: red\">" + products[j].getAttribute("productid") + "</td>";
                output += "<td style=\"background-color: red\">" + products[j].getElementsByTagName("name")[0].innerHTML + "</td>";

                if (products[j].getElementsByTagName("Retail_Price").length == 0) {
                    output += "<td style=\"background-color: red\"> - </td>";
                } else {
                    output += "<td style=\"background-color: red\">" + products[j].getElementsByTagName("Retail_Price")[0].innerHTML + "</td>";
                }

                output += "<td style=\"background-color: red\">" + products[j].getAttribute("instock") + "</td>";

                if (products[j].getElementsByTagName("product_details")[0].getElementsByTagName("Rating_Avg").length == 0) {
                    output += "<td style=\"background-color: red\"> - </td>";
                } else {
                    output += "<td style=\"background-color: red\">" + 
                    products[j].getElementsByTagName("product_details")[0].getElementsByTagName("Rating_Avg")[0].innerHTML+ "</td>";
                }
                
                output += "</tr>";
            }
            else {
                output += "<tr>";
                output += "<td>" + suppliers[i].getAttribute("id") + "</td>";
                output += "<td>" + products[j].getAttribute("productid") + "</td>";
                output += "<td>" + products[j].getElementsByTagName("name")[0].innerHTML + "</td>";

                if (products[j].getElementsByTagName("Retail_Price").length == 0) {
                    output += "<td> - </td>";
                } else {
                    output += "<td>" + products[j].getElementsByTagName("Retail_Price")[0].innerHTML + "</td>";
                }

                output += "<td>" + products[j].getAttribute("instock") + "</td>";

                if (products[j].getElementsByTagName("product_details")[0].getElementsByTagName("Rating_Avg").length == 0) {
                    output += "<td> - </td>";
                } else {
                    output += "<td>" + products[j].getElementsByTagName("product_details")[0].getElementsByTagName("Rating_Avg")[0].innerHTML+ "</td>";
                }
                output += "</tr>";
            }
        }
    }
output += "</table>";
document.getElementById("display").innerHTML = output;
    
}