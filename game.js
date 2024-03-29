let computerchoice="";
let ans;
function result(user,computer){
    if(user===computer){
        let newvalueans=localStorage.getItem("tie");
        newvalueans++;
        localStorage.setItem("tie",newvalueans)
        ans="Match Tie";
    }
    else if (user=="Bat"){
        if(computer=="Boll"){
            let newvalueans=localStorage.getItem("user");
            newvalueans++;
            localStorage.setItem("user",newvalueans)
            ans="user won";
        }
        else{
            let newvalueans=localStorage.getItem("computer");
            newvalueans++;
            localStorage.setItem("computer",newvalueans)
            console.log(localStorage.getItem("computer"))
            ans="computer won"
        }
    }
    else if (user=="Boll"){
        if(computer=="Bat"){
            let newvalueans=localStorage.getItem("computer");
            newvalueans++;
            localStorage.setItem("computer",newvalueans)
            console.log(localStorage.getItem("computer"))
            ans="computer won";
        }
        else{
            let newvalueans=localStorage.getItem("user");
            newvalueans++;
            localStorage.setItem("user",newvalueans)
            console.log(localStorage.getItem("user"))
            ans="user won";
        }
    }
    else{
        if(computer=="Bat"){
            let newvalueans=localStorage.getItem("user");
            newvalueans++;
            localStorage.setItem("user",newvalueans)
            console.log(localStorage.getItem("user"))
            ans="user won"
        }
        else{
            let newvalueans=localStorage.getItem("computer");
            newvalueans++;
            localStorage.setItem("computer",newvalueans)
            console.log(localStorage.getItem("computer"));
            ans="computer won"}
    }
    document.querySelector("#display1").value=ans;
    // document.querySelector(".final").innerText=`won: ${localStorage.getItem("user")} lost: ${localStorage.getItem("computer")} tie: ${localStorage.getItem("tie")}`
    finaltresult()
}
function computer(argument){
    let choice=Math.random()*3;
    if(choice>=0 & choice<1){
        computerchoice="Bat";
    }
    else if(choice>=1 & choice<2){
        computerchoice="Boll";
    }
    else{
        computerchoice="Stump";
    }
    let  show=`Your choice is ${argument} and computer choice is ${computerchoice}`;
    document.querySelector("#display").value=show;
    result(argument,computerchoice)
    
    
}
function reset(){
    localStorage.setItem("user",0);
    localStorage.setItem("computer",0);
    localStorage.setItem("tie",0);
    // document.querySelector(".final").innerText=`won: ${localStorage.getItem("user")} lost: ${localStorage.getItem("computer")} tie: ${localStorage.getItem("tie")}`
    finaltresult()

}
function finaltresult(){let won=document.querySelector("#won");
won.innerText=`won:  ${localStorage.getItem("user")}`;
let lost=document.querySelector("#lost");
lost.innerText=`lost:  ${localStorage.getItem("computer")}`;
let tie=document.querySelector("#tie");
tie.innerText=`tie:  ${localStorage.getItem("tie")}`;}


