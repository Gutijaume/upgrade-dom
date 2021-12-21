window.onload = () =>{
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let div$$ = document.createElement("div")
document.body.append(div$$)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let div2$$ = document.createElement("div")
let p1$$ = document.createElement("p")
div2$$.appendChild(p1$$)
document.body.append(div2$$)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let div3$$ = document.createElement("div")
document.body.append(div3$$)
for (let i=0; i < 6; i++){
    let add6P = document.createElement("p")
    div3$$.appendChild(add6P)
}
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let ptext$$ = document.createElement("p")
ptext$$.innerText = "Soy dinamico!"
document.body.append(ptext$$)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2$$ = document.querySelector("h2.fn-insert-here")
h2$$.innerText = 'Wubba Lubba dub dub'

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let list$$ = document.createElement("ul")
document.body.append(list$$)

for (let app of apps){
    let appLi$$ = document.createElement("li")
    appLi$$.innerHTML = app
    list$$.appendChild(appLi$$)
}

// apps.forEach((item)=>{
//     let li$$ = document.createElement("li")
//     li$$.innerText = item
//     li$$.appendChild(li$$)
// }) Es lo mismo pero con un foreach


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeClass$$ = document.querySelectorAll.remove (".fn-remove-me")

removeClass$$.forEach((value) =>{
    value.delete()
})

// for (let value of removeClass$$){
//     value.delete()
// } Y aquí lo mismo con un forOf

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let allMyDivs$$ = document.querySelectorAll("div")
let newP$$ = document.createElement("p")
newP$$.innerText = "Voy en medio!"
body.insertBefore(newP$$, allMyDivs$$[1])

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let divsWithText$$ = querySelectorAll("div.fn-insert-here")

for (let div of divsWithText$$){
    div.innerHTML = "<p>Voy dentro!</p>"
}

















}