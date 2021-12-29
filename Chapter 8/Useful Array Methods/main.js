const people = [
    { firstName: 'Benjamin', lastName: 'Franklin', yearBorn: 1706, yearOfDeath: 1790 },
    { firstName: 'Thomas', lastName: 'Edison', yearBorn: 1847, yearOfDeath: 1931 },
    { firstName: 'Franklin', lastName: 'Roosevelt', yearBorn: 1882, yearOfDeath: 1945 },
    { firstName: 'Napoleon', lastName: 'Bonaparte', yearBorn: 1769, yearOfDeath: 1821 },
    { firstName: 'Abraham', lastName: 'Lincoln', yearBorn: 1809, yearOfDeath: 1865 },
    { firstName: 'Mahatma', lastName: 'Gandhi', yearBorn: 1869, yearOfDeath: 1948 },
    { firstName: 'Winston', lastName: 'Churchill', yearBorn: 1874, yearOfDeath: 1965 },
    { firstName: 'Charles', lastName: 'Darwin', yearBorn: 1809, yearOfDeath: 1882 },
    { firstName: 'Albert', lastName: 'Einstein', yearBorn: 1879, yearOfDeath: 1955 },
    { firstName: 'Pablo', lastName: 'Picasso', yearBorn: 1881, yearOfDeath: 1973 },
    { firstName: 'Ludwig', lastName: 'Beethoven', yearBorn: 1770, yearOfDeath: 1827 },
    { firstName: 'Walt', lastName: 'Disney', yearBorn: 1901, yearOfDeath: 1966 },
    { firstName: 'Henry', lastName: 'Ford', yearBorn: 1863, yearOfDeath: 1947 },
    { firstName: 'Steve', lastName: 'Jobs', yearBorn: 1955, yearOfDeath: 2012 }
  ]

// Find index of Thomas Edison

const index = people.findIndex(e=>e.firstName.trim().toUpperCase()==='THOMAS' && e.lastName.trim().toUpperCase()==='EDISON')
console.log(index)

// Find the object that contains Winston Churchill

const arr = people.filter(e=>e.firstName==="Winston")
console.log(arr[0])

//Create an array that contains people that died before 1940.
const arr1 = people.filter(e=>e.yearOfDeath<1940)
console.log(arr1)

//Create an array that contains the firstName, lastName and yearsLived for each person (where yearsLived is the number of years the person lived).

const newArr = people.map((e)=>{
    return {
        firstName:e.firstName,
        lastName : e.lastName,
        yearsLived : e.yearOfDeath-e.yearBorn
    }
})
console.log(newArr)