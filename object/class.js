class parent{
    bike(){
        console.log("pasiion pro");
    }
}

class child extends parent{
    bike(){
        super.bike()
        console.log("royal enfield");
    }
}
var ch=new child()
ch.bike()