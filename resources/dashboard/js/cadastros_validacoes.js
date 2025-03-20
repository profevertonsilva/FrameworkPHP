
$(document).ready(function ($) {

    //Mascaras nos campos dos formulários
    $('#pro_cpf').on('input', function () {
        let cpf = $(this).val();

        // Remove tudo que não for número
        cpf = cpf.replace(/\D/g, '');

        // Adiciona os pontos e o traço de acordo com o formato do CPF
        cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
        cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

        // Atualiza o valor do campo
        $(this).val(cpf);
    });
    $('#pro_data_nascimento').on('input', function () {
        let data = $(this).val();

        // Remove tudo que não for número
        data = data.replace(/\D/g, '');

        // Adiciona as barras de acordo com o formato dd/mm/aaaa
        data = data.replace(/^(\d{2})(\d)/, '$1/$2');
        data = data.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');

        // Atualiza o valor do campo
        $(this).val(data);
    });
    $('#pro_telefone').on('input', function () {
        let telefone = $(this).val();

        // Remove tudo que não for número
        telefone = telefone.replace(/\D/g, '');

        // Aplica a máscara para o formato de telefone
        telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona o DDD
        telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço no número

        // Limita o número a 11 dígitos (DDD + número de telefone)
        telefone = telefone.substring(0, 15);

        // Atualiza o valor do campo
        $(this).val(telefone);
    });
    $('#pro_whatsapp').on('input', function () {
        let whatsapp = $(this).val();

        // Remove tudo que não for número
        whatsapp = whatsapp.replace(/\D/g, '');

        // Aplica a máscara para o formato de telefone
        whatsapp = whatsapp.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona o DDD
        whatsapp = whatsapp.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço no número

        // Limita o número a 11 dígitos (DDD + número de telefone)
        whatsapp = whatsapp.substring(0, 15);

        // Atualiza o valor do campo
        $(this).val(whatsapp);
    });
    $('#pro_cep').on('input', function () {
        let cep = $(this).val();

        // Remove tudo que não for número
        cep = cep.replace(/\D/g, '');

        // Adiciona o traço no formato de CEP
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');

        // Limita o valor a 9 caracteres (8 números + 1 traço)
        cep = cep.substring(0, 9);

        // Atualiza o valor do campo
        $(this).val(cep);
    });
    $('#loj_telefone').on('input', function () {
        let telefone = $(this).val();

        // Remove tudo que não for número
        telefone = telefone.replace(/\D/g, '');

        // Aplica a máscara para o formato de telefone
        telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona o DDD
        telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço no número

        // Limita o número a 11 dígitos (DDD + número de telefone)
        telefone = telefone.substring(0, 15);

        // Atualiza o valor do campo
        $(this).val(telefone);
    });
    $('#loj_whatsapp').on('input', function () {
        let whatsapp = $(this).val();

        // Remove tudo que não for número
        whatsapp = whatsapp.replace(/\D/g, '');

        // Aplica a máscara para o formato de telefone
        whatsapp = whatsapp.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona o DDD
        whatsapp = whatsapp.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço no número

        // Limita o número a 11 dígitos (DDD + número de telefone)
        whatsapp = whatsapp.substring(0, 15);

        // Atualiza o valor do campo
        $(this).val(whatsapp);
    });
    $('#loj_whatsapp_responsavel').on('input', function () {
        let whatsapp = $(this).val();

        // Remove tudo que não for número
        whatsapp = whatsapp.replace(/\D/g, '');

        // Aplica a máscara para o formato de telefone
        whatsapp = whatsapp.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona o DDD
        whatsapp = whatsapp.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço no número

        // Limita o número a 11 dígitos (DDD + número de telefone)
        whatsapp = whatsapp.substring(0, 15);

        // Atualiza o valor do campo
        $(this).val(whatsapp);
    });
    $('#loj_cep').on('input', function () {
        let cep = $(this).val();

        // Remove tudo que não for número
        cep = cep.replace(/\D/g, '');

        // Adiciona o traço no formato de CEP
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');

        // Limita o valor a 9 caracteres (8 números + 1 traço)
        cep = cep.substring(0, 9);

        // Atualiza o valor do campo
        $(this).val(cep);
    });

    $(document).ready(function () {
        $('#pro_site').on('blur', function () {
            const site = $(this).val().trim(); // Remove espaços em branco

            if (!validarURL(site)) {
                exibirAlerta('Por favor, insira um endereço de site válido.');
            }
        });

        // Função para validar a URL
        function validarURL(url) {
            const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
            return regex.test(url);
        }

        // Função para exibir o alerta usando SweetAlert2
        function exibirAlerta(mensagem) {
            Swal.fire({
                icon: 'error',
                title: 'Atenção',
                text: mensagem,
                confirmButtonText: 'OK'
            });
        }
    });

    //verifica se as senhas são iguais
    $(document).ready(function () {
        $('#log_senha_c').on('blur', function () {
            const senha = $('#log_senha').val().trim();
            const senhaConfirmacao = $(this).val().trim();

            if (senha !== senhaConfirmacao) {
                exibirAlerta('As senhas não correspondem. Por favor, verifique.');
                $('#log_senha_c').val(''); // Limpa o campo de confirmação
            }
        });

        // Função para exibir o alerta usando SweetAlert2
        function exibirAlerta(mensagem) {
            Swal.fire({
                icon: 'error',
                title: 'Atenção',
                text: mensagem,
                confirmButtonText: 'OK'
            });
        }
    });

    //Verificar a Força da senha digitada pelo Usuário
    $(document).ready(function () {
        $('#log_senha').on('input', function () {
            const senha = $(this).val();
            const forca = verificarForcaSenha(senha);

            // Exibe a força da senha
            $('#forca_senha').text(forca.mensagem).css('color', forca.cor);
        });

        // Função para verificar a força da senha
        function verificarForcaSenha(senha) {
            let pontuacao = 0;

            if (senha.length >= 8) pontuacao++; // Comprimento mínimo
            if (/[a-z]/.test(senha)) pontuacao++; // Letras minúsculas
            if (/[A-Z]/.test(senha)) pontuacao++; // Letras maiúsculas
            if (/\d/.test(senha)) pontuacao++; // Números
            if (/[\W_]/.test(senha)) pontuacao++; // Caracteres especiais

            // Define a mensagem e a cor com base na pontuação
            if (pontuacao === 0) {
                return { mensagem: '', cor: '' };
            } else if (pontuacao <= 2) {
                return { mensagem: 'Senha fraca', cor: 'red' };
            } else if (pontuacao === 3) {
                return { mensagem: 'Senha média', cor: 'orange' };
            } else if (pontuacao >= 4) {
                return { mensagem: 'Senha forte', cor: 'green' };
            }
        }
    });

    // Script para mostrar a seha digitada no campo de senha
    $(document).ready(function () {
        // Adiciona o evento ao botão de visualização
        $('#toggleSenha').on('click', function () {
            const senhaField = $('#log_senha');
            const tipo = senhaField.attr('type');

            if (tipo === 'password') {
                senhaField.attr('type', 'text'); // Mostra a senha
                $(this).text('Ocultar'); // Altera o texto do botão
            } else {
                senhaField.attr('type', 'password'); // Oculta a senha
                $(this).text('Exibir'); // Altera o texto do botão
            }
        });
    });

    // Script para mostrar a seha digitada no campo de senha do campo de confirmação de senha
    $(document).ready(function () {
        // Adiciona o evento ao botão de visualização
        $('#toggleSenha_c').on('click', function () {
            const senhaField = $('#log_senha_c');
            const tipo = senhaField.attr('type');

            if (tipo === 'password') {
                senhaField.attr('type', 'text'); // Mostra a senha
                $(this).text('Ocultar'); // Altera o texto do botão
            } else {
                senhaField.attr('type', 'password'); // Oculta a senha
                $(this).text('Exibir'); // Altera o texto do botão
            }
        });
    });



    //Validação do CPF 
    $('#pro_cpf').on('blur', function () {
        const cpf = $(this).val();

        if (!validarCPF(cpf)) {
            Swal.fire({
                icon: 'error',
                title: 'CPF inválido',
                text: 'Por favor, insira um CPF válido.',
                confirmButtonText: 'OK'
            }).then(() => {
                // Limpa o campo e posiciona o foco após o usuário fechar o alerta
                $('#pro_cpf').val('').focus();
            });
        }
    });

    function validarCPF(cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');

        // Verifica se o CPF tem 11 dígitos ou se é uma sequência inválida
        if (
            cpf.length !== 11 ||
            /^(\d)\1+$/.test(cpf) // Verifica sequências como "11111111111"
        ) {
            return false;
        }

        // Calcula o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf[i]) * (10 - i);
        }
        let resto = soma % 11;
        let digito1 = resto < 2 ? 0 : 11 - resto;

        // Verifica o primeiro dígito
        if (parseInt(cpf[9]) !== digito1) {
            return false;
        }

        // Calcula o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf[i]) * (11 - i);
        }
        resto = soma % 11;
        let digito2 = resto < 2 ? 0 : 11 - resto;

        // Verifica o segundo dígito
        if (parseInt(cpf[10]) !== digito2) {
            return false;
        }

        return true;
    }




    //Carregamento das cidades quando seleciona o estado
    $("#pro_est").on("change", function () {
        var id_estado = $(this).val();

        // Faz uma requisiÃ§Ã£o AJAX para buscar as cidades

        // Faz uma requisiÃ§Ã£o AJAX para buscar as cidades
        $.ajax({
            method: 'GET',
            url: '/cidades/listar',
            data: { estado: id_estado },
            dataType: 'json',
            success: function (response) {
                // Limpa as opÃ§Ãµes anteriores do select
                var $select = $("#fk_cidades_cid_id");
                $select.empty();
                // Adiciona uma opÃ§Ã£o padrÃ£o
                $select.append('<option value="">Selecione uma cidade</option>');

                // Itera sobre as cidades do JSON e adiciona como opÃ§Ãµes no select
                response.forEach(function (cidade) {
                    $select.append('<option value="' + cidade.CID_ID + '">' + cidade.cid_nome + '</option>');
                });
            },
            error: function (xhr, status, error) {
                console.error("Erro ao buscar cidades:", error);
            }
        });
    });
});





