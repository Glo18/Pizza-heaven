$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function () {
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        

        let order = (s, c, t, n, total) => {
            return { s, c, t, n, total };
        };

        let price, totalPrice;
        switch (size) {
            case size = "small":
                price = 750;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 200;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else if(crust ==="gluten-free") {
                    totalPrice = (price * number) + 100;
                }
                break;
            case size = "medium":
                price = 750;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 200;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else if(crust === "gluten-free") {
                    totalPrice = (price * number) + 100;
                }
                break;
            case size = "large":
                price = 1200;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 200;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "gluten-free") {
                    totalPrice = (price * number) + 100;
                }
                break;
            }

                switch (topping) {
                  
                    case topping = "pineapple":
                        totalPrice = totalPrice + 250;
                        break;
                    case topping = "pepperoni":
                        totalPrice = totalPrice + 350;
                        break;
                    case topping = "beef":
                        totalPrice = totalPrice + 200;
                        break;
                    case topping = "chicken":
                        totalPrice = totalPrice + 300;
                        break;
        
                }

                let newOrder = order(size, crust, topping, number, totalPrice);
                console.log(newOrder); 
        
               
                $('.summary').slideDown(2000);
                $('.cdata-overlay').slideUp();
                $('#list').slideDown();
                $('.deliver').show(1000);
                $('.delivernot').show(1000);
        
                $('#list').text(" ");
                $("#list").append("<br>" + "Crust :   "
                    + newOrder.f + "<br>"  ,"Size :   "
                    + newOrder.c + "<br>" ,"Toppings :     "
                    + newOrder.t + "<br>" ," Number of pizzas :    "
                    + newOrder.n + "<br>" ,"Total Price :  "
                    + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
            });
        
            
            $(".deliver").click(function () {
                $('.summary').slideUp();
                $('#list').slideUp();
                $('.summary').text("Provide location details").slideDown();
                $('.deliver').hide(1000);
                $('.delivernot').hide(1000);
                $('.cdata-overlay').slideDown();
            });

            $(".delivernot").click(function () {
        
            });
        });
        
            
  


