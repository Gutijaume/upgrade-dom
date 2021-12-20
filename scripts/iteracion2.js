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
ptext$$.innerHTML = "Soy dinamico!"
document.body.append(ptext$$)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2$$ = document.querySelector("h2")
h2$$.innerHTML = 'Wubba Lubba dub dub'

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let list$$ = document.createElement("ul")
document.body.append(list$$)

for (let app of apps){
    let appLi$$ = document.createElement("li")
    appLi$$.innerHTML = app
    list$$.appendChild(appLi$$)
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeClass = document.querySelectorAll (".fn-remove-me")
removeClass.remove(".fn-remove-me")















}