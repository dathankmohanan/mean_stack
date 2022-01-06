var c_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukki",1000,50,9500,9,6],

]
//high c cases
var high=c_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
//console.log(high);

//dis wid high 1 dos vax
var high1=c_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2[5])
//console.log(high1);
var greendis=c_data.filter(d=>d[5]==high1)
//console.log(greendis);
//dis wid low death case
var low=c_data.reduce((d1,d2)=>d1[2]<d2[2]?d1:d2)
//console.log(low);
 
 
// q4 sort district with +ve cases

var sortd=c_data.sort((d1,d2)=>d2[2]-d1[2])
//console.log(sortd);


// q5 sort the districts based on 1st dose
var sortd=c_data.sort((d1,d2)=>d2[5]-d1[5])
//console.log(sortd)



// q6 is there any states with +ve cases > 60000
var q6=c_data.some(s1=>s1[2]>60000)
//console.log(q6);


// q7 print trissur details
var tcr=c_data.filter(d1=>d1[1]=="thrissur")
// console.log(tcr);

// q8 total number of +ve cases
var tn=c_data.map



// q9 total number of cured cases
var total=c_data.map(d=>d[4]).reduce((dc1,dc2)=>dc1+dc2)
console.log(total);

// q10 cured numbers of iduky
var cn=c_data.find(n1=>n1[1]=="idukki") 
//console.log(cn[4]);

// q11 total number of death cases
//    var total=c_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
// console.log(total);