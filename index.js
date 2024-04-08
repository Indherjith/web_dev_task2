

let images = [{"imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/colour-atlas-black?$TT-614-400-D$&fit=crop&fmt=webp","heading":"Atlas Black Color","content":"Bold, beautiful, gorgeous. <br> These are only some of the compliments your <br> #Dark’s Atlas Black colour will attract."},
{ "imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/alloy-wheel-1?$TT-614-400-D$&fit=crop&fmt=webp","heading":"R16 #Dark theme alloy wheels","content":"Style meets performance on these elegantly designed wheels that let the good times roll on."},
{ "imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/1381-nexon-mce-dark-sunroof-f1-rgb?$TT-614-400-D$&fit=crop&fmt=webp","heading":"Voice Assisted Electric Sunroof","content":"Soak in all the attention as you open the sunroof with your choice of words."},
{ "imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/dark-mascot?$TT-614-400-D$&fit=crop&fmt=webp", "heading":"Mascot","content":"Flaunt your allegiance proudly with the #Dark mascot.  "},
{ "imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/rear-12?$TT-614-400-D$&fit=crop&fmt=webp", "heading":"X-Factor Taillamp with Welcome And Goodbye Function","content":"Grab all the attention as you light up the way while also being greeted with a special light sequence at the beginning and end of every drive."}]
var index =-1;


const showTimer = (show) =>{
    let box = document.getElementById("box_exterior");
    box.innerHTML = "";
    box.style.transition = "all 1s ease-in-out";

    let image = document.createElement("img");
    image.src = images[index].imgsrc;
    let content = document.createElement("div");
    content.style.padding = "3vh";
    let head = document.createElement("h1"); 
    head.className = "heads";
    head.style.fontSize = "2vhw"; 

    let para = document.createElement("p");
    para.className = "para";
    para.style.fontSize = "1.5vhw";

    let btns = document.createElement("div");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");

    btn1.innerText = "<< Previous";
    btn2.innerText = "Next >>";

    btn1.style.fontSize="2vhw";
    btn1.style.background = "transparent";
    btn1.style.border="none";
    btn1.style.color = "white";
    btn2.style.fontSize="2vhw";
    btn2.style.background = "transparent";
    btn2.style.border="none";
    btn2.style.color = "white";
    btn1.style.marginRight="1vhw"

    let outoff = document.createElement("p");
    outoff.style.fontSize = "1vhw";
    outoff.style.display = "inline-block";
    outoff.innerHTML = `${show} / 5 `;

    btns.style.display = "flex";
    btns.style.justifyContent = "space-evenly";
    btns.style.marginBottom = "1vw"; 
    btns.style.marginTop = "1vw"; 
    btns.style.alignItems = "center";

    btns.append(btn1, outoff ,btn2);
    btn1.addEventListener("click",prev);
    btn2.addEventListener("click",next);


   

    head.innerHTML = images[index].heading;
    para.innerHTML = images[index].content;
    content.append(head,para,btns);
    box.append(image,content);
}

const next = () => {
    index+=1;
    if(index == 5){
        index = 0
    }   
    showTimer(index+1)
}


const prev = () => {
    index-=1;
    if(index == -1){
        index = 4
    }   
    showTimer(index+1)
}

next();

const interiorData = [
    {
        "imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/blackstone-matrix-dashboard-4?$TT-614-400-D$&fit=crop&fmt=webp", 
        "heading":"#DARK Themed Interior Dashboard",
        "content":"A dashboard that adds a touch of elegance to the interiors and make them a delight to behold."
    },
    {
        "imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/next-gen-capacitive-touch-panel-1?$TT-614-400-D$&fit=crop&fmt=webp", 
        "heading":"Next Gen Capacitive Touch Panel",
        "content":"A state-of-the-art panel that lets you access all the car’s controls in one place."
    },
    {
        "imgsrc":"https://s7ap1.scene7.com/is/image/tatamotors/benecke-kaliko-blackstone-leather?$TT-614-400-D$&fit=crop&fmt=webp", 
        "heading":"PREMIUM BENECKE KALIKO™ VENTILATED LEATHERTTE SEATS",
        "content":"Embark on every  drive with seats that are comfortable and stitched to perfection."
    }
];


var iindex =-1;


