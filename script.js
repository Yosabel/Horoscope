function onSubmit(){
   var num= document.getElementById("month").value;
}

function daysAvailable(num){
    document.getElementById("day").innerHTML="";

    document.getElementById("day").innerHTML += "<option value='0'>Select Day</option>";

    if(num==2){
        for(var i= 1; i<=29; i++){

            document.getElementById("day").innerHTML += "<option value=''" + i + "'>" +i + "</option>";
        }
    }

    if(num==1 || num== 3 || num==5 || num==7 || num== 8 || num==10 || num==12){
        for(var i= 1; i<=31; i++){
            document.getElementById("day").innerHTML += "<option value=''" + i + "'>" +i + "</option>";
        }
    }
    if(num==4 || num==6 || num==9 || num==11){
        for(var i=1; i<=30; i++){
            document.getElementById("day").innerHTML += "<option value=''" + i + "'>" +i + "</option>";
        }
    }
}

if(month==1 && day==20

