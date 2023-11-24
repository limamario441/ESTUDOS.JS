const numero=document.getElementById("numero")

const promise= new Promise((resolve,reject)=>{
const resultado=false
const tempo=3000 

setTimeout(()=>{
    if(resultado){
        resolve("deu tudo certo")
    }else{
        reject("deu tudo errado")
    }
},tempo)

});

promise.then((retorno)=>{
numero.innerHTML=retorno
numero.classList.remove("erro")
numero.classList.add('ok')
})
promise.catch((retorno)=>{
numero.innerHTML=retorno
numero.classList.add("erro")
numero.classList.remove('ok')
})

numero.innerHTML ="processando...."
