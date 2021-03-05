function searchProductID() {
    //Create the XHR object
    var xhttp = new XMLHttpRequest();
    //Open the file
    xhttp.open("GET", "question7.xml", false);
    //Send the request
    xhttp.send();
    // Read data
    xmlDoc = xhttp.responseText;
    //Display data  
    document.getElementById("contentTable").innerHTML = xmlDoc; 

    let productID = document.getElementById("productField").value;
    
    let suppliers = document.getElementsByTagName("supplier");
    let products;
    let output = "<tr><td width=\"135\">Product Id</td><td width=\"78\">Supplier Id</td><td width=\"78\">Product Name</td></tr>";

    for(i=0; i<suppliers.length; i++) {
        products = suppliers[i].getElementsByTagName("product");
        for(j=0; j<products.length; j++) {
            if (products[j].getAttribute('productid').toLowerCase().includes(productID.toLowerCase())) {
                output += "<tr>"
                output += "<td>" + products[j].getAttribute('productid') + "</td>";
                output += "<td>" + suppliers[i].getAttribute('id') + "</td>";
                output += "<td>" + products[j].getElementsByTagName('name')[0].innerHTML + "</td>";
                output += "</tr>"
            }
        }
    }
    document.getElementById("contentTable").innerHTML = output;
}

function searchSupplierID() {
    //Create the XHR object
    var xhttp = new XMLHttpRequest();
    //Open the file
    xhttp.open("GET", "question7.xml", false);
    //Send the request
    xhttp.send();
    // Read data
    xmlDoc = xhttp.responseText;
    //Display data  
    document.getElementById("contentTable").innerHTML = xmlDoc; 

    let supplierField = document.getElementById("supplierField").value;
    
    let suppliers = document.getElementsByTagName("supplier");
    let products;
    let output = "<tr><td width=\"135\">Product Id</td><td width=\"78\">Supplier Id</td><td width=\"78\">Product Name</td></tr>";

    for(i=0; i<suppliers.length; i++) {
        if (suppliers[i].getAttribute('id').toLowerCase().includes(supplierField.toLowerCase())) {
            products = suppliers[i].getElementsByTagName("product");
            for(j=0; j<products.length; j++) {
                output += "<tr>"
                output += "<td>" + products[j].getAttribute('productid') + "</td>";
                output += "<td>" + suppliers[i].getAttribute('id') + "</td>";
                output += "<td>" + products[j].getElementsByTagName('name')[0].innerHTML + "</td>";
                output += "</tr>"
            }
        }
    }
    document.getElementById("contentTable").innerHTML = output;
}