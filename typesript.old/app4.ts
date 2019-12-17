let nombre: string = "pedro";
let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => {
            console.log(this.nombre + " Smash");
        }, 1);
    }
};
hulk.smash();
