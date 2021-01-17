var now = moment().format('LLL')
console.log(now);

$(document).ready(function(){
    $('#currentDay').text(now);
    
});

function createSchedule(){
    var formGrp = $('<div>').addClass('form-group description');
    var inptGrp = $('<div>').addClass('input-group mb-3 time-block');
    var inptGrpPrend = $('<div>').addClass('input-group-prepend');
    var spanEL =$('<span>').addClass('input-group-text hour').text("hello world");
    // var agendaLbl =$('<div>').addClass('hour form-row').text("hello world");
    var agendaItem = $('<textarea>').attr("data-time", 0).addClass('form-control description time-block');
    var inptGrpAppend = $('<div>').addClass("input-group-append");
    var saveBtn = $('<button>').addClass('saveBtn').html('Save');
 inptGrp.append(inptGrpPrend);
 inptGrpPrend.html(spanEL);
 inptGrp.append(agendaItem);
inptGrpAppend.append(saveBtn);
inptGrp.append(inptGrpAppend);
formGrp.append(inptGrp);
$('.container').append(formGrp);


    // $('.container').append(agendaLbl).append(agendaItem).append(saveBtn);
    // $('.container').append(agendaLbl).append(agendaItem).append(saveBtn);
};
createSchedule();