<?php

//Carrega a Dashboard de Alunos
$routes['Dashboard_alunos'] = array(
    'route' => '/dashboard/alunos',
    'controller' => 'AlunosController',
    'action' => 'dashboard'
);

//Carrega o Formulário de Cadastro de Alunos
$routes['cadastrar_alunos'] = array(
    'route' => '/dashboard/alunos/cadastrar',
    'controller' => 'AlunosController',
    'action' => 'cadastrar'
);


//Salvar Cadastro de Alunos
$routes['Salvar_Cadastro_alunos'] = array(
    'route' => '/dashboard/alunos/salvar',
    'controller' => 'AlunosController',
    'action' => 'salvar'
);