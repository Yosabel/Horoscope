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
    if((month==1 && day<=19)|| (month==12 && day>=22)){
        return " You are a Capricorn! This is a great day to plan new projects. Your mind may be especially quick and "+
            "full of ideas. These could prove valuable. Write down ideas that you can't put to immediate use so you " +
            "won't forget them. Books, magazines, conversations, and the Internet may be rich sources of inspiration.";
    }
    if((month==1 && day>=20) || (month==2 && day<=18) ){
        return "You are an Aquarius! "

    }
    if((month==2 && day>=19)|| (month==3 && day<=20)){
        return " You are a Pisces!";
    }
    if((month==3 && day>=21)|| (month==4 && day<=19)){
        return " You are an Aries!";
    }
    if((month==4 && day<=20)|| (month==5 && day<=20)){
        return " You are a Taurus!";
    }
    if((month==5 && day>=21)|| (month==6 && day<=20)){
        return " You are a Gemini!";
    }
    if((month==6 && day>=21)|| (month==7 && day<=22)){
        return " You are a Cancer!";
    }
    if((month==7 && day>=23)|| (month==8 && day<=22)){
        return " You are a Leo!";
    }
    if((month==8 && day>=23)|| (month==9 && day<=22)){
        return " You are a Virgo!";
    }
    if((month==9 && day>=23)|| (month==10 && day<=22)){
        return " You are a Libra!";
    }
    if((month==10 && day>=23)|| (month==11 && day<=21)){
        return " You are a Scorpio!";
    }
    if((month==11 && day>=22)|| (month==12 && day<=21)){
        return " You are a Sagittarius!";
    }
}

function determineImage(sign){

}