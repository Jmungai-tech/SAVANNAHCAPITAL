




function Other(item, value){
    this.item = item;
    this.value = value;
}

var itemsArray = [];

$(function(){

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