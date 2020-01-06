/**
 * INNER FUNCTION
 */

function myFunction() {
    function innerFunction(bla) {
        console.log(bla)
    }

    const bla = 'Run inner function';
    innerFunction(bla)
}

myFunction();