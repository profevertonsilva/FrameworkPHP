<?php

namespace App;

use FW\Init\Boostrap;
use FW\Router\RouteManager;

class Route extends Boostrap
{

    public function initRoutes()
    {

        //Não excluir a Rota abaixo
        $routes['error-404'] = array(
            'route' => '/error404',
            'controller' => 'ErrorController',
            'action' => 'error404'
        );


        $routeManager = RouteManager::getInstance();
        $dbRoutes = $routeManager->getAllRoutes();

        
        foreach ($dbRoutes as $dbRoute) {
            $routes[$dbRoute['nome_rota']] = array(
                'route' => '/' . $dbRoute['slug'],
                'controller' => $dbRoute['controller'],
                'action' => $dbRoute['action'],
                'is_dynamic' => $dbRoute['is_dynamic'],
                'pattern' => $dbRoute['pattern'] ?? null
            );
        }

        
        

        $this->setRoutes($routes);
    }
}
