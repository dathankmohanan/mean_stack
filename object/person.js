//create an emp details wid name,salary age ,designation,eid
var employee={
    ename:"tom",
    eid:1000,
    salary:25000,
    desig:"devoloper",
    exp:2
}
// console.log(employee.ename);
// employee.exp="3years"
// console.log(employee);
// console.log("gender" in employee);
if("exp" in employee){
    employee.exp+=1

}
else{
    employee.exp=1;
}
console.log(employee);