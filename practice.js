//when I type something in the input box store it in a variable and print the inner html of the variable by creating a new div below
// let taskId=0;



// function add(){
//     const input_data=document.querySelector("input");
//     const value=input_data.value;
//     //creating a new div element:

//     const id="task-"+ taskId++;

//     const new_div=document.createElement("div");
//     new_div.setAttribute("id",id);

//     new_div.innerHTML=new_div.innerHTML = `• ${value} <button onclick="delete_individual_by_id('${id}')">❌</button>`;
//     document.body.appendChild(new_div);
// }



// function delete_individual_by_id(id){
//     //now I want to delete the div I created(new_div)
//     const element=document.getElementById(id);
//     element.remove();
//     }








// let todos=[];
// function add(){
//     todos.push(
//          document.querySelector("input").value
//     )
//     render()
// }


// function render(){
//     document.querySelector("#todoDisplay").innerHTML="" //clears once so that everything is not repeated and only prints once
//     for(let i=0;i<todos.length;i++){
//         const todo=todos[i]; //defining the variable
//         const div=document.createElement("div"); //creating the div element which contains the appended task (h3) and the delete button
//             const h3=document.createElement("h3");  //the todo task is shown here
//             const button=document.createElement("button") //creating the delete button
//             button.innerHTML="Delete this shit"
//             h3.innerHTML=todos[i];
//         div.append(h3);
//         div.append(button);
//         document.querySelector("#todoDisplay").appendChild(div)
//     }
// }



// function deleteLastTodo(){
//     todos.splice(todos.length-1,1);
//     render()
// }

// console.log("hello");


// import chalk from 'chalk'; //modern javascript(.mjs) imports syntax, promises
// console.log(chalk.blue("Hello world!"))
// console.log(chalk.red.bold("This is an error mesage!"));
// console.log(chalk.green.underline("This is a success message!"));

// console.log("Hi");

// const express= require("express");

// const app=express();

// function sum(n){
//     let ans=0;
//     for(let i=1; i<=n ; i++){
//         ans+=i;
//     }
//     return ans;
// }

// // app.get("/", function(req, res){
// //     const n= req.query.n;
// //     const ans=sum(n)
// //     res.send(`your sum is ${ans}`);
// // })

// app.listen(3000);


//do get, put, post and delete tasks with the user database
// const express=require("express");
// const app=express();
// let users= [{
//     name:"John",
//     kidneys:[{isHealthy:false},{isHealthy:true}]
// }]
// app.use(express.json());
// app.get("/", function(req,res){
//     //write logic here which gets and tells how many kidneys of john are healthy and how many are unhealthy
//     const johnkikidneys=users[0].kidneys;
//     const numberofkidneys=johnkikidneys.length;
//     const numberofhealthykidneys=users[0].kidneys.filter(((kidney)=> kidney.isHealthy))
//     const healthykidneyslength=numberofhealthykidneys.length;
//     res.json({
//         johnkikidneys,
//         numberofkidneys,
//         healthykidneyslength,

//     })
// })

// app.post("/", function(req,res){
//     const isHealthy =req.body.isHealthy;
//     users[0].kidneys.push({isHealthy:isHealthy})

//     res.json({
//         msg: "Done!"
//     })

// })


// app.put("/", function(req, res){
//     for(let i=0; i<users[0].kidneys.length;i++){
//         users[0].kidneys[i].isHealthy=true;
//     }

//     res.json({
//         msg:"put function done!"
//     })
// })

// app.delete("/", function(req, res){
//     const newarraycontaininghealthykidneys=[];
//     for(let i=0;i<users[0].kidneys.length;i++){
//         if(users[0].kidneys[i].isHealthy){
//             newarraycontaininghealthykidneys.push({isHealthy: true})
//         }
//     }
//     users[0].kidneys=newarraycontaininghealthykidneys

//     res.json({
//         msg: "Yes the unhealthy kidneys are now removed"
//     })
// })


// app.listen(3000);


// const amaanKiArray=[1,2,3,4,5,6,4,4,5,5,5];
// let filteredArray=[]
// amaanKiArray.forEach((nums)=>{
//     if(nums>=4){
//         filteredArray.push(nums)
//     }
// })
// console.log(filteredArray);



