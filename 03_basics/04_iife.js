// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB Connected`);
// }
// chai()

//*********What is IIFE */
// because certain time global scope pollution, to prevent it iffe is used (function)()

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected Too ${name}`);
    
})('dhiraj')