const fruit = ['apple', 'apple', 'banana', 'banana', 'orange', 'pear', 'apple']

const newObj = fruit.reduce((acc,fruit,index)=>{
    acc[fruit] = (acc[fruit])?acc[fruit]+1:1;
    return acc;
},{});

console.log(newObj)

// Flatten an array

const fruits = ['apple','apple','banana','banana','pear','apple',['apple','pear','apple',['banana','pear','orange',['orange','orange','pear',['apple']]]]]

//acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur), []
function flattenArray(a){
    return newFlatArray = a.reduce((acc, cur) => {
        return acc = (Array.isArray(cur))?[...acc,...flattenArray(cur)]:[...acc,cur];
    },[])
}

console.log(flattenArray(fruits))

const newObjFruits = flattenArray(fruits).reduce((acc,cur)=>{
    acc[cur] = (acc[cur])?acc[cur]+1:1;
    return acc;
},{})

console.log(newObjFruits)