// const userbooks= books.filter((things)=>(things.genre==="HIstory"))
//

// const amaanKiArray=[1,2,3,4,5,6];
// //Suppose I want to increase all elements by 10:
// const increasedArray=amaanKiArray.map((nums)=>(nums+10))  
// console.log(increasedArray);



// //the for loop equivalent would be:
// increasedArrayusingForEach=[] //first you'll have to define an empty array, so that you can later push into it
// amaanKiArray.forEach((nums)=>{
//     nums=nums+10
//     increasedArrayusingForEach.push(nums);
// })
// console.log(increasedArrayusingForEach);


// const myNumbers=[1,2,3,4,5,6,7];
// const newNums= myNumbers.map((num)=>(num*10)).map((num)=>(num+1))
// //this👆 was for when I wanted the array elements multiplied by 10 
// //and also increased by a value
// //we could have done this in a single map algorithm((num*10)+1) also but for showing it CAN be done I did here















// title.style.backgroundColor= 'green';
// secondtitle.style.backgroundColor="blue";
// title.style.padding= "15px";
// title.style.borderRadius= "12px";

// document.getElementById("title").setAttribute("class","test")
// const secondWala=document.querySelector("#secondtitle")
// secondWala.style.backgroundColor= "green";
// secondWala.style.padding="40px";

// const parent=document.querySelector(".parent")
// console.log(parent.children)
// const children=Array.from(parent.children)
// console.log(children);
// children.forEach((nums)=>{
//     console.log(nums.innerHTML);
// })

// const div=document.createElement('div');
// console.log(div);
// div.className="classNamestute"
// div.id="idName"

// to access language class and append new li tags in it
// function appender(languageName){
//     //access the language class in the ul
//     const unorderedList=document.querySelector(".language");
//     //create a list element and append it in unorderedlist
//     const newlist=document.createElement("li")
//     newlist.innerHTML= languageName;
//     //attaching this thing inside the unorderedlist, in the language class basically
//     unorderedList.appendChild(newlist)
// }   
// appender("typescript")
// appender("python")
// appender("ruby on rails")
// appender("brocode is gay")


// const secondLanguage=document.querySelector("li:nth-child(2)")
// // secondLanguage.innerHTML="Amaan"
// const newSecond=document.createElement("li");
// newSecond.textContent="Amaan"
// secondLanguage.replaceWith(newSecond)


// secondLanguage.rep





// document.querySelector("#amaankabutton").addEventListener("click", function(){console.log("ma chudao")})



//evenets to learn about:
//types, timsestamp, defaultPrevented(isse we can change or stop the default behavious 
//of any thing like anchor tags etc etc), target, srcElement, currentTarget, clienX, clientY
//altkey, ctrlkey, shiftkey, keycodes for each key





//event propagation:
    //two types:event bubbling and event capturing
//we have an unordered list, suppose when we click the parent thing(here's the list thing), it logs out (say), "You clicked the parent"


//and when I click any of the child containers(say b), it prints out "You clicked the child"


//but what if both get activated at the same time, like if i am clicking the child it also means
//that I am clicking the parent asw,  (child is basicallly subset of parent)
//and that means both messages will log out
//but who gets logged out first? Default case => Child gets logged out then parent(chote se bada)
//but we can also control the flow, we can make it reverse, that first log out parent then child, or log out only parent and not chidl, etc
// document.querySelector(".parent").addEventListener("click",function(){console.log("You clicked the parent")})
// document.querySelector("#bElement").addEventListener("click",function(){console.log("You clicked the child")})

//actually it is like this:
// document.querySelector(".parent").addEventListener("click",function(){console.log("You clicked the parent")},false)
// document.querySelector("#bElement").addEventListener("click",function(){console.log("You clicked the child")},false)



//if you want the parent to log out first, then just add true instead of false:
// document.querySelector(".parent").addEventListener("click",function(){console.log("You clicked the parent")},false)
// document.querySelector("#bElement").addEventListener("click",function(e){
//     console.log("You clicked the child")
//     e.stopPropagation();
// },false)



//  document.querySelector(".parent").addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         e.target.remove();
//     }
//  }, false)




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


