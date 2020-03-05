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



$(document).ready(function(){
    // If by any chance the user inputs characters instead of integers/numbers 


    
    $("#total-amount, #new-rent, #new-food, #new-transport, #new-insurance, #new-emergency, #new-amount").keypress(function(e){
        if((e.which !=8 || e.which!=0) && (e.which <48 || e.which>57)){
            $('.no-input').show().fadeToggle(3000);        
            return false;
        }
        // on keypress the amount of money will reduce with inputs
        // remAmount=total-rent-food-transport-insurance-emergency;
        
       
    });


    $('#postIncome').click(function(){
        $('.bal').append(total);
    });



    $('.submit').click(function(event){
        event.preventDefault();
        total=Number($('#total-amount').val());
        var sumTotal =Number($('.bal').val());
         rent=Number($('#new-rent').val());
         food=Number($('#new-food').val());
         transport=Number($('#new-transport').val());
         insurance=Number($('#new-insurance').val());
         emergency=Number($('#new-emergency').val());

         remAmount=rent + food + transport + insurance + emergency;


        //  var balance = earning - ();


        // user= new Fund(rent,food,transport,insurance,emergency,total);

        
        // user.remAmount.push(remAmount);
        

        // append each item amount
        $('#tableRent').append(rent);
        $('#tableFood').append(food);
        $('#tableTransport').append(transport);
        $('#tableInsurance').append(insurance);
        $('#tableEmergency').append(emergency);
        $('#tableTotal').append(remAmount);
        sumTotal = total - remAmount;
        $('.bal').html(sumTotal);

        if(remAmount<0){
            alert("Sorry! Your out of money");
            // $('.bal').html(0);
            return false;
        }



        itemsArray.push(inputs);
        var balance = income - addValues();




            $("#new-amount").keypress(function (e) {

            if (e.keyCode != 8 && e.keyCode != 0 && (e.keyCode < 48 || e.keyCode > 57)) {
            $("#errmsg").html("Digits Only").show().fadeOut(3000);
            return false;
            }

            // $('.bal').html(sumTotal);
            });




                $('.btn').click(function(event){
                    event.preventDefault();


                    var income = sumTotal; 
                    // $('.bal').val();
                    var inpuitItem = $('#new-description').val();
                    var inputValue = Number($('#new-amount').val());
                    var inputs = new Other(inpuitItem, inputValue);


                    function addValues(){
                        var itemsTotal = 0;
                        for (var i in itemsArray){
                            itemsTotal += itemsArray[i].value;
                        };
                        return itemsTotal;
                    }



                    itemsArray.push(inputs);
                    var balance = income - addValues();





                    if( inputs.item === "" || inputs.value === 0 ||  ( inputs.item === "" && inputs.value === 0 ) ){
                        itemsArray.pop(inputs);
                        return false;
                    };



                
                    if ( balance < 0 && addValues() > income ) {
                    inputs.item = $("#error").html("Amount more than balance").show().fadeIn(3000);
                    // inputs.value = 0;
                    itemsArray.pop(inputs);
                    balance = income - addValues();
                    } else {
                        $("#error").hide();
                        $('.bal').text(balance);
                        $('tbody').append( '<tr>'+
                                        `<td >${inputs.item}</td>`+
                                        `<td >${inputs.value}</td>`+
                                        ' </tr>');
                                        
                    }


                    // var subTotal = remAmount + addValues();
                    $("#new-description").val('')
                    $("#new-amount").val('')
                    $('#total').html(addValues());

                    

                    


                    var sumTotal = total - remAmount - addValues();
                    $('.bal').text(sumTotal);

                



                    


                    console.log(sumTotal);
                    // console.log(balance);
                    console.log(addValues());

                    console.log(itemsArray);


                });

     });


});
