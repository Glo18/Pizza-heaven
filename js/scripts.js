$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function () {
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);


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
                } else {
                    totalPrice = (price * number) + 100;
                }
                break;
            case size = "medium":
                price = 750;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 200;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else {
                    totalPrice = (price * number) + 100;
                }
                break;
            case size = "large":
                price = 1200;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 200;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else {
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
        
            
  


