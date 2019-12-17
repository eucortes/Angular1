let prom1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("promesa terminada");
        //twermina bien
        resolve();
        //termina mal
        //reject()
    }, 1500);
});
console.log("paso1");
prom1.then(
    function() {
        console.log("ejecutame cuando termine bien");
    },
    function() {
        console.error("salio mal");
    }
);
console.log("paso2");
