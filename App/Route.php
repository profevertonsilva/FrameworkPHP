<?php

namespace App;

use FW\Init\Boostrap;

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


        include 'Routes/Routes_Administradores.php';
        include 'Routes/Routes_Profissionais.php';
        include 'Routes/Routes_Lojistas.php';
        include 'Routes/Routes_Login.php';
        include 'Routes/Routes_LandingPage.php';
        
        

        $this->setRoutes($routes);
    }
}
