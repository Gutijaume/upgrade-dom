window.onload = () =>{
//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let bttn$$ = document.querySelector(".showme")
console.log(bttn$$)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let title1$$ = document.querySelector("#pillado")
console.log(title1$$)

//1.3 Usa querySelector para mostrar por consola todos los p

let allP$$ = document.querySelectorAll("p")
console.log(allP$$)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let AllPokemonClass$$ = document.querySelectorAll(".pokemon")
console.log(AllPokemonClass$$)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

let testMeFunctions$$ = document.querySelectorAll('[data-function ="testMe"]')
console.log(testMeFunctions$$)

//1.6 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

let thirdItemOnly$$ = document.querySelectorAll('[data-function ="testMe"]')
console.log(thirdItemOnly$$[3])
}