<?php

namespace FW\Controller;

use FW\Controller\Validar;
use FW\DB\Connection;

abstract class Action implements Validar {
    private $view;
    private $params = [];
    private $routeInfo = [];

    function __construct() {
        $this->view = new \stdClass();
        $this->parseParams();
        $this->loadRouteFromDatabase();
    }

    protected function getView() {
        return $this->view;
    }

    /**
     * Carrega a rota do banco de dados com base no slug
     */
    protected function loadRouteFromDatabase() {
        $url = $_SERVER['REQUEST_URI'];
        $baseRoute = explode('?', $url)[0]; // Remove query string
        $slug = trim($baseRoute, '/');
        $conexao = new Connection();
        // Conecta ao banco e busca a rota
        $sql = "SELECT * FROM routes WHERE slug = :slug AND status = 1";
        $stmt = $conexao->getConn()->prepare($sql);
        $stmt->bindParam(':slug', $slug);
        $stmt->execute();
        
        $this->routeInfo = $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    /**
     * Retorna as informações da rota
     */
    public function getRouteInfo() {
        return $this->routeInfo;
    }

    /**
     * Processa os parâmetros da rota
     */
    protected function parseParams() {
        $url = $_SERVER['REQUEST_URI'];
        $baseRoute = explode('?', $url)[0];
        $pathParts = explode('/', trim($baseRoute, '/'));
        
        if (!empty($this->routeInfo)) {
            // Se encontrou rota no banco, os parâmetros são tudo após o slug base
            $slugParts = explode('/', $this->routeInfo['slug']);
            $this->params = array_slice($pathParts, count($slugParts));
        } else {
            // Mantém o comportamento original para rotas não encontradas
            if (count($pathParts) >= 3) {
                array_shift($pathParts);
                array_shift($pathParts);
                array_shift($pathParts);
                $this->params = $pathParts;
            } else {
                $this->params = [];
            }
        }
    }

    protected function getParams() {
        return $this->params;
    }

    protected function render($view, $layout, $include = '') {
        $this->view->page = $view;
        $this->view->include = $include;

        if (file_exists("App/View/$layout.php")) {
            require_once "App/View/$layout.php";
        } else {
            $this->content();
        }
    }

    protected function content() {
        $classeAtual = get_class($this);
        $classeAtual = str_replace('App\\Controller\\', '', $classeAtual);
        $classeAtual = strtolower(str_replace('Controller', '', $classeAtual));

        require_once "App/View/$classeAtual/" . $this->view->page . ".php";
    }
}