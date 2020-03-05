// This is a constructor representing total basic needs capital
function Fund(rent,food,transport,insurance,emergency,total){
    this.rent=rent;
    this.food=food;
    this.transport=transport;
    this.insurance=insurance;
    this.emergency=emergency;
    this.total=total;
    this.remAmount=[];
}

function Other(item, value){
    this.item = item;
    this.value = value;
}

var itemsArray = [];
// Assign  all the figure to  zero and  make them global variables
var total=0;
var insurance=0;
var rent=0;
var food=0;
var emergency=0;
var transport=0;
var remAmount=[total];
var user;

$(document).ready(function(){
    // If by any chance the user inputs characters instead of integers/numbers 
    $(".form-control, #new-rent, #new-food, #new-transport, #new-insurance, #new-emergency").keypress(function(e){
        if((e.which !=8 || e.which!=0) && (e.which <48 || e.which>57)){
            $('.no-input').show().slideToggle('slow');        
            return false;
        }
        // on keypress the amount of money will reduce with inputs
        remAmount=total-rent-food-transport-insurance-emergency;
        $('.bal').html(remAmount);
       
    });

    $('.submit').click(function(event){
        event.preventDefault();
        total=Number($('#total-amount').val());
        rent=Number($('#new-rent').val());
        food=Number($('#new-food').val());
        transport=Number($('#new-transport').val());
        insurance=Number($('#new-insurance').val());
        emergency=Number($('#new-emergency').val());

        user= new Fund(rent,food,transport,insurance,emergency,total);

        remAmount=total-rent-food-transport-insurance-emergency;
        user.remAmount.push(remAmount);
        $('.bal').html(remAmount);

        if(remAmount<0){
            alert("Sorry! Your out of money");
            $('.bal').html(0);
            return false;
        }
    });
    



        $("#new-amount").keypress(function (e) {

        if (e.keyCode != 8 && e.keyCode != 0 && (e.keyCode < 48 || e.keyCode > 57)) {
        $("#errmsg").html("Digits Only").show().fadeOut(3000);
        return false;
        }

        });




            $('.btn').click(function(event){
                event.preventDefault();


                var income = $('#total-amount').val();
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
                inputs.item = $("#error").html("Amount more than balance").show().fadeOut(3000);
                inputs.value = 0;
                itemsArray.pop(inputs);
                balance = income - addValues();
                } else {
                    $('.bal').text(balance);
                    $('tbody').append( '<tr>'+
                                    `<td >${inputs.item}</td>`+
                                    `<td >${inputs.value}</td>`+
                                    ' </tr>');
                }


                
                $("#new-description").val('')
                $("#new-amount").val('')
                $('#total').html(addValues());

                

                


                $('.bal').text(balance);

            




                


                console.log(income);
                console.log(balance);
                console.log(addValues());

                console.log(itemsArray);


            });



});
