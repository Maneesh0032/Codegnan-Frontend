let name="Maneesh";
console.log(name);

//print name10 times
//looping satements

for(let i=0;i<10;i++){
    console.log(name);
}

// we dont write like for(i++,i<10,i=0) by changing the order of statements in for loop 
// beacuse the order of statements in for loop is fixed and 
// we have to follow that order only.
let add=function(a,b,c,d){
    return a+b+c+d

}

console.log(add(10,10,10,10));

let sub=function(a,b){
    return a-b
}

console.log(sub(10,5));

console.log(sub(add(10,10,10,10),5));

let wakeUp=function(time){
    console.log("Wake up at " + time);
}
let Freshup=function(){
    console.log("Fresh up");
}
let eatBreakfast=function(){
    console.log("Eat Breakfast");
}
let Study=function(){
    console.log("study hard");
}
let eatlunch=function(){
    console.log("Eat Lunch");
}
let play=function(){
    console.log("Play");
}
let eatdinner=function(){
    console.log("Eat Dinner");
}
let sleep=function(){
    console.log("Sleep");
}
let rahul=function(){
wakeUp();
Freshup();
eatBreakfast();
Study();
eatlunch();
play();
eatdinner();
sleep();
}

rahul();