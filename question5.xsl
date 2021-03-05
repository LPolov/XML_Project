<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Product details</title>
            </head>
            <body>
            <h1>Products details</h1>
                <table border='1'>
                    <th style="background: orange">SKU</th>
                    <th style="background: orange">Rating</th>
                    <th style="background: orange">Product URL</th>

                    <xsl:for-each select="//supplier/product">

                    <xsl:if test="@instock = 'N'">
                        <tr>
                            <td style="background: red"><xsl:value-of select="product_details/SKU"/></td>
                            <td style="background: red"><xsl:value-of select="product_details/Rating_Avg"/></td>
                            <td style="background: red"><xsl:value-of select="product_details/Product_URL"/></td>
                        </tr>
                        
                    </xsl:if>

                    <xsl:if test="@instock = 'Y'">
                        <tr>
                            <td><xsl:value-of select="product_details/SKU"/></td>
                            <td><xsl:value-of select="product_details/Rating_Avg"/></td>
                            <td><xsl:value-of select="product_details/Product_URL"/></td>
                        </tr>
                    </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
