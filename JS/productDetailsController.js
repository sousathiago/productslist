function ProductDetailsController(){
    this.LoadProduct = function (sku){
        var productService = new ProductService();
        productService.GetProductDetails(sku, this.BindProduct);
    }

    this.BindProduct = function (productData){
        var str = "";
        
        str += "<p>" + productData.name + " - "+productData.regularPrice+"</p>";
        str += "<p>" + productData.shortDescription + "</p>";
        str += "<img src='"+productData.thumbnailImage+"'/>";
                
        $("#detailsDialog").html(str);
        $("#detailsDialog").dialog({
            minWidth: 500
        });

    }
}

