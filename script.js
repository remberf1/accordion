var acc = document.getElementsByClassName("accordion");
for(var i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        for(var j = 0; j < acc.length; j++){
            if(acc[j] !== this){
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.classList.remove("show");
            }
        }
        // this.classList.toggle("active"); //unsure
        this.nextElementSibling.classList.toggle("show");
    })
}