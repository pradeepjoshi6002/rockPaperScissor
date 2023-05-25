let element=["rock","paper","scissor"];

function play(i){
    const img1=document.querySelector(".human");
    img1.src=element[i]+".png";
    const img=document.querySelector(".comp");
    let choice=Math.floor(Math.random()*3);
    img.src=element[choice]+".png";
    let scorec=document.querySelector(".score-c");
    let scoreh=document.querySelector(".score-h");
    if(i==0){
        if(choice==1){
            scorec.innerHTML++;
        }
        else if(choice==2){
            scoreh.innerHTML++;
        }
    }
    if(i==1){
        if(choice==0){
            scoreh.innerHTML++;
        }
        else if(choice==2){
            scorec.innerHTML++;
        }
    }
    if(i==2){
        if(choice==0){
            scorec.innerHTML++;
        }
        else if(choice==1){
            scoreh.innerHTML++;
        }
    }

}
