
let btnAdicionar = document.querySelector(".btn-adicionar"); //botao adicionar
let salvarPalavras = 
[
      {palavra:"AMEIXA", dica:"FRUTA" },
      {palavra:"CAMELO", dica:"ANIMAL"},
      {palavra:"CHILE", dica:"PAIS"},
      {palavra:"PROGRAMADOR", dica: "PROFISSAO"},
      {palavra:"MUSTANG", dica: "CARRO"},
      {palavra:"VAPOREON", dica: "POKEMON"},
      {palavra:"ORACLE", dica:"EMPRESA"}
] // array com as palavras escolhidas pelo usuario(com 3 palavras ja predefindas)
console.log(salvarPalavras)
let inputDica =  document.querySelector("#dica") // pegando a dica descrita pelo usuario
let InputPalavra = document.querySelector("#input")// pegar a palavra digitada pelo usuario



      //funcao para chamar o pop-up assim que o usario apertar o botao adicionar
      function iniciaModal(modalId)
      {
      let modal = document.getElementById("modal-adiciona")
      console.log(modal)
     
      modal.classList.add("mostrar")
            modal.addEventListener("click", function(e)
            {
                  if(e.target.className == "button-fechar")
                  {
                     modal.classList.remove("mostrar")
                  }

            })
      }

            // função criada para quando o usuario não digitar nem a palavra e nem a dica
            function adicionaPalavraDica(modalPalavra1)
            {
                  let modalPalavra = document.getElementById("modal-palavra")

                  modalPalavra.classList.add("mostrarPalavra")
                  modalPalavra.addEventListener("click", function(event)
                  {
                        if(event.target.className == "button-fechar")
                        {
                           modalPalavra.classList.remove("mostrarPalavra")
                        }
                  })

            }
   
                        
                  //evento que é ativado assim que o usuario apertar no botao
                  btnAdicionar.addEventListener("click",function()
                  { 
                        //caso o usuario nao digite nada
                        if(InputPalavra.value == "" || inputDica.value == "")
                        {
                              adicionaPalavraDica("modal-Palavra")
                        
                        }else
                              {

                                    
                        //array para guarar os objetos digitados pelo usuario
                        let palavra = {}
                        palavra.palavra = document.getElementById("input").value
                        palavra.dica = document.getElementById("dica").value 


                        // assim  que o usuario apertar o botao adicionar, os objetos que o usuario digitou vao para o array de objetos"salvarPalavras"
                        salvarPalavras.push(palavra)
                        
                        //mostra as palavras que estao no array "salvarPalavras" no console
                        console.log(salvarPalavras)

                        // depois disso tudo, as palavras que o usuario digitou vão ser apagadas
                        inputDica.value = ""
                        InputPalavra.value = ""

                        //mostrando o pop-up
                        iniciaModal("modal-adiciona");
                              }
                  
                        // salvando os itens do array, para usa-los em outra pagina
                        localStorage.setItem("salvar-palavras", JSON.stringify(salvarPalavras))
                              


                  })         




                 