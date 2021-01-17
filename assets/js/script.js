var now = moment().format('LLL')
console.log(now);

$(document).ready(function(){
    $('#currentDay').text(now);
    
});

