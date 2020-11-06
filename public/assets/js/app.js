$(document).ready(function() {
    function getProduct(productId) {
            $.ajax({
                type:"GET",            
                url:`/api/product/${productId}`        
            }).then(function(data) {           
                 console.log(data)            
                 $("#productName").text(data.product_name)            
                 $("#price").text("$" + data.price)
                 $("#edible").text(data.edible)
                 $("#currency").text(data.currency)
                 $("#quantity").text(data.quantity)
                 $("#paymentMethod").text(data.payment_method)
                 $("#itemType").text(data.item_type)        
                })    
            }   
            
            $(".product-dropdown-item").on('click', function() {       
                console.log(" data " + $(this).attr("data-id"))       
                const productId = $(this).attr("data-id")       
                getProduct(productId)   
            })
        });