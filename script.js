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

// function chineseZodiac(year){
//     if (year == 1984 || 1996 || 2008) {
//         return "You are the year of the rat!";
//     }
// }
function determineSign(month,day,year) {

    if((month==1 && day<=19)|| (month==12 && day>=22)){
        return " You are a Capricorn! " + "This is a great day to plan new projects. Your mind may be especially quick and "+
            "full of ideas. These could prove valuable. Write down ideas that you can't put to immediate use so you " +
            "won't forget them. Books, magazines, conversations, and the Internet may be rich sources of inspiration.";
    }
    if((month==1 && day>=20) || (month==2 && day<=18) ){
        return "You are an Aquarius! Your mind could be especially active today. Perhaps you'll discover a new talent " +
            "you didn't know you had, such as writing, drawing or speaking. Ideas for stories, sketches, or lectures " +
            "might come thick and fast. Write them down. Computers are particularly useful now. You might have to " +
            "execute some paperwork concerning money, but this should get accomplished quickly and easily. "

    }
    if((month==2 && day>=19)|| (month==3 && day<=20)){
        return " You are a Pisces! " +
            "Your intuition has been especially high for a while now. Today you could decide to " +
            "put it to practical use. You might consider a class or workshop that increases your ability to communicate." +
            " New friends who share this interest could appear on the scene. Whatever ideas or insights come your way" +
            " may originate from the higher planes. Write them down.";
    }
    if((month==3 && day>=21)|| (month==4 && day<=19)){
        return " You are an Aries!  Your mind should be especially quick and agile today, and your curiosity will be " +
            "piqued. Your pursuit of intellectual interests could lead to group activities where you meet others " +
            "interested in the same subjects. A lot of information could come your way. You'll enjoy discussing it. " +
            "New friendships and lines to other possible interests could come your way.";
    }
    if((month==4 && day<=20)|| (month==5 && day<=20)){
        return " You are a Taurus! You might have a few projects in mind that you'll want to work on today. Your mind is" +
            " especially quick and agile, and you have a lot of great ideas that can make your efforts turn out the way " +
            "you want. Conversations with those close to you may provide even more possibilities. Whatever you choose to " +
            "work on, you should be pleased with the results.";
    }
    if((month==5 && day>=21)|| (month==6 && day<=20)){
        return " You are a Gemini! Your mind may turn toward intellectual pursuits that you have been too busy to " +
            "investigate. Today your mind is so quick and your curiosity so high that you won't resist even if other " +
            "things interfere. Books, films, websites, or any information on your subject provide fodder for thought. " +
            "Conversations with friends also prove intriguing.";
    }
    if((month==6 && day>=21)|| (month==7 && day<=22)){
        return " You are a Cancer! Legal papers regarding money might need to be executed today. Your mind is especially" +
            " quick and agile, so you can take care of it efficiently, freeing you up for more enjoyable activities," +
            " such as getting together with friends or a partner. Discussions concerning science, psychology, " +
            "or the occult or metaphysical subjects could dominate your time.";
    }
    if((month==7 && day>=23)|| (month==8 && day<=22)){
        return " You are a Leo! A close friend or romantic partner might not seem communicative today and you might " +
            "wonder whether this person still cares for you. He or she is experiencing a few difficulties, perhaps " +
            "involving money, and so isn't particularly good company. Listen if your friend wants to talk, but otherwise"
            " just be there. That's what is important anyway.";
    }
    if((month==8 && day>=23)|| (month==9 && day<=22)){
        return " You are a Virgo! Do you have a garden or some houseplants that seem a little droopy? Don't worry about " +
            "whether or not they're all going to die. Revive them! You might feel that some things are more trouble than" +
            " they're worth. Give yourself space to be gloomy for a while and then perk yourself up. Buy yourself a " +
            "present"

    }
    if((month==9 && day>=23)|| (month==10 && day<=22)){
        return " You are a Libra! Today close friends, a love partner, or children may appear to be in a quiet, " +
            "melancholy mood. You might wonder if you've done something to cause it, but it probably has very little " +
            "to do with you, if anything. Responsibilities could be weighing on everyone, including you. " +
            "The only answer is to pitch in and take care of business. Then treat yourselves afterward!";
    }
    if((month==10 && day>=23)|| (month==11 && day<=21)){
        return " You are a Scorpio! Home responsibilities may increase markedly today, leaving you feeling like you're " +
            "the only member of the household getting anything done. You might give in to gloom, but don't dwell on it " +
            "for too long. You will feel a lot better if you pitch in and take care of whatever needs to be done and " +
            "then treat yourself by going out to celebrate. Go to a movie, or better yet, a concert.";
    }
    if((month==11 && day>=22)|| (month==12 && day<=21)){
        return " You are a Sagittarius! You may be about to change jobs or move up the ranks. It's not the corner office" +
            " you have your heart set on, it's the salary that goes along with it. Give your ambition free rein as long" +
            " as you have an emotional handle on it. It may be your communication, or lack thereof, that sets others " +
            "against you. Keep everything smooth by being clear and concise with your words.";
    }
}

function determineImage(sign){

}