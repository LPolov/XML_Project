<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Products</title>
            </head>
            <body>
            <h1>Products</h1>
                <table border='1'>
                    <th style="background: orange">Product id</th>
                    <th style="background: orange">In stock</th>
                    <th style="background: orange">SKU</th>
                    <th style="background: orange">Rating</th>
                    <th style="background: orange">Product URL</th>
                    <th style="background: orange">Name</th>
                    <th style="background: orange">Price</th>
                    <th style="background: orange">Retail Price</th>
                    <th style="background: orange">Qty</th>

                    <xsl:for-each select="//supplier/product">
                        <tr>
                            <td><xsl:value-of select="@productid"/></td>
                            <td><xsl:value-of select="@instock"/></td>
                            <td><xsl:value-of select="product_details/SKU"/></td>
                            <td><xsl:value-of select="product_details/Rating_Avg"/></td>
                            <td><xsl:value-of select="product_details/Product_URL"/></td>
                            <td><xsl:value-of select="name" /></td>
                            <td><xsl:value-of select="price" /></td>
                            <td><xsl:value-of select="Retail_Price" /></td>
                            <td><xsl:value-of select="qty" /></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
