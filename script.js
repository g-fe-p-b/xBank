function boasVindas() {
    let nome = prompt("Digite seu nome:");
    alert("Bem-vindo(a), " + nome + "!");
}

let listaClientes = [];

// function salvarCadastro(event) {         //UTILIZADO APENAS PARA SALVAR EM MEMÓRIA, NÃO ESTÁ SENDO USADO NO MOMENTO

//     event.preventDefault(); 
    
//     let nomeInput = document.querySelector("#nome").value;
//     let emailInput = document.querySelector("#email").value;
//     let telefoneInput = document.querySelector("#telefone").value;
//     let valorInput = document.querySelector("#valor").value;
//     let perfilInput = document.querySelector("#perfil").value;
//     let observacoesInput = document.querySelector("#observacoes").value;
    
//     let novoCliente = {
//         nome: nomeInput,
//         email: emailInput,
//         telefone: telefoneInput,
//         valor: Number(valorInput),
//         perfil: perfilInput, observacoes: observacoesInput
//     };
    
//     listaClientes.push(novoCliente);
    
//     console.log("Cliente salvo em memória:", novoCliente);
//     console.log("Lista completa de cadastros:", listaClientes); 
    
//     exibirClientesArmazenados();
    
//     document.querySelector("form").reset();
// }
    function exibirClientesArmazenados() { 
        let conteinerResultado = document.querySelector("#resultado-cadastro");
        
        conteinerResultado.innerHTML = ""; 
        
        for (let i = 0; i < listaClientes.length; i++){ 
            let cliente = listaClientes[i];
            
            let cardCliente = document.createElement("div");
            cardCliente.classList.add("card");
            cardCliente.style.borderLeft = "5px solid #1a2b4c";
            cardCliente.style.marginTop = "15px"; 
            
            cardCliente.innerHTML = `
            <h3>Investidor #${i + 1}: ${cliente.nome}</h3>
            <p><strong>E-mail:</strong> ${cliente.email}</p>
            <p><strong>Telefone:</strong> ${cliente.telefone || "Não informado"}</p>
            <p><strong>Aporte Pretendido:</strong> R$ ${cliente.valor}</p>
            <p><strong>Perfil de Risco:</strong> ${cliente.perfil}</p>
            <p><strong>Objetivos:</strong> ${cliente.observacoes || "Nenhum informado"}</p>
            `;
    conteinerResultado.appendChild(cardCliente);
    }
}

function alternarMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

function validarFormulario(event) {
    event.preventDefault();

    let inputNome = document.querySelector("#nome");
    let inputEmail = document.querySelector("#email");
    let inputTelefone = document.querySelector("#telefone");
    let inputValor = document.querySelector("#valor");
    let selectPerfil = document.querySelector("#perfil");
    let divMensagem = document.querySelector("#mensagem-erro");

    inputNome.style.borderColor = "#cccccc";
    inputEmail.style.borderColor = "#cccccc";
    inputTelefone.style.borderColor = "#cccccc";
    inputValor.style.borderColor = "#cccccc";
    selectPerfil.style.borderColor = "#cccccc";
    divMensagem.innerHTML = "";
    divMensagem.textContent = "none";

    let erros = [];
    if (inputNome.value.trim().length < 3) {
        inputNome.style.borderColor = "red";
        erros.push("O nome deve ter pelo menos 3 caracteres.");
    }
    if (!inputEmail.value.includes("@") || !inputEmail.value.includes(".")) {
        inputEmail.style.borderColor = "red";
        erros.push("Digite um email válido.");
    }
    let valorNumerico = Number(inputValor.value);
    if (isNaN(valorNumerico) || valorNumerico < 100) {
        inputValor.style.borderColor = "red";
        erros.push("O aporte inicial mínimo é R$100,00.");
    }
    if (selectPerfil.value === "") {
        selectPerfil.style.borderColor = "red";
        erros.push("Selecione um perfil de risco.");
    }
    if (erros.length > 0) {
        divMensagem.style.display = "block";
        divMensagem.style.backgroundColor = "#ffe6e6";
        divMensagem.style.color = "#990000";
        divMensagem.style.padding = "10px";
        divMensagem.style.borderRadius = "4px";
        divMensagem.style.marginBottom = "15px";

        let listaHtml = "<ul style='margin-left: 20px;'>";
        for (let i = 0; i < erros.length; i++) {
            listaHtml += "<li>" + erros[i] + "</li>";
        }
        listaHtml += "</ul>";
        divMensagem.innerHTML = "<strong>Atenção! Corrigir os erros abaixo:</strong>" + listaHtml;
        return false;
    }
    alert("Cadastro realizado com sucesso! Bem vindo ao xBank invest.");
    //document.querySelector("form").reset();   //Limpar o formulário após o envio (LIBERAR DEPOIS DOS TESTES)
    return true;
}