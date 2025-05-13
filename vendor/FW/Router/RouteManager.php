<?php

namespace FW\Router;

use FW\DB\Connection;

class RouteManager {
    private static $instance;
    private $routes = [];
    
    private function __construct() {
        $this->loadRoutesFromDatabase();
    }
    
    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    private function loadRoutesFromDatabase() {
        $conexao = new Connection();
        // Conecta ao banco e busca a rota
        $sql = "SELECT * FROM routes WHERE status = 1";
        $stmt = $conexao->getConn()->prepare($sql);
        $stmt->execute();
        $this->routes = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    
    
    
    public function getAllRoutes() {
        return $this->routes;
    }
    
    public function clearCache() {
        $this->loadRoutesFromDatabase();
    }


    public function getRouteBySlug($requestUri) {
        $baseRoute = explode('?', $requestUri)[0];
        $requestPath = trim($baseRoute, '/');
        
        foreach ($this->routes as $route) {
            if ($route['is_dynamic']) {
                // Se for rota dinâmica, usa expressão regular
                $pattern = $this->convertPatternToRegex($route['pattern']);
                if (preg_match($pattern, $requestPath, $matches)) {
                    $route['params'] = $this->extractParams($matches);
                    return $route;
                }
            } else {
                // Rota estática normal
                if ($route['slug'] === $requestPath) {
                    return $route;
                }
            }
        }
        return null;
    }

    private function convertPatternToRegex($pattern) {
        // Converte padrão como "empresa/{id}" para regex
        $regex = preg_replace('/\{([a-z]+)\}/', '(?P<$1>[^\/]+)', $pattern);
        return '@^' . $regex . '$@';
    }

    private function extractParams($matches) {
        $params = [];
        foreach ($matches as $key => $value) {
            if (is_string($key)) {
                $params[$key] = $value;
            }
        }
        return $params;
    }
}