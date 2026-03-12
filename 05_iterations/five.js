const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// ----------------------------------------------------------------

// note: coding.forEach( (item) => {   ---------- Callback function
//         console.log(item);
//       })

// coding.forEach( funtion greet() => { ------------- normal funtion
//     console.log(item);
// })

// ------------------------------------------------------------------

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: 'Javascript',
        languageFileName: 'js'
    },
     {
        languageName: 'Ruby',
        languageFileName: 'ru'
    },
     {
        languageName: 'Python',
        languageFileName: 'py'
    }, {
        languageName: 'Java',
        languageFileName: 'java'
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} & ${item.languageFileName}`);  
})