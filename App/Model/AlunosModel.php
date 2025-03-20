<?php

namespace App\Model;

class AlunosModel
{
    private $aln_id;
    private $aln_nome;
    private $aln_telefone;
    private $aln_foto;
    private $fk_login_log_id;

    

    public function __set($nome, $valor)
    {
        $this->$nome = $valor;
    }

    public function __get($nome)
    {
        return $this->$nome;
    }
}