// Consulta da API viaCep para preenchimento automático dos campos do cadastro
$(document).ready(function () {
    let isAlertOpen = false; // Controle para evitar loop infinito

    $('#pro_cep').on('blur', function () {
        if (isAlertOpen) return; // Evita execução se o alerta já está aberto

        const cep = $(this).val().replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cep.length === 8) {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            $.ajax({
                url: url,
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (!data.erro) {
                        // Preenche os campos de endereço
                        $('#pro_endereco').val(data.logradouro);
                        $('#pro_bairro').val(data.bairro);
                        $('#pro_cidade').val(data.localidade);

                        // Seleciona o estado
                        const estadoSigla = data.uf; // Exemplo: "SP"
                        $('#pro_estado option').each(function () {
                            if ($(this).text().includes(`- ${estadoSigla}`)) {
                                $(this).prop('selected', true);
                            }
                        });

                        // Seleciona a cidade
                        const cidadeNome = data.localidade; // Exemplo: "São Paulo"
                        $('#fk_cidades_cid_id option').each(function () {
                            if ($(this).text() === cidadeNome) {
                                $(this).prop('selected', true);
                            }
                        });
                        $("#pro_numero").focus();
                    } else {
                        exibirAlerta('CEP não encontrado.');
                        limparCampos();

                    }
                },
                error: function () {
                    exibirAlerta('Erro ao consultar o CEP.');
                    limparCampos();
                    $('#pro_cep').focus(); // Reposiciona o foco no campo de CEP
                }
            });
        } else {
            exibirAlerta('Por favor, insira um CEP válido.');
            limparCampos();
        }
    });

    function limparCampos() {
        $('#pro_cep').val('');
        $('#pro_endereco').val('');
        $('#pro_bairro').val('');
        $('#pro_cidade').val('');
        $('#pro_estado').val('').prop('selected', false);
        $('#fk_cidades_cid_id').val('').prop('selected', false);
        $('#pro_cep').focus(); // Reposiciona o foco no campo de CEP
    }

    function exibirAlerta(mensagem) {
        isAlertOpen = true; // Marca o alerta como aberto
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: mensagem,
            confirmButtonText: 'OK'
        }).then(() => {
            isAlertOpen = false; // Marca o alerta como fechado
            $('#pro_cep').focus(); // Reposiciona o foco no campo de CEP após o alerta
        });
    }
});
// Consulta da API viaCep para preenchimento automático dos campos do cadastro
$(document).ready(function () {
    let isAlertOpen = false; // Controle para evitar loop infinito

    $('#loj_cep').on('blur', function () {
        if (isAlertOpen) return; // Evita execução se o alerta já está aberto

        const cep = $(this).val().replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cep.length === 8) {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            $.ajax({
                url: url,
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (!data.erro) {
                        // Preenche os campos de endereço
                        $('#loj_endereco').val(data.logradouro);
                        $('#loj_bairro').val(data.bairro);
                        $('#loj_cidade').val(data.localidade);

                        // Seleciona o estado
                        const estadoSigla = data.uf; // Exemplo: "SP"
                        $('#loj_estado option').each(function () {
                            if ($(this).text().includes(`- ${estadoSigla}`)) {
                                $(this).prop('selected', true);
                            }
                        });

                        // Seleciona a cidade
                        const cidadeNome = data.localidade; // Exemplo: "São Paulo"
                        $('#fk_cidades_cid_id option').each(function () {
                            if ($(this).text() === cidadeNome) {
                                $(this).prop('selected', true);
                            }
                        });
                        $("#loj_numero").focus();
                    } else {
                        exibirAlerta('CEP não encontrado.');
                        limparCampos();

                    }
                },
                error: function () {
                    exibirAlerta('Erro ao consultar o CEP.');
                    limparCampos();
                    $('#loj_cep').focus(); // Reposiciona o foco no campo de CEP
                }
            });
        } else {
            exibirAlerta('Por favor, insira um CEP válido.');
            limparCampos();
        }
    });

    function limparCampos() {
        $('#loj_cep').val('');
        $('#loj_endereco').val('');
        $('#loj_bairro').val('');
        $('#loj_cidade').val('');
        $('#loj_estado').val('').prop('selected', false);
        $('#fk_cidades_cid_id').val('').prop('selected', false);
        $('#loj_cep').focus(); // Reposiciona o foco no campo de CEP
    }

    function exibirAlerta(mensagem) {
        isAlertOpen = true; // Marca o alerta como aberto
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: mensagem,
            confirmButtonText: 'OK'
        }).then(() => {
            isAlertOpen = false; // Marca o alerta como fechado
            $('#loj_cep').focus(); // Reposiciona o foco no campo de CEP após o alerta
        });
    }
});


