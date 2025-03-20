<?php

namespace App;

use FW\DB\Connection;

abstract class DAO extends Connection
{

    protected $conn;
    protected $sql;
    protected $resultado;
    protected $tabela;

    public abstract function inserir($obj);
    public abstract function excluir($obj);
    public abstract function alterar($obj);
    public abstract function buscarPorId($obj);
    public abstract function listar();

    
}
