
let colorData=[];
fetch("colornamesjsonversion.json")
    .then(res => res.json())
    .then(data => {
        colorData=data;




    pickNewColor.addEventListener("click",function(){
    const newColor=randomColorGenerator() 
    colorDisplayBox.style.backgroundColor=newColor;
})
    
    autoGenerate.addEventListener("click",function(){
    startChangingColor();
})

    stopGenerating.addEventListener("click", function(){
    stopChangingColor();
})


    }).catch(error=> console.error("Failed to load JSON:", error));


function getColorName(hexCode){
    hexCode =hexCode.toLowerCase();
    const match= colorData.find(c=> c.hex.toLowerCase() === hexCode);
    return match ? match.name : "Unknown";
}


const alphabetsAvailable="0123456789ABCDEF";
const pickNewColor=document.querySelector("#pickNewColor");
const colorDisplayBox=document.querySelector("#colorDisplayBox");


function randomColorGenerator(){
    // let color="#";
    // for(let i=0;i<6;i++){
    //     let randomIndex=Math.floor(Math.random()*16); 
    //     color+=alphabetsAvailable[randomIndex]; 
    // }
    const randomIndex=Math.floor(Math.random()* colorData.length);
    const picked=colorData[randomIndex];
    const color=picked.hex;
    const name= picked.name;
    //now i want the color code to display in the textInfo
    let colorCode=document.querySelector("#colorCode");
    // const name=getColorName(color);
    colorCode.innerHTML=`Color Code: ${color} | Name: ${name}`;
    console.log(color);
    return color;

}






const autoGenerate=document.querySelector("#autoGenerate");
const stopGenerating=document.querySelector("#stopGenerating");
let myInterval;


function startChangingColor(){
    //in intervals of 5 second, start generating random colors using setInterval()
    //write generate code, so generate function runs the randomColorGenerator every 5 seconds
    
    myInterval=setInterval(()=>{
        let newColor= randomColorGenerator();
        colorDisplayBox.style.backgroundColor=newColor;
    }, 1500);
    //this shit is updating the color codes, but not the background color?

}
function stopChangingColor(){
    //stop setInterval using clearInterval()
    clearInterval(myInterval);
}