//Validação dos dados cadastrados antes de submit
$(document).ready(function () {
    $("#cad_profissionais").on("submit", function (event) {
        e.preventDefault(); // Impede o envio do formulário inicialmente

        // Campos obrigatórios e suas validações
        const camposObrigatorios = [
            { id: '#pro_nome', mensagem: 'O campo Nome Completo é obrigatório.' },
            { id: '#pro_telefone', mensagem: 'O campo Telefone é obrigatório.' },
            { id: '#pro_cpf', mensagem: 'O campo CPF é obrigatório.' },
            { id: '#pro_data_nascimento', mensagem: 'O campo Data de Nascimento é obrigatório.' },
            { id: '#pro_cep', mensagem: 'O campo CEP é obrigatório.' },
            { id: '#pro_endereco', mensagem: 'O campo Endereço é obrigatório.' },
            { id: '#pro_numero', mensagem: 'O campo Número é obrigatório.' },
            { id: '#pro_bairro', mensagem: 'O campo Bairro é obrigatório.' },
            { id: '#log_email', mensagem: 'O campo E-mail é obrigatório.' },
            { id: '#log_senha', mensagem: 'O campo Senha é obrigatório.' },
            { id: '#log_senha_c', mensagem: 'O campo Confirmação de Senha é obrigatório.' }
        ];

        // Verifica preenchimento dos campos
        for (let campo of camposObrigatorios) {
            if ($(campo.id).val().trim() === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Campo Obrigatório',
                    text: campo.mensagem
                }).then(() => {
                    $(campo.id).focus(); // Foco no campo inválido
                });
                return false; // Impede o envio
            }
        }

        // Validações específicas
        const cpf = $('#pro_cpf').val().trim();
        if (!validarCPF(cpf)) {
            Swal.fire({
                icon: 'error',
                title: 'CPF Inválido',
                text: 'Por favor, insira um CPF válido.'
            }).then(() => {
                $('#pro_cpf').focus();
            });
            return false;
        }

        const email = $('#log_email').val().trim();
        if (!validarEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'E-mail Inválido',
                text: 'Por favor, insira um e-mail válido.'
            }).then(() => {
                $('#log_email').focus();
            });
            return false;
        }

        const telefone = $('#pro_telefone').val().trim();
        if (!validarTelefone(telefone)) {
            Swal.fire({
                icon: 'error',
                title: 'Telefone Inválido',
                text: 'Por favor, insira um telefone válido no formato correto.'
            }).then(() => {
                $('#pro_telefone').focus();
            });
            return false;
        }

        const senha = $('#log_senha').val().trim();
        const senhaConfirmacao = $('#log_senha_c').val().trim();
        if (senha !== senhaConfirmacao) {
            Swal.fire({
                icon: 'error',
                title: 'Senhas Não Coincidem',
                text: 'A senha e a confirmação de senha devem ser iguais.'
            }).then(() => {
                $('#log_senha').focus();
            });
            return false;
        }

        if (senha.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Senha Fraca',
                text: 'A senha deve conter pelo menos 8 caracteres.'
            }).then(() => {
                $('#log_senha').focus();
            });
            return false;
        }

        // Se passar por todas as validações
        Swal.fire({
            icon: 'success',
            title: 'Formulário Válido',
            text: 'Os dados foram preenchidos corretamente!',
        }).then(() => {
            $('form').submit(); // Envia o formulário
        });
    });

    // Funções auxiliares para validação
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
        let soma = 0, resto;
        for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;
        soma = 0;
        for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        return resto === parseInt(cpf.substring(10, 11));
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarTelefone(telefone) {
        const regex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/; // Exemplo: (11) 91234-5678
        return regex.test(telefone);
    }
});

