//pega o array da pagina adicionarPalavras e passa para pagina de jogoForca
let adicionaSalvarPalavras = JSON.parse(localStorage.getItem("salvar-palavras"));
console.log(adicionaSalvarPalavras)

//escolhendo a palavra sorteada, por meio de um sorteio
let palavraSecreta = adicionaSalvarPalavras[Math.floor(Math.random() * adicionaSalvarPalavras.length )]
//console.log(palavraSecreta);

let palavraSorteada = palavraSecreta.palavra
console.log(palavraSorteada)
let dicaSorteada = palavraSecreta.dica;
console.log(dicaSorteada)
let letrasErradas = [];
let letrasCertas = [];

let buttonNovoJogo = document.querySelector(".btn-novoJogo")


                // evento para saber se o usuario clicou em uma letra
document.addEventListener("keydown" , (evento)=>
{
    let codigo = evento.keyCode; //65 - 90

    if(letraTrue(codigo))
    {
        let letra = evento.key.toUpperCase();
        
        console.log(letra)
      

        if(letrasErradas.includes(letra) ||  letrasCertas.includes(letra))
            {
                mostrarAviso()
            }else{
                    if(palavraSorteada.includes(letra))
                    {
                        letrasCertas.push(letra)
                        console.log(letrasCertas)
                    } else
                        {
                            letrasErradas.push(letra)
                        } 
                  }

            atualizarJogo()
         
            mostraTraco();
    }
} )

    pontinhos();
    mostraDica();


    function atualizarJogo()
    {
        mostrarLetrasErradas()
        mostrasLetrasCertas()
        desenharForca()
        chegarJogo()
        
    }



 

function mostrarLetrasErradas()
{
    let erradas = document.querySelector(".letras-digitadas-erradas")
    erradas.innerHTML = ""
    letrasErradas.forEach((letra) =>
    {
        erradas.innerHTML +=  letra
    })  
       
}

    function mostrasLetrasCertas()
    {
        let certas = document.querySelector(".letras-digitadas-certas")
        certas.innerHTML = ""
        letrasCertas.forEach((letra) =>
        {
            certas.innerHTML += letra
        })
    }

        function mostraTraco() {
        let container = document.querySelector(".palavra-secreta");
        container.innerHTML = ""
        palavraSorteada.split("").forEach((letra) => {
          if (letrasCertas.includes(letra)) {
            container.innerHTML += `<span>${letra}</span>`;
          } else {
            container.innerHTML += `<span>_ </span>`;
          }
        });
      }

        function pontinhos()
        {
            let pontos = document.querySelector(".palavra-secreta");
            pontos.innerHTML = ""
            palavraSorteada.split("").forEach((letra) => {
              
                pontos.innerHTML += `<span>_ </span>`;
              
            });
        }
      
      function mostraDica()
      {
          let dica = document.querySelector(".dica")

          dica.innerHTML = dicaSorteada
      }


      
        //função que mostra um aviso caso o usuario aperte uma mesma letra 2 vezes.
    function mostrarAviso()
    {
        let aviso = document.querySelector("#titulo-escondido")
        aviso.classList.remove("invisivel")

        setTimeout(function()
        {
            aviso.classList.add("invisivel")
        }, 500)
    }


       function desenharForca()
       {
           let partesCorpo = document.querySelectorAll(".invisivel-corpo")

            for( let i = 0 ;  i <letrasErradas.length; i++)
            {
                partesCorpo[i].style.display = "block"
            }
            
       }
       
      function chegarJogo()
      {
        let container = document.querySelector(".palavra-secreta");
        let partesCorpo = document.querySelectorAll(".invisivel-corpo")
        if ( letrasErradas.length === partesCorpo.length)
        {
            perdeu()
        }

            if(palavraSorteada === container.innerText)
            {
                ganhou()
            }
            
      }
           
        function perdeu()
        {
        let modal = document.getElementById("modal-perdeu")
      console.log(modal)
     
         modal.classList.add("mostrarPerdeu")
            modal.addEventListener("click", function(e)
            {
                  if(e.target.className == "button-fechar")
                  {
                     modal.classList.remove("mostrarPerdeu")
                     reiniciarJogo();
                  }

            })
        }

            function ganhou()
            {
                let modal = document.getElementById("modal-ganhou")
                console.log(modal)
     
                  modal.classList.add("mostrarGanhou")
                    modal.addEventListener("click", function(e)
                    {
                        if(e.target.className == "button-fechar")
                        {
                            modal.classList.remove("mostrarGanhou")
                            reiniciarJogo();
                        }

            })
            }

    //funcao pra saber se é uma letra que o usuario cliclou.
    function letraTrue(codigo)
    {
        return codigo >= 65 &&  codigo <= 90;
    }

    function reiniciarJogo() {
        window.location.reload();
      }


      buttonNovoJogo.addEventListener("click", function()
      {
            reiniciarJogo();
      })