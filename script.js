function onSubmit(){
   var month= document.getElementById("month").value;
   var day= document.getElementById("day").value;
   var sign= determineSign(month,day);
   document.getElementById("sign").innerHTML=sign;

}

function daysAvailable(month){
    document.getElementById("day").innerHTML="";
    document.getElementById("day").innerHTML += "<option value='0'>Select Day</option>";

    if(month==2){
        for(var i= 1; i<=29; i++){

            document.getElementById("day").innerHTML += "<option value=''" + i + "'>" +i + "</option>";
        }
    }

    if(month==1 || month== 3 || month==5 || month==7 || month== 8 || month==10 || month==12){
        for(var i= 1; i<=31; i++){
            document.getElementById("day").innerHTML += "<option value=''" + i + "'>" +i + "</option>";
        }
    }
    if(month==4 || month==6 || month==9 || month==11){
        for(var i=1; i<=30; i++){
            document.getElementById("day").innerHTML += "<option value=''" + i + "'>" +i + "</option>";
        }
    }
}

function determineSign(month,day) {
    if((month==1 && day<=19)|| (month==12 && day<=15)){
        return "Capricorn";
    }
    if((month==2 && day)){


    }





    //
    // }
    // if(month==2){
    //     if(day<=18){
    //         return "aquarius";
    //     }
    //     return "Pisces";
    // }
}



