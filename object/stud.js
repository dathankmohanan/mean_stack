class student{
    constructor(name,age,div){
        this.name=name;
        this.age=age;
        this.div=div;
    }
    printStudent(){
        console.log(this.name,this.age,this.div);
    }
}
var obj=new student("anik",22,"A")
//  obj.setStudent("anik",22,"A")
 obj.printStudent()


 var obj1=new student("viljo",23,"B")
//   obj1.setStudent("viljo",23,"B")
  obj1.printStudent()
