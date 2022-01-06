// var text = "hai hello hai hello"
// var wc ={}
// var words = text.split(" ")
// for (let word of words) {
//     if (word in wc) {
//         wc[word] += 1
//     } else {
//         wc[word] = 1
//     }
// }
// console.log(wc);

 

//  var text="hello hai hello hai"
//  var wc={}
//  var words=text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
//  console.log(wc);



var pattern="abbabc"
 var wc={}
// for(let char of pattern){
 
//     if(char in wc){
//     console.log("first recusive character is",char);
//     break;
//     }else{
//     wc[char]=1
// }

//  }
var op=[]
pattern.split("").map(char=>char in wc?op.push(char):wc[char]=1)
console.log(op[0]);
