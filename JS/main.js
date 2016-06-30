function Manager(){
    this.productDetailsController = new ProductDetailsController();
    this.productListController = new ProductListController();
    this.pages = {
        categories:{div : '#categoriesList', html: 'categoriesList.html', loaded:false},
        products:{div : '#productsList', html: 'productsList.html', loaded:false},
        details: {div : '#productDetails', html: 'productDetails.html', loaded:false, load:function(){}}
    }; 
    
    this.Start = function (){        
        this.LoadCategories();
        this.LoadProducts(window.location.hash);
        this.Navigate(window.location.hash);        
    }

    this.LoadCategories = function(){
        $(this.pages.categories.div).load(this.pages.categories.html);
        this.pages.categories.loaded = true;
        this.productListController.LoadCategories();
    }

    this.LoadProducts = function(page){
        if (!this.pages.products.loaded){
            $(this.pages.products.div).load(this.pages.products.html);
            this.pages.products.loaded = true;
        }
            
        if (page.indexOf("category=")>0){
            this.productListController.LoadProductsByCategory(page.substring(page.indexOf("category=")+9));
        }
        else{
            this.productListController.LoadProducts();
        }
        
    }


    this.Navigate = function (page){
        if (window.location.hash != page){
            window.location.hash = page;
        }
        this.loadTemplates(page);
        this.callController(page);
    }

    this.callController = function (page){
        if (page.startsWith("#details")){            
            var sku = page.substring(page.indexOf("sku=")+4);
            this.productDetailsController.LoadProduct(sku)
        } 
        else if (page.startsWith("#products")){
            this.LoadProducts(page);
        }
    }    

    this.loadTemplates = function (page){
        if (page.startsWith("#details") && !this.pages.details.loaded){            
            $(this.pages.details.div).load(this.pages.details.html);
            this.pages.details.loaded = true;    
        }
    }
}