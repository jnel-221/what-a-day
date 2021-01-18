var today = moment().format('LLL')
var now = moment().format('h a');
console.log(typeof now);

var workHours = [6+" am",7+" am",8+" am",9+" am",10+" am",11+" am",12+" pm",1+" pm",2+" pm",3+" pm",4+" pm",5+" pm",6+" pm"]


$(document).ready(function(){
    $('#currentDay').text(today);
    
});

function createSchedule(){
for(var i = 0; i < workHours.length; i++){
    var inptGrp = $('<div>').addClass('input-group time-block');
    var inptGrpPrend = $('<div>').addClass('input-group-prepend');
    var spanEL =$('<span>').addClass('input-group-text hour').text(workHours[i]);
    var agendaItem = $('<input>').attr({'data-time': workHours[i], 'type': 'text'}).addClass('form-control description time-block event');
    var inptGrpAppend = $('<div>').addClass("input-group-append");
    var saveBtn = $('<button>').addClass('saveBtn').html('Save');
 inptGrp.append(inptGrpPrend);
 inptGrpPrend.html(spanEL);
 inptGrp.append(agendaItem);
inptGrpAppend.append(saveBtn);
inptGrp.append(inptGrpAppend);

$('.container').append(inptGrp);

saveBtn.on("click", function(event){
    event.preventDefault();
   
var apptTime = $(this).parent().siblings('.input-group-prepend').siblings().attr("data-time");
var appt = $(this).parent().siblings('.input-group-prepend').siblings().val();;
    console.log(apptTime);
    console.log(appt);

    localStorage.setItem(apptTime, appt);
});


};



 };

createSchedule();
