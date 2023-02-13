const cookieButton=document.getElementById("cookieButton");
const cookieCounter=document.getElementById("cookieCounter");
const cPSInfo=document.getElementById("cPSInfo")

const upgradeButton1=document.getElementById("upBut1");
const upgradeCost1=document.getElementById("upCost1");
const upgradeLevel1=document.getElementById("upVal1");

const upgradeButton2=document.getElementById("upBut2");
const upgradeCost2=document.getElementById("upCost2");
const upgradeLevel2=document.getElementById("upVal2");


const upgradeButton3=document.getElementById("upBut3");
const upgradeCost3=document.getElementById("upCost3");
const upgradeLevel3=document.getElementById("upVal3");

const upgradeButton4=document.getElementById("upBut4");
const upgradeCost4=document.getElementById("upCost4");
const upgradeLevel4=document.getElementById("upVal4");

const upgradeButton5=document.getElementById("upBut5");
const upgradeCost5=document.getElementById("upCost5");
const upgradeLevel5=document.getElementById("upVal5");



let cookies=0;
let CPS=0;
let upgradeLevels=[0,0,0,0,0]
let upgradeCosts=[10,100,1000,5000,100000]
let upgradeButtons=[upgradeButton1,upgradeButton2,upgradeButton3,upgradeButton4,upgradeButton5];

const refreshUI = () => {
    for(i=0;i<5;i++){
        if(upgradeCosts[i]<=cookies){
            upgradeButtons.at(i).classList.add("clickable");
        }
        else upgradeButtons.at(i).classList.remove("clickable");
    }
    cookieCounter.innerText="Your cookies: " + cookies.toFixed(1);
    cPSInfo.innerText="Cookies per Second: " + CPS.toFixed(1)
    upgradeCost1.innerText="Cost: "+upgradeCosts[0];
    upgradeCost2.innerText="Cost: "+upgradeCosts[1];
    upgradeCost3.innerText="Cost: "+upgradeCosts[2];
    upgradeCost4.innerText="Cost: "+upgradeCosts[3];
    upgradeCost5.innerText="Cost: "+upgradeCosts[4];
    upgradeLevel1.innerText="Cursors: "+upgradeLevels[0];
    upgradeLevel2.innerText="Grannies: "+upgradeLevels[1];
    upgradeLevel3.innerText="Miners: "+upgradeLevels[2];
    upgradeLevel4.innerText="Factories: "+upgradeLevels[3];
    upgradeLevel5.innerText="Black Holes: "+upgradeLevels[4];
}


const scaleDown = (target) =>{
    target.style.scale=0.9;
    setTimeout(()=>target.style.scale=1,50);
}

function upgrade(n){
    if(upgradeCosts[n] > cookies){
        return;
    }
    cookies -= upgradeCosts[n];
    upgradeLevels[n]++;
    upgradeCosts[n]=Math.floor(upgradeCosts[n]*1.3);
    CPS = upgradeLevels[0]*0.1 + upgradeLevels[1] + upgradeLevels[2]*5 + upgradeLevels[3]*10 + upgradeLevels[4]*100;
    refreshUI();
}

//

window.setInterval(()=>{
    cookies += CPS;
    refreshUI();
},1000)



cookieButton.addEventListener("click", ()=>{
    cookies++;
    refreshUI();
    scaleDown(cookieButton);
})

for (let i=0;i<5;i++){
    upgradeButtons.at(i).addEventListener("click", ()=>{
        if(upgradeButtons.at(i).classList.contains("clickable")) {
            scaleDown(upgradeButtons.at(i));
        }
        upgrade(i);
    })
}

refreshUI();



