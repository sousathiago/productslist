function ProductService (){
    this.baseUri = 'http://www.bestbuy.ca/api/v2/json/';
    this.categoriesUri = 'category/Departments';
    this.allProductsUri = 'search?categoryid=departments';
    this.productsPerCategoryUri = 'search?categoryid={catid}';
    this.productDetailsUri = 'product/{sku}';

    //Get Categories from API
    this.GetCategories = function (callBack) {
        $.ajax({ 
            type: 'GET', 
            url: this.baseUri+this.categoriesUri,            
            dataType: 'json',
            success: function (data) { 
                callBack(data);
            }
        });
    }

    //Get products from API
    this.GetAllProducts = function (callBack) {
        $.ajax({ 
            type: 'GET', 
            url: this.baseUri+this.allProductsUri,            
            dataType: 'json',
            success: function (data) { 
                callBack(data);
            }
        });
    }

    //Get products from BestBuy API by category
    this.GetAllProductsByCategory = function (catId, callBack) {
        $.ajax({ 
            type: 'GET', 
            url: this.baseUri+this.productsPerCategoryUri.replace("{catid}", catId),            
            dataType: 'json',
            success: function (data) { 
                callBack(data);
            }
        });
    }

    //Get details of specific product from BestBuyAPI
    this.GetProductDetails = function (sku, callBack){
        $.ajax({ 
            type: 'GET', 
            url: this.baseUri+this.productDetailsUri.replace("{sku}", sku),            
            dataType: 'json',
            success: function (data) { 
                callBack(data);
            }
        });
    }

}