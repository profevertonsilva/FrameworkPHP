<?php
    
    namespace FW\Init;
    
    abstract class Boostrap {
        
        private $routes;
        
        function __construct() {
            $this->initRoutes();
            $this->run($this->getUrl());
        }
        
        function getRoutes() {
            return $this->routes;
        }

        function setRoutes($routes) {
            $this->routes = $routes;
        }       
        
        protected function run($url){
            
            $rotaValida = false;
            
            foreach ($this->getRoutes() as $key => $route) {
                if ($this->matchRoute($url, $route['route'])) {
                    $class = "App\\Controller\\" . $route['controller'];
                    $controller = new $class();
                    $action = $route['action'];
                    $controller->$action($this->getParams($url, $route['route']));
                    $rotaValida = true;
                }
            }
            
            if(!$rotaValida){
                $class = "App\\Controller\\ErrorController";
                $controller = new $class();                    
                $action = "error404";
                $controller->$action();
                $rotaValida = true;
            }
            
        }

        protected function getUrl(){
            return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
            
        }
                
        abstract protected function initRoutes();
    

        function matchRoute($url, $route)
        {
            $url = explode('/', $url);
            $route = explode('/', $route);

            if (count($url) != count($route)) {
                return false;
            }

            for ($i = 0; $i < count($route); $i++) {
                if (strpos($route[$i], '{') !== false && strlen($url[$i]) > 0) {
                $route[$i] = $url[$i];
                }

                if ($route[$i] != $url[$i]) {
                return false;
                }
            }

            return true;
        }

        function getParams($url, $route)
        {
            if (strpos($route, '{') === false) {
                return null;
            }

            $params = [];
            $url = explode('/', $url);
            $route = explode('/', $route);

            for ($i = 0; $i < count($route); $i++) {
                if (strpos($route[$i], '{') !== false && strlen($url[$i]) > 0) {
                $params[] = $url[$i];
                }
            }

            return $params;
        }
    }
?>
