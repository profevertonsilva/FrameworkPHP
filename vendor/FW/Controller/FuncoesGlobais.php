<?php

namespace FW\Controller;



class FuncoesGlobais{

    function popularModel($model, $data) {
        foreach ($data as $key => $value) {
            // Chama o método mágico __set diretamente para atribuir o valor à propriedade
            $model->__set($key, $value);
        }
    }

    function converterData($data) {
        // Verifica se a data está no formato dd/mm/yyyy
        if (preg_match('/^\d{2}\/\d{2}\/\d{4}$/', $data)) {
            $partes = explode('/', $data); // Divide a string pelo delimitador "/"
            return $partes[2] . '-' . $partes[1] . '-' . $partes[0]; // Converte para formato yyyy-mm-dd
        }
    
        // Verifica se a data está no formato yyyy-mm-dd
        if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $data)) {
            $partes = explode('-', $data); // Divide a string pelo delimitador "-"
            return $partes[2] . '/' . $partes[1] . '/' . $partes[0]; // Converte para formato dd/mm/yyyy
        }
    
        // Retorna vazio se a data não estiver em um formato válido
        return '';
    }

    function limparTelefone($telefone) {
        // Remove todos os caracteres que não sejam números
        return preg_replace('/\D/', '', $telefone);
    }

    function formatarNumeroParaMoeda($numero) {
        // Converte o número para float e divide por 100
        $valorFormatado = number_format($numero, 2, ',', '.');
        return $valorFormatado;
    }

    function converterValorParaNumerico($valor) {
        // Remove os pontos do separador de milhar
        $valorSemPontos = str_replace('.', '', $valor);
    
        // Substitui a vírgula pelo ponto para o separador decimal
        $valorConvertido = str_replace(',', '.', $valorSemPontos);
    
        return $valorConvertido;
    }

    function formatarTelefone($numero) {
        // Verifica se o número tem o tamanho esperado (11 dígitos para celulares com DDD)
        if (strlen($numero) == 11) {
            $ddd = substr($numero, 0, 2); // Extrai os dois primeiros dígitos (DDD)
            $parte1 = substr($numero, 2, 5); // Extrai os próximos cinco dígitos
            $parte2 = substr($numero, 7, 4); // Extrai os últimos quatro dígitos
            return "($ddd) $parte1-$parte2";
        } elseif (strlen($numero) == 10) {
            // Para telefones fixos no formato com 10 dígitos
            $ddd = substr($numero, 0, 2);
            $parte1 = substr($numero, 2, 4);
            $parte2 = substr($numero, 6, 4);
            return "($ddd) $parte1-$parte2";
        } else {
            // Retorna o número original se não for possível formatar
            return $numero;
        }
    }


}
