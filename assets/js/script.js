var today = moment().format('LLL')
var now = moment().format('h a');
console.log(now);

var workHours = [6,7,8,9,10,11,12,1,2,3,4,5,6]


$(document).ready(function(){
    $('#currentDay').text(today);
    
});

function createSchedule(){
    for(var i = 0; i < workHours.length; i++){
    var inptGrp = $('<div>').addClass('input-group time-block');
    var inptGrpPrend = $('<div>').addClass('input-group-prepend');
    var spanEL =$('<span>').addClass('input-group-text hour').text("hello world");
    var agendaItem = $('<input>').attr({'data-time': 0, 'type': 'text'}).addClass('form-control description time-block');
    var inptGrpAppend = $('<div>').addClass("input-group-append");
    var saveBtn = $('<button>').addClass('saveBtn').html('Save');
 inptGrp.append(inptGrpPrend);
 inptGrpPrend.html(spanEL);
 inptGrp.append(agendaItem);
inptGrpAppend.append(saveBtn);
inptGrp.append(inptGrpAppend);

$('.container').append(inptGrp);
    };


};
createSchedule();
