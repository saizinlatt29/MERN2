//Datatype int, string ,char ,bool, etc
//for Java script
//String , Number, Bollen,Undefined , Null, Object

//in ES6 above we can have Symbol as data

var checkDataType = 1.256 //
console.log("Data type is - "+ typeof checkDataType)
checkDataType = 1256
console.log("Data type is - "+ typeof checkDataType)
checkDataType = "Ryan"
console.log("Data type is - "+ typeof checkDataType)
checkDataType = true
console.log("Data type is - "+ typeof checkDataType)
checkDataType = undefined //is avalid data type
console.log("Data type is - "+ typeof checkDataType)
checkDataType = null //is a valid for object type as null is just is nothing 
console.log("Data type is - "+ typeof checkDataType)
checkDataType ={}
console.log("Data type is - "+ typeof checkDataType)
checkDataType ={
    name :"Arit",
    session:"Mernstack"
}
console.log("Data type is - "+ typeof checkDataType)

console.log("Data is ;"+JSON.stringify(checkDataType))

//ES has new data type - symbol

var mydata = Symbol("Some Value")

console.log("Data type is  -"+ typeof mydata);
console.log("Data is  -"+  mydata);