//Traduzir Datatable
$(document).ready(function () {
    $('#zero-conf').DataTable({
        "paging": true,
        "ordering": true,
        "searching": true,
        "info": true,
        "language": {
            url: '//cdn.datatables.net/plug-ins/2.1.8/i18n/pt-BR.json',
        },

    });
});

$(document).ready(function () {
    // Quando o campo CPF perde o foco
    $('#pro_cpf').on('blur', function () {
        // Obtém o valor do campo CPF
        const cpf = $(this).val();

        // Verifica se o campo não está vazio
        if (cpf.trim() !== '') {
            // Faz a requisição AJAX para verificar o CPF
            $.ajax({
                url: '/dashboard/profissionais/verificaCpf', // Rota para consulta
                method: 'POST', // Método HTTP
                data: { pro_cpf: cpf }, // Envia o CPF como parâmetro
                success: function (response) {
                    if (response === '1') {
                        // Usuário já cadastrado
                        Swal.fire({
                            icon: 'error',
                            title: 'CPF já cadastrado!',
                            text: 'Você já possui um cadastro. Redirecionando...',
                            showConfirmButton: false, // Remove o botão de confirmação
                            timer: 3000 // Define um tempo de exibição (3 segundos)
                        }).then(() => {
                            // Redireciona para a página de login após o alerta
                            window.location.href = '/dashboard/profissionais';
                        });
                    }
                },
                error: function () {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro de conexão!',
                        text: 'Não foi possível verificar o CPF. Tente novamente.',
                        confirmButtonText: 'Ok'
                    });
                }
            });
        }
    });
});

