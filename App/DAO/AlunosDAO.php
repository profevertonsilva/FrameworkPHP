<?php

namespace App\DAO;

use App\DAO;
use App\Model\AlunosModel;
use FW\Controller\FuncoesGlobais;


class AlunosDAO extends DAO{

    public function inserir($obj) {
        try{

            $aln_nome = $obj->__get('aln_nome');
            $aln_telefone = $obj->__get('aln_telefone');
            $fk_login_log_id = $obj->__get('fk_login_log_id');

            $sql = "INSERT INTO alunos (
                        aln_nome,
                        aln_telefone,
                        fk_login_log_id
                    ) VALUES (
                        :aln_nome,
                        :aln_telefone,
                        :fk_login_log_id
                    )";
            $stmt = $this->getConn()->prepare($sql);
            $stmt->bindValue(':aln_nome', $aln_nome);   
            $stmt->bindValue(':aln_telefone', $aln_telefone);
            $stmt->bindValue(':fk_login_log_id', $fk_login_log_id);
            $stmt->execute();
        }
        catch(\PDOException $ex){
            header('Location:/error103');
            die();
        }
    }

    public function listar(){
           
        try{
            $alunos = array();
            $sql = "SELECT 
                            a.*, 
                            l.log_email 
                        FROM 
                            alunos a,
                            login l
                        WHERE
                            ad.fk_login_log_id = l.log_id
                    ";
            $stmt = $this->getConn()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);

            foreach($result as $row){
                $alunosModel = new AlunosModel();
                
                $global = new FuncoesGlobais();
                $global->popularModel($alunosModel, $row);

                array_push($alunos, $alunosModel);
            }
            return $alunos;
        }
        catch(\PDOException $ex){
            header('Location:/error103');
            die();
        }    
    }

    public function excluir($obj) {}
    public function alterar($obj) {}
    public function buscarPorId($id){ }
    public function buscarPorLogado($id){}
}
