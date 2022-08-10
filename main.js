var lh = document.querySelector(".longhand");
var l = document.querySelector(".lines");
var sh = document.querySelector(".shorthand");
var set = 0;
for(let i = 1; i<=5; i++){
    set = set + 30;
    var nextlh = document.createElement("div");
    // console.log(nextlh);
    nextlh.setAttribute("class","longhand");
    // console.log(nextlh);
    nextlh.innerHTML = lh.innerHTML;
    nextlh.style.transform="rotate(" + set + "deg)";
    l.appendChild(nextlh);
    // console.log(nextlh);
}

var clear;
var min = 1;
for(let i = 1; i<=28; i++){
    min++; 
    clear = min*6;
    if(min % 5 != 0){
    var nextsh = document.createElement("div");
    
    nextsh.setAttribute("class","shorthand");
    // console.log(nextsh);
    nextsh.innerHTML = sh.innerHTML;

    nextsh.style.transform="rotate(" + clear + "deg)";
    l.appendChild(nextsh);
}
    
}