$(document).ready(function () {
    // Quando o campo CPF perde o foco
    $('#loj_cnpj').on('blur', function () {
        // Obtém o valor do campo CPF
        const cnpj = $(this).val();

        // Verifica se o campo não está vazio
        if (cnpj.trim() !== '') {
            // Faz a requisição AJAX para verificar o cnpj
            $.ajax({
                url: '/dashboard/lojistas/verificaCNPJ', // Rota para consulta
                method: 'POST', // Método HTTP
                data: { loj_cnpj: cnpj }, // Envia o CPF como parâmetro
                success: function (response) {
                    if (response === '1') {
                        // Usuário já cadastrado
                        Swal.fire({
                            icon: 'error',
                            title: 'CNPJ já cadastrado!',
                            text: 'Você já possui um cadastro. Redirecionando...',
                            showConfirmButton: false, // Remove o botão de confirmação
                            timer: 3000 // Define um tempo de exibição (3 segundos)
                        }).then(() => {
                            // Redireciona para a página de login após o alerta
                            window.location.href = '/dashboard/lojistas';
                        });
                    }
                },
                error: function () {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro de conexão!',
                        text: 'Não foi possível verificar o CNPJ. Tente novamente.',
                        confirmButtonText: 'Ok'
                    });
                }
            });
        }
    });
});

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cnpj.length !== 14) return false;

    // Elimina CNPJs com todos os dígitos iguais
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Cálculo dos dígitos verificadores
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho++;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    return resultado === parseInt(digitos.charAt(1));
}

