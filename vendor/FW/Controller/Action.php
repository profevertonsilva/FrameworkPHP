<?php

namespace FW\Controller;

use FW\Controller\Validar;

abstract class Action implements Validar {

    private $view;
    private $params = [];

    function __construct() {
        $this->view = new \stdClass();
        $this->parseParams();
    }

    protected function getView() {
        return $this->view;
    }

    /**
     * Processa os parâmetros da rota a partir da URL.
     */
    protected function parseParams() {
        $url = $_SERVER['REQUEST_URI'];
        $baseRoute = explode('?', $url)[0]; // Remove os parâmetros de query string
        $pathParts = explode('/', trim($baseRoute, '/'));

        // Verifica se a URL segue o formato esperado (dashboard/controller/action/param)
        if (count($pathParts) >= 3) {
            // Remove partes fixas da rota (dashboard/controller/action)
            array_shift($pathParts); // Remove "dashboard"
            array_shift($pathParts); // Remove o nome do controlador
            array_shift($pathParts); // Remove o nome da ação

            // Armazena os parâmetros restantes
            $this->params = $pathParts;
        } else {
            $this->params = []; // Nenhum parâmetro extra na URL
        }
    }

    /**
     * Retorna os parâmetros extraídos da URL.
     */
    protected function getParams() {
        return $this->params;
    }

    /**
     * Renderiza a view com ou sem layout.
     */
    protected function render($view, $layout, $include = '') {
        $this->view->page = $view;
        $this->view->include = $include;

        if (file_exists("App/View/$layout.php")) {
            require_once "App/View/$layout.php";
        } else {
            $this->content();
        }
    }

    /**
     * Renderiza diretamente o conteúdo da view sem layout.
     */
    protected function content() {
        $classeAtual = get_class($this);
        $classeAtual = str_replace('App\\Controller\\', '', $classeAtual);
        $classeAtual = strtolower(str_replace('Controller', '', $classeAtual));

        require_once "App/View/$classeAtual/" . $this->view->page . ".php";
    }
}
