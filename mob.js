var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","amoled","4g"],
    [1001,"samsung","samsung a51",32000,"snapdragon","amoled","5g"],
    [1002,"redmi","note 10 pro",19000,"snapdragon","led","4g"],
    [1003,"redmi","mi 11 lite",30000,"mediatek","led","4g"],
    [1004,"apple","12 pro",72000,"snapdragon","amoled","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","amoled","5g"],
    [1006,"oneplus","nord 2",29000,"snapdragon","amoled","4g"],
    [1007,"oneplus","nord 2",15000,"mediatek","led","4g"],

]
//costly mob
//  mobiles.sort((m1,m2)=>m2[3]-m1[3])
//     console.log(mobiles[0]);

//mob which have snapdragon proceesor
//print costly mob withsnap drgon in 5g band

// var cost5g=[]
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon" && mob[6]=="5g"){
//        // console.log(mob[1]);
//         cost5g.push(mob)
//     }
// }
// cost5g.sort((m1,m2)=>m2[3]-m1[3])
// // console.log(cost5g[0]);
  
// //is there any mob price below rs 10k
// for(let mob of mobiles)
// if(mob[3]>10000){
    
// }

// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);
//var mob_pr=mobiles.map(mob=>mob[3])
//console.log(mob_pr);
//var ss=mobiles.filter(mob=>mob[1]=="samsung")
//console.log(ss);

// print available mobiles under 25k
//var price=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
//console.log(price);


// print available mobiles in the range of 25k to 35k 

var price=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=35000) 
//console.log(price);


//list all 5g mobiles available  
var price=mobiles.filter(mob=>mob[6]=="5g")
//console.log(price);

//q3 
var price=mobiles.filter(mob=>mob[1]=="samsung" && mob[6]=="4g" && mob[5]=="amoled")
//console.log(price);


//reduce
var costly_mob=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2)
// console.log(costly_mob);

var low_mob=mobiles.reduceRight((m1,m2)=>m1[3]<m2[3]?m1:m2)
// console.log(low_mob[2]);

//some
var isaval=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
//console.log(isaval);

var isaval=mobiles.some(mob=>mob[3]<=10000)
//console.log(isaval);

var redmifind=mobiles.find(mob=>mob[1]=="redmi")
//console.log(redmifind);
var redmifind=mobiles.find(mob=>mob[0]==1000)
//console.log(redmifind);