// Evento de validação no campo loj_cnpj
$(document).ready(function () {
    $('#loj_cnpj').on('blur', function () {
        const cnpj = $(this).val();
        if (validarCNPJ(cnpj)) {
            Swal.fire({
                icon: 'success',
                title: 'CNPJ válido',
                text: 'O CNPJ digitado está correto!',
                confirmButtonColor: '#28a745',
            });
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'CNPJ inválido',
                text: 'Por favor, verifique o CNPJ digitado.',
                confirmButtonColor: '#dc3545',
            });
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });
});

function aplicarMascaraCNPJ(campo) {
    $(campo).on('input', function () {
        let cnpj = $(this).val();

        // Remove caracteres que não sejam números
        cnpj = cnpj.replace(/\D/g, '');

        // Aplica a máscara
        if (cnpj.length <= 14) {
            cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
            cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
            cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
        }

        // Atualiza o valor do campo com a máscara
        $(this).val(cnpj);
    });
}

// Chamada da função para o campo loj_cnpj
$(document).ready(function () {
    aplicarMascaraCNPJ('#loj_cnpj');
});

$(document).ready(function () {
    $("#cad_lojista").on("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário antes da validação
        let isValid = true;

        // Valida campos obrigatórios
        $("#cad_lojista .form-control").each(function () {
            const campo = $(this);
        
            // Verifica se o campo não é o loj_complemento
            if (campo.attr('id') !== 'loj_complemento') {
                if (campo.val().trim() === "") {
                    campo.addClass("is-invalid");
                    isValid = false;
                } else {
                    campo.removeClass("is-invalid").addClass("is-valid");
                }
            }
        });

        // Valida CNPJ
        const cnpj = $("#loj_cnpj").val();
        if (!validarCNPJ(cnpj)) {
            $("#loj_cnpj").addClass("is-invalid");
            isValid = false;
        } else {
            $("#loj_cnpj").removeClass("is-invalid").addClass("is-valid");
        }

        // Valida e-mail
        const email = $("#log_email").val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#log_email").addClass("is-invalid");
            isValid = false;
        } else {
            $("#log_email").removeClass("is-invalid").addClass("is-valid");
        }

        // Valida força da senha
        const senha = $("#log_senha").val();
        if (!validarForcaSenha(senha)) {
            $("#log_senha").addClass("is-invalid");
            $("#forca_senha")
                .text("A senha deve ter ao menos 8 caracteres, incluindo letras, números e símbolos.")
                .css("color", "red");
            isValid = false;
        } else {
            $("#log_senha").removeClass("is-invalid").addClass("is-valid");
            $("#forca_senha").text("Senha forte.").css("color", "green");
        }

        // Valida confirmação de senha
        const confirmacaoSenha = $("#log_senha_c").val();
        if (senha !== confirmacaoSenha) {
            $("#log_senha_c").addClass("is-invalid");
            isValid = false;
        } else {
            $("#log_senha_c").removeClass("is-invalid").addClass("is-valid");
        }

        // Mensagens de validação com SweetAlert
        if (isValid) {
            Swal.fire({
                icon: "success",
                title: "Formulário válido!",
                text: "Tudo está correto. Enviando o formulário...",
            }).then(() => {
                this.submit(); // Envia o formulário após a confirmação
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Erro na validação",
                text: "Por favor, corrija os erros antes de enviar o formulário.",
            });
        }
    });

    // Função de validação de CNPJ
    function validarCNPJ(cnpj) {
        cnpj = cnpj.replace(/\D/g, "");

        if (cnpj.length !== 14) return false;

        // Verifica se todos os dígitos são iguais
        if (/^(\d)\1+$/.test(cnpj)) return false;

        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado !== parseInt(digitos.charAt(0))) return false;

        tamanho++;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        return resultado === parseInt(digitos.charAt(1));
    }

    // Função para validar a força da senha
    function validarForcaSenha(senha) {
        const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return senhaRegex.test(senha);
    }
});





