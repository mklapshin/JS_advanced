/* function init() {
    const div = document.getElementById("div");
    const code = document.getElementById("code");

    let totalPrice = 0;
    let newTotalPrice = document.createElement("div");

    item1.addEventListener('click', function (event) {
        totalPrice = totalPrice + 40;
        let item = document.createElement("div");
        item.innerHTML = "<p>Молоко 40 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

    item2.addEventListener('click', function (event) {
        totalPrice = totalPrice + 20;
        let item = document.createElement("div");
        item.innerHTML = "<p>Хлеб 20 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

    item3.addEventListener('click', function (event) {
        totalPrice = totalPrice + 15;
        let item = document.createElement("div");
        item.innerHTML = "<p>Вода 15 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

}


window.addEventListener('load', init);

*/

 $(document).ready(function(){

    $('.btn').click(function() {
        var price = parseInt($(this).attr('data-price'));
        var oldSum = parseInt($('#totalSum').text());
        $('#totalSum').text(oldSum + price);
        $('#totalSum2').text(oldSum + price);
        $('#totalSum3').text(oldSum + price);
        var quantity = parseInt($(this).attr('qnt'));
        var oldQuantity = parseInt($('#totalQuantity').text());
        $('#totalQuantity').text(oldQuantity + quantity);

    })

    $('.btn2').click(function() {
        var price = parseInt($(this).attr('data-price'));
        var oldSum = parseInt($('#totalSum').text());
        if (oldSum > 0) {
        $('#totalSum').text(oldSum - price);
        $('#totalSum2').text(oldSum - price);
        $('#totalSum3').text(oldSum - price);
        var quantity = parseInt($(this).attr('qnt2'));
        var oldQuantity = parseInt($('#totalQuantity').text());
        $('#totalQuantity').text(oldQuantity - quantity);
        }
    })


    $('.btn_2').click(function() {
        var price = parseInt($(this).attr('data-price'));
        var oldSum = parseInt($('#totalSum').text());
        $('#totalSum').text(oldSum + price);
        $('#totalSum2').text(oldSum + price);
        $('#totalSum3').text(oldSum + price);
        var quantity = parseInt($(this).attr('qnt'));
        var oldQuantity = parseInt($('#totalQuantity2').text());

        $('#totalQuantity2').text(oldQuantity + quantity);
    })

    $('.btn2_2').click(function() {
        var price = parseInt($(this).attr('data-price'));
        var oldSum = parseInt($('#totalSum').text());
        if (oldSum > 100) {
        $('#totalSum').text(oldSum - price);
        $('#totalSum2').text(oldSum - price);
        $('#totalSum3').text(oldSum - price);
        var quantity = parseInt($(this).attr('qnt2'));
        var oldQuantity = parseInt($('#totalQuantity2').text());
        
        $('#totalQuantity2').text(oldQuantity - quantity);
        }
    })


    $('#button_1').click(function(){
        $("#block_1").css("display", "none");
      });
    $('#button_2').click(function(){
        $("#block_2").css("display", "none");
      });
    $('#button_3').click(function(){
        $("#block_1").css("display", "none");
        $("#block_2").css("display", "none");
      });

      $('#add_2').click(function(){
          alert('ok')
      });

})

