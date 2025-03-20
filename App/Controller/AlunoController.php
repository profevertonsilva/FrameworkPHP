<?php

namespace App\Controller;

use FW\Controller\Action;
use App\DAO\AlunosDAO;
use App\Model\AlunosModel;


class AlunosController extends Action{

    public function index(){
        $title = "alunos";
        $title_pagina = "Alunos";

        $vendedorDAO = new VendedoresDAO();
        $vendedor = $vendedorDAO->buscarPorLogado($_SESSION['log_id']);
        $this->getView()->vendedor = $vendedor;

        $this->getView()->title = $title;
        $this->getView()->title_pagina = $title_pagina;

        $this->render('index', 'dashboard');
    }
    
    
    

    public function validaAutenticacao() {

        
    }
}