$(document).ready(function () {
    $("#cad_segmento").on("click", function () {
        // Captura os valores dos campos
        const segmento = $("#segmento").val();
        const slo_tipo = $("input[name='slo_tipo']:checked").val();
        const lojistaId = $("#fk_lojistas_loj_id").val();

        // Valida os campos
        if (segmento === "Selecione o Segmento" || !slo_tipo) {
            Swal.fire({
                icon: "warning",
                title: "Campos obrigatórios!",
                text: "Por favor, selecione um segmento e o tipo de atuação.",
                confirmButtonText: "OK",
            });
            return;
        }

        // Envia os dados via AJAX
        $.ajax({
            url: "/dashboard/lojista/salvar_segmento",
            type: "POST",
            data: {
                segmento: segmento,
                slo_tipo: slo_tipo,
                lojistaId: lojistaId,
            },
            success: function (response) {
                if (response.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Sucesso!",
                        text: "Segmento cadastrado com sucesso.",
                        confirmButtonText: "OK",
                    }).then(() => {
                        // Fechar o modal e atualizar a página (se necessário)
                        $("#meuModal").modal("hide");
                        location.reload(); // Recarregar a página
                    });
                } else {
                    $("#meuModal").modal("hide");
                    location.reload(); // Recarregar a página
                }
            }/* ,
            error: function () {
                Swal.fire({
                    icon: "error",
                    title: "Erro!",
                    text: "Não foi possível conectar ao servidor. Tente novamente.",
                    confirmButtonText: "OK",
                });
            }, */
        });
    });
});


$(document).ready(function () {
    // Máscara para valor monetário
    $('#pon_valor').mask('000.000.000.000.000,00', { reverse: true });

    // Datepicker para o campo de data
    $('#pon_data_cadastro').datepicker({
        dateFormat: 'dd/mm/yy', // Formato Brasileiro
        changeMonth: true,
        changeYear: true,
        maxDate: 0, // Não permite datas futuras
        showButtonPanel: true
    });

    // Validação do formulário
    $('#cad_lojista').on('submit', function (e) {
        const nomeCliente = $('#pon_nome_cliente').val().trim();
        const valor = $('#pon_valor').val().trim();
        const dataCadastro = $('#pon_data_cadastro').val().trim();
        const profissional = $('#fk_profissionais_pro_id').val();

        if (!nomeCliente || !valor || !dataCadastro || profissional === 'Selecione o Profissional') {
            e.preventDefault(); // Impede o envio do formulário
            alert('Todos os campos são obrigatórios. Preencha todos os campos antes de continuar.');
        }
    });
});