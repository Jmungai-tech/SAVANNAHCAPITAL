// This is a constructor representing total basic needs capital

function Fund(rent,food,transport,insurance,emergency,total){
    this.rent=rent;
    this.food=food;
    this.transport=transport;
    this.insurance=insurance;
    this.emergency=emergency;
    this.total=total;
    // this.remAmount=[];
}

// THis is a consturctor representing other item inputs 
function Other(item, value){
    this.item = item;
    this.value = value;
}

function addValues(){
    var itemsTotal = 0;
    for (var i in itemsArray){
        itemsTotal += itemsArray[i].value;
    };
    return itemsTotal;
}


var itemsArray = [];

// Assign  all the figure to  zero and  make them global variables


var total;
var insurance;
var rent = 0;
var food;
var emergency;
var transport = 0;
var remAmount;
var user;
var balance = total;

$('.postIncome').click(function(){
    $('.bal').append(total);
});

$(document).ready(function(){


    
    $("#earnings, #new-rent, #new-food, #new-transport, #new-insurance, #new-emergency").keypress(function(e){
        if((e.which !=8 || e.which!=0) && (e.which <48 || e.which>57)){
            // $('.no-input').show().fadeToggle(3000); 
            $(".no-input").html("PLEASE INPUT AMOUNT!").show().fadeOut(3000);       
            return false;
        }
       
    });





    $('.submit').click(function(event){
        event.preventDefault();
        total=Number($('#earnings').val());
        // var sumTotal =Number($('.bal').val());
         rent=Number($('#new-rent').val());
         food=Number($('#new-food').val());
         transport=Number($('#new-transport').val());
         insurance=Number($('#new-insurance').val());
         emergency=Number($('#new-emergency').val());

         remAmount=rent + food + transport + insurance + emergency;


        $('#tableRent').append(rent);
        $('#tableFood').append(food);
        $('#tableTransport').append(transport);
        $('#tableInsurance').append(insurance);
        $('#tableEmergency').append(emergency);
        $('#tableTotal').append(remAmount);
        var sumTotal;
        sumTotal = total - remAmount-addValues();
                 $('.bal').text(sumTotal);

        var remTotal=remAmount+addValues();
        var arrayTotal=[remTotal];


        arrayTotal.push(remTotal);


        if(remAmount + addValues() > total){

            arrayTotal.pop(remTotal);
             $('.bal').html(sumTotal-remAmount);
            return false;
        }







            // $("#new-amount").keypress(function (e) {

            $("#new-amount").keypress(function (e) {

            if (e.keyCode != 8 && e.keyCode != 0 && (e.keyCode < 48 || e.keyCode > 57)) {
            $("#error").html("Digits Only").show().fadeOut(3000);
            return false;
            }
            });






                    var income = sumTotal; 
                    // $('.bal').val();
                    var inpuitItem = $('#new-description').val();
                    var inputValue = Number($('#new-amount').val());
                    var inputs = new Other(inpuitItem, inputValue);

                    $('.btn1').click(function(event){
                          event.preventDefault();

                    function addValues(){
                        var itemsTotal = 0;
                        for (var i in itemsArray){
                            itemsTotal += itemsArray[i].value;
                        };
                        return itemsTotal;
                    }


                    var income = sumTotal; 
                    // $('.bal').val();
                    var inpuitItem = $('#new-description').val();
                    var inputValue = Number($('#new-amount').val());
                    var inputs = new Other(inpuitItem, inputValue);

                    itemsArray.push(inputs);



                    if( inputs.item === "" || inputs.value === 0 ||  ( inputs.item === "" && inputs.value === 0 ) ){
                        itemsArray.pop(inputs);
                        return false;
                    };


                    if( inputs.item === "" || inputs.value === 0 ||  ( inputs.item === "" && inputs.value === 0 ) ){
                        itemsArray.pop(inputs);
                        return false;
                    };



                   


                    




                
                    if ( remAmount + addValues() > total ) {
                    inputs.item = $("#error").html("Amount more than balance").show().fadeToggle(3000);

                    itemsArray.pop(inputs);

                    // balance = income - addValues();
                    } else {
                        $("#error").hide();
                        $('.bal').text(sumTotal);
                        $('tbody').append( '<tr>'+
                                        `<td >${inputs.item}</td>`+
                                        `<td >${inputs.value}</td>`+
                                        ' </tr>');
                                        
                    }



                    $("#new-description").val('')
                    $("#new-amount").val('')
                    $('#total').html(addValues());

                    

                    

                    var sumTotal = total - remAmount - addValues();
                    $('.bal').text(sumTotal);

                    var sumTotal = total - remAmount - addValues();
                    $('.bal').text(sumTotal);

                



                    


                   

                });

     });


});
