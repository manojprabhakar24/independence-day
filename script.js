var counter = 10
setInterval(function(){
    counter--
    if(counter>=0){
        id = document.getElementById("count");
        id.innerHTML = counter;
    }
    if(counter===0){
        id.innerHTML = "HAPPY INDEPENDENCE DAY !!!";

    }
    },1500);