function ProductListController(){
    this.LoadProducts = function () {
        var productService = new ProductService();
        productService.GetAllProducts(this.BindProducts);
    }

    this.LoadProductsByCategory = function (catId) {
        var productService = new ProductService();
        var products = productService.GetAllProductsByCategory(catId, this.BindProducts);
    }

    this.LoadCategories = function () {
        var productService = new ProductService();
        productService.GetCategories(this.BindCategories);
       
    }

    this.BindProducts = function (data) {
        var str = "";
        for(i=0;i<data.products.length; i++){
            var prod = data.products[i];
            str += "<div class='col-md-3'>";
            str += "<a onclick=\"pageManager.Navigate('#details?sku="+prod.sku+ "')\">"+ prod.name + "</a>";
            str += "<p>" + prod.salePrice + "</p>";
            str += "<img src='"+prod.thumbnailImage+"'/>";
            str += "</div>";
        }        
        $("#productsDiv").html(str);
    }

    this.BindCategories = function (data) {
        var str = "";
        for(i=0;i<data.subCategories.length; i++){
            str += "<a onclick=\"pageManager.Navigate('#products?category=" +data.subCategories[i].id +"')\" >"+ data.subCategories[i].name + "</a><br/>";
        }        
        $("#categoriesDiv").html(str);
    }

}
