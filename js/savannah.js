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
    
});
