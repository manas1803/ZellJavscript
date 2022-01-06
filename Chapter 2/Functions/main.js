function demoFunction(firstName){
    console.log("This is a demo function for " + firstName)
}
const myName = function(){
    console.log("Manas Pant")
}

function employeeDetails(firstName){
    console.log("This function will be returning the function")
    return demoFunction;
}
const employeeDetailsData = employeeDetails();

employeeDetailsData("Bruce")
console.log(employeeDetailsData)

