// Immediately Invoked Function Expressions (IIFE)
// ()();

(function one() {
    console.log("iif3");
})(); // named iife

( (user) => {
    console.log(`Hello its iife test bt ${user}`);
}
)('jay');