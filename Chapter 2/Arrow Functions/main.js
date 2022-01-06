const myName = (firstName)=>{
    console.log(firstName)
}
myName("My Name is Manas Pant")

// Differnce in this value for arrow function and normal functions

let myGlobalVariable = "Hello World"
const obj1 = {
    myNormalFunction : null,
    checker1 :function (){
        this.myNormalFunction = function(){
            console.log(this)
        }
    }
}

obj1.checker1()
obj1.myNormalFunction()

const obj2 = {
    myArrowFunction2 : null,
    checker2 : function(){
        this.myArrowFunction2=()=>{
            console.log(this)
        }
    }
}
obj2.checker2();
obj2.myArrowFunction2();