const ishowTimer = (ishow) =>{
    let ibox = document.getElementById("box_interior");
    ibox.innerHTML = "";
    ibox.style.transition = "all 1s ease-in-out";


    let iimage = document.createElement("img");
    iimage.src = interiorData[iindex].imgsrc;
    let icontent = document.createElement("div");
    icontent.style.padding = "3vh";
    let ihead = document.createElement("h1"); 
    ihead.className = "heads";
    ihead.style.fontSize = "2vhw"; 

    let ipara = document.createElement("p");
    ipara.className = "para";
    ipara.style.fontSize = "1.5vhw";

    let ibtns = document.createElement("div");
    let ibtn1 = document.createElement("button");
    let ibtn2 = document.createElement("button");

    ibtn1.innerText = "<< Previous";
    ibtn2.innerText = "Next >>";

    ibtn1.style.fontSize="2vhw";
    ibtn1.style.background = "transparent";
    ibtn1.style.border="none";
    ibtn1.style.color = "white";
    ibtn2.style.fontSize="2vhw";
    ibtn2.style.background = "transparent";
    ibtn2.style.border="none";
    ibtn2.style.color = "white";
    ibtn1.style.marginRight="1vhw"

    let ioutoff = document.createElement("p");
    ioutoff.style.fontSize = "1vhw";
    ioutoff.style.display = "inline-block";
    ioutoff.innerHTML = `${ishow} / 3 `;

    ibtns.style.display = "flex";
    ibtns.style.justifyContent = "space-evenly";
    ibtns.style.marginBottom = "1vw"; 
    ibtns.style.marginTop = "1vw"; 
    ibtns.style.alignItems = "center";

    ibtns.append(ibtn1, ioutoff ,ibtn2);
    ibtn1.addEventListener("click",iprev);
    ibtn2.addEventListener("click",inext);


   

    ihead.innerHTML = interiorData[iindex].heading;
    ipara.innerHTML = interiorData[iindex].content;
    icontent.append(ihead,ipara,ibtns);
    ibox.append(icontent,iimage);
    
}

const inext = () => {
    iindex+=1;
    if(iindex == 3){
        iindex = 0
    }   
    ishowTimer(iindex+1)
}


const iprev = () => {
    iindex-=1;
    if(iindex == -1){
        iindex = 2
    }   
    ishowTimer(iindex+1)
}

inext();


var iindex2 =-1;

const ishowTimer2 = (ishow) =>{

    let ibox2 = document.getElementById("reverse");
    ibox2.innerHTML = "";
    ibox2.style.transition = "all 1s ease-in-out";

    let iimage = document.createElement("img");
    iimage.src = interiorData[iindex2].imgsrc;
    let icontent = document.createElement("div");
    icontent.style.padding = "3vh";
    let ihead = document.createElement("h1"); 
    ihead.className = "heads";
    ihead.style.fontSize = "2vhw"; 

    let ipara = document.createElement("p");
    ipara.className = "para";
    ipara.style.fontSize = "1.5vhw";

    let ibtns = document.createElement("div");
    let ibtn1 = document.createElement("button");
    let ibtn2 = document.createElement("button");

    ibtn1.innerText = "<< Previous";
    ibtn2.innerText = "Next >>";

    ibtn1.style.fontSize="2vhw";
    ibtn1.style.background = "transparent";
    ibtn1.style.border="none";
    ibtn1.style.color = "white";
    ibtn2.style.fontSize="2vhw";
    ibtn2.style.background = "transparent";
    ibtn2.style.border="none";
    ibtn2.style.color = "white";
    ibtn1.style.marginRight="1vhw"

    let ioutoff = document.createElement("p");
    ioutoff.style.fontSize = "1vhw";
    ioutoff.style.display = "inline-block";
    ioutoff.innerHTML = `${ishow} / 3 `;

    ibtns.style.display = "flex";
    ibtns.style.justifyContent = "space-evenly";
    ibtns.style.marginBottom = "1vw"; 
    ibtns.style.marginTop = "1vw"; 
    ibtns.style.alignItems = "center";

    ibtns.append(ibtn1, ioutoff ,ibtn2);
    ibtn1.addEventListener("click",iprev2);
    ibtn2.addEventListener("click",inext2);


   

    ihead.innerHTML = interiorData[iindex2].heading;
    ipara.innerHTML = interiorData[iindex2].content;
    icontent.append(ihead,ipara,ibtns);
    ibox2.append(iimage,icontent);
    
}



const inext2 = () => {
    iindex2+=1;
    if(iindex2 == 3){
        iindex2 = 0
    }   
    ishowTimer2(iindex2+1)
}


const iprev2 = () => {
    iindex2-=1;
    if(iindex2 == -1){
        iindex2 = 2
    }   
    ishowTimer2(iindex2+1)
}

inext2();
