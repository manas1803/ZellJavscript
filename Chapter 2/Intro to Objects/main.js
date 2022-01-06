const obj1 = {};
// console.log(obj1)

const student = {
    firstName:"Bruce",
    lastName:"Wayne",
    marks:98
}
// console.log(student)

// console.log(student["firstName"])
// console.log(student.lastName)
const employee = {
    firstName:"Kishore",
    lastName:"Kumar",
    job:"Singer",
    employer:"Free lancer",
    salary:function (){
        console.log(this)
    },
    newMethod:()=>{
        console.log(this)
    }
}
employee.salary()
employee.newMethod()
delete employee.job
console.log(employee)