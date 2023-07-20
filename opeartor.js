//Opearator like - &&, or(||),!=,==,===,<,>,>=,<=,++,--
//ternary operator -?
var age = "18"
var isvalidID = true
// == just compare data not data type so Is Valid
if(isvalidID && age==18){
    console.log("Is Valid Voter")
}else{
    console.log("Is Not avalid Voter")
}

if(isvalidID && age===18){
    console.log("Is Valid Voter")
}else{
    console.log("Is Not avalid Voter")
}