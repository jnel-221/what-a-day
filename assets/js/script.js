//moment.js variables: attaching time, setting up color-assignment functionality
var today = moment().format('LLL')
var now = parseInt(moment().format('H'));
console.log(now);
var currentDate =  $('#currentDay');


// Global DOM elements for creating schedule:

var workHours = [6+" am",7+" am",8+" am",9+" am",10+" am",11+" am",12+" pm",1+" pm",2+" pm",3+" pm",4+" pm",5+" pm",6+" pm"]
var dataHours = [6,7,8,9,10,11,12,13,14,15,16,17,18]

//document on ready 
$(document).ready(function(){
   currentDate.text(today);
});


function createSchedule(arr){

 for(var i = 0; i < arr.length; i++){
    var inptGrpEl = $('<div class="input-group time-block">');
    var inptGrpPrend = $('<div class="input-group-prepend">');
    var spanEl =$('<span class="input-group-text hour">'); 
    var inptEl = $('<input class="form-control description time-block event" type="text">'); 
    var inptGrpAppend = $('<div class="input-group-append">');
    var saveBtnEl = $('<button class="saveBtn">').html('Save');

    var label = spanEl.text(workHours[i]);
    var inptAttr = inptEl.attr({'id': dataHours[i],'data-time': dataHours[i]});

    var dataInt = parseInt(inptAttr.attr('data-time'));
   
     inptGrpPrend.append(label);
     inptGrpAppend.append(saveBtnEl);
     inptGrpEl.append(inptGrpPrend, inptAttr, inptGrpAppend);
 
  $('.container').append(inptGrpEl);
 
   saveBtnEl.on("click", function(event){
     event.preventDefault();
     var apptTime = $(this).parent().siblings('.input-group-prepend').siblings().attr("data-time");
     var appt = $(this).parent().siblings('.input-group-prepend').siblings().val();
 
     localStorage.setItem(apptTime, appt);
   });
   assignColor(dataInt, inptAttr);
   retrieveAppts(inptAttr);
  };
  
};

function assignColor (dataInt, inptAttr) {

if (dataInt < now){
    inptAttr.addClass('past')
}else if(dataInt > now){
    inptAttr.addClass('future')
} else if(dataInt === now){
    inptAttr.addClass('present')
}
};

function retrieveAppts(inptAttr){
    // var test = inptAttr.val(localStorage.getItem(6));  
    // console.log(test);
  for (var j = 6; j <= 18; j++){
      console.log(j);
      $('#'+j).val(localStorage.getItem(j));

    };
};

createSchedule(workHours,dataHours);



