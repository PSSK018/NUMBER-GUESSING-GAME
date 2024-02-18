function random(){
    low = 0;
    high = 100;
    var number = Math.floor(Math.random()*(101));
    if(number == 1){
        number = 0;
    }    
    console.log(number);
    return number;
}
ans = random();
let count = 0;
function result(){
    count=count+1;
    if(count>=10){
        alert("You ran out of chances");
        document.getElementById("ans").innerHTML="GAME OVER!";
        document.getElementById("ans").style.backgroundColor="light red";
        document.getElementById("startnew").style.display="block";
    }
    else{
        var num = document.getElementById("number").value;
        document.getElementById("predictions").innerHTML+=num+" ";
        if(num>ans){
            document.getElementById("ans").innerHTML="Wrong! Your guess is high!";
            document.getElementById("ans").style.backgroundColor="red";
            document.getElementById("ans").style.textAlign="center";
            document.getElementById("ans").style.width="250px";
        }
        else if(num<ans){
            document.getElementById("ans").innerHTML="Wrong! Your guess is low!";
            document.getElementById("ans").style.width="250px";
            document.getElementById("ans").style.textAlign="center";
            document.getElementById("ans").style.backgroundColor="red";
        }
        else{
            document.getElementById("ans").innerHTML="Booyah! you got it right."
            document.getElementById("ans").style.textAlign="center";
            document.getElementById("ans").style.backgroundColor="green";
            document.getElementById("ans").style.width="220px";
            document.getElementById("number").disabled="true";
            document.getElementById("startnew").style.display="block";

        }
    }

}