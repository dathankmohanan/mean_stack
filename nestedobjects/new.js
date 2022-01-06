var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transactions:[]} ,
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transactions:[]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transactions:[]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transactions:[]},

}
// console.log("1006" in users);
// console.log(users[1003].balance);

function authenticate(ac_num,password){
    //chk acno exit
    if(ac_num in users){
        let pwd=users[ac_num].password
        if(pwd==password){
            return 1
        }else{
            return-1
        }
    }
else{
    //invalid acc no
    return 0;
}
 

}
// console.log(authenticate(1007,"userone"));
function fundTransfer(from_acno,to_acno,amount){
    if(validataccountnumber(from_acno)&& validataccountnumber(to_acno)){
        let curbal=users[from_acno].balance-=amount
        if(amount>curbal){
            console.log("insuffitiont amount");
        }else{
            users[to_acno].balance+=amount
            let from_acno_bal=balanceenq(from_acno)
            console.log(`your account ${from_acno} has been debited with ${amount},available balance is ${to_acno}`);
        }
    }
    else{
        console.log("invalid account number");
    }
}
console.log(fundtransfer);



function balanceenq()




