<?php

// Transforma a senha dos inserts em hashs
require 'Connection.php';

class MigrarSenhas extends \FW\DB\Connection
{
    public function migrar()
    {
        $conn = $this->getConn();

        $sql = "SELECT USU_ID, USU_SENHA FROM USUARIOS";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $usuarios = $stmt->fetchAll(\PDO::FETCH_ASSOC);

        foreach ($usuarios as $usuario) {
            $usuId = $usuario['USU_ID'];
            $senhaAntiga = $usuario['USU_SENHA'];

            if (password_get_info($senhaAntiga)['algo'] == 0) {
                $senhaHash = password_hash($senhaAntiga, PASSWORD_DEFAULT);

                $sqlUpdate = "UPDATE USUARIOS SET USU_SENHA = :senhaHash WHERE USU_ID = :usuId";
                $stmtUpdate = $conn->prepare($sqlUpdate);
                $stmtUpdate->bindParam(':senhaHash', $senhaHash);
                $stmtUpdate->bindParam(':usuId', $usuId);
                $stmtUpdate->execute();
            }
        }

        echo "Migração de senhas concluída com sucesso!";
    }
}

// Executa a migração
$migracao = new MigrarSenhas();
$migracao->migrar();
