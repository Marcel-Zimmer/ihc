

// Adicionar evento de validação em tempo real para todos os campos
document.addEventListener('DOMContentLoaded', () => {
  // Campos de texto
  document.querySelector('#form6Example1').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example2').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example3').addEventListener('input', function() {
    validarCampo(this, 'number');
  });

  document.querySelector('#form6Example4').addEventListener('input', function() {
    validarCampo(this, 'email');
  });

  document.querySelector('#form6Example5').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example6').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example7').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example8').addEventListener('input', function() {
    validarCampo(this, 'data');
  });

  document.querySelector('#form6Example9').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example10').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example11').addEventListener('input', function() {
    validarCampo(this, 'text');
  });

  document.querySelector('#form6Example12').addEventListener('input', function() {
    validarCampo(this, 'data');
  });

  document.querySelector('#form6Example13').addEventListener('input', function() {
    // Só valida quando o radio4 está marcado
    if (document.getElementById('radio4').checked) {
      validarCampo(this, 'text');
    }
  });
});

// Função para validar campos individualmente e aplicar as bordas
function validarCampo(campo, tipo) {
    const mensagemErroExistente = campo.parentElement.querySelector('.erro-msg');
    let campoValido = true;
  
    // Validação básica: verificar se o campo está vazio
    if (!campo.value.trim()) {
      campoValido = false;
      exibirErroCampo(campo, 'Este campo é obrigatório.', mensagemErroExistente);
    } else if (tipo === 'email' && !validarEmail(campo.value)) {
      campoValido = false;
      exibirErroCampo(campo, 'Por favor, insira um e-mail válido.', mensagemErroExistente);
    } else if (tipo === 'data' && !validarData(campo.value)) {
      campoValido = false;
      exibirErroCampo(campo, 'Por favor, insira uma data válida.', mensagemErroExistente);
    } else if (tipo === 'number' && !validarGrr(campo.value)) {
      campoValido = false;
      exibirErroCampo(campo, 'O GRR deve ter 8 dígitos numéricos.', mensagemErroExistente);
    } else {
      // Campo válido: remove mensagens de erro existentes
      destacarCampoValido(campo);
    }
  
    return campoValido;
  }
  
  // Função auxiliar para exibir erro no campo
  function exibirErroCampo(campo, mensagem, mensagemErroExistente) {
    campo.classList.add('campo-invalido');
    campo.classList.remove('campo-valido');
    
    if (!mensagemErroExistente) {
      const mensagemErro = document.createElement('div');
      mensagemErro.classList.add('erro-msg', 'text-danger', 'mt-1');
      mensagemErro.textContent = mensagem;
      campo.parentElement.appendChild(mensagemErro);
    } else {
      mensagemErroExistente.textContent = mensagem;
    }
  }
  
  // Função para destacar campos válidos
  function destacarCampoValido(campo) {
    campo.classList.add('campo-valido');
    campo.classList.remove('campo-invalido');
    const mensagemErro = campo.parentElement.querySelector('.erro-msg');
    if (mensagemErro) mensagemErro.remove();
  }
  
  // Funções de validação específicas
  function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
  }
  
  function validarData(data) {
    const regexData = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD
    return regexData.test(data);
  }
  
  function validarGrr(grr) {
    const regexGRR = /^\d{8}$/;
    return regexGRR.test(grr);
  }
  
  // Função para exibir alertas
  function exibirAlerta(type, message) {
    const navbar = document.querySelector('.navbar'); // Certifique-se de usar o seletor correto.
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <br><br>
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    navbar.insertAdjacentElement('afterend', wrapper);
  
    setTimeout(() => wrapper.remove(), 3000); // Remove o alerta após 3 segundos
  }
  
  // Evento para envio do formulário
  document.querySelector('.formulario').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const radio4 = document.getElementById('radio4');
    const campos = [
      { campo: document.getElementById('form6Example1'), mensagem: 'Preencha o primeiro nome.', tipo: 'text' },
      { campo: document.getElementById('form6Example2'), mensagem: 'Preencha o sobrenome.', tipo: 'text' },
      { campo: document.getElementById('form6Example3'), mensagem: 'Preencha o GRR.', tipo: 'number' },
      { campo: document.getElementById('form6Example4'), mensagem: 'Preencha um e-mail válido.', tipo: 'email' },
      { campo: document.getElementById('form6Example5'), mensagem: 'Preencha o curso.', tipo: 'text' },
      { campo: document.getElementById('form6Example6'), mensagem: 'Preencha o nome da matéria.', tipo: 'text' },
      { campo: document.getElementById('form6Example7'), mensagem: 'Preencha o código da matéria.', tipo: 'text' },
      { campo: document.getElementById('form6Example8'), mensagem: 'Preencha uma data válida.', tipo: 'data' },
      { campo: document.getElementById('form6Example9'), mensagem: 'Preencha o horário.', tipo: 'text' },
      { campo: document.getElementById('form6Example10'), mensagem: 'Preencha a categoria.', tipo: 'text' },
      { campo: document.getElementById('form6Example11'), mensagem: 'Preencha o assunto.', tipo: 'text' },
      { campo: document.getElementById('form6Example13'), mensagem: 'Preencha o texto.', tipo: 'text' },
      ...(radio4.checked
        ? [{ campo: document.getElementById('form6Example12'), mensagem: 'Preencha a data disponível.', tipo: 'data' }]
        : [])
    ];
  
    let formValido = true;
  
    campos.forEach(({ campo, tipo }) => {
      if (!validarCampo(campo, tipo)) {
        formValido = false;
      }
    });
  
    // Rola para o topo da página
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adiciona um efeito de rolagem suave
    });
  
    if (formValido) {
      exibirAlerta('success', 'Formulário enviado com sucesso!');
      // formulário será enviado aqui
    } else {
      exibirAlerta('danger', 'Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  });
  
  // Configurar campo de data baseado no radio button
  document.addEventListener('DOMContentLoaded', () => {
    const radioSemValidade = document.getElementById('radio3');
    const radioComValidade = document.getElementById('radio4');
    const campoData = document.getElementById('form6Example12');
  
    function atualizarCampoData() {
      if (radioComValidade.checked) {
        campoData.disabled = false;
      } else {
        campoData.disabled = true;
        campoData.value = '';
      }
    }
  
    radioSemValidade.addEventListener('change', atualizarCampoData);
    radioComValidade.addEventListener('change', atualizarCampoData);
    atualizarCampoData(); // Configura o estado inicial
  });
  