<?php

session_start();

require __DIR__ . "/../init.php";

$pathInfo = '';
$urilen = strlen($_SERVER['REQUEST_URI']);

for ($i=0; $i < $urilen; $i++) {
    if (substr($_SERVER['REQUEST_URI'], $i, 1) !== '?') {
        $pathInfo .= substr($_SERVER['REQUEST_URI'], $i, 1);
    } else {
        break;
    }
}

// echo $pathInfo;
// die();

// if (is_null($pathInfo)) {
//     $pathInfo = '/index';
// }

// echo '<br><br><br><br><br><br><br><br>';
// var_dump($pathInfo);

$routes = [
  "/" => [
    "controller" => "postsController",
    "method" => "index"
  ],
  "" => [
    "controller" => "postsController",
    "method" => "index"
  ],
  "/index" => [
    "controller" => "postsController",
    "method" => "index"
  ],
  "/post" => [
    "controller" => "postsController",
    "method" => "post"
  ],
  "/login" => [
    "controller" => "loginController",
    "method" => "login"
  ],
  "/dashboard" => [
    "controller" => "loginController",
    "method" => "dashboard"
  ],
  "/logout" => [
    "controller" => "loginController",
    "method" => "logout"
  ],
  "/posts-admin" => [
    "controller" => "postsAdminController",
    "method" => "index"
  ],
  "/post-edit" => [
    "controller" => "postsAdminController",
    "method" => "edit"
  ]
  ];

if (isset($routes[$pathInfo])) {
    $route = $routes[$pathInfo];
    $controller = $container->make($route["controller"]);
    $method = $route["method"];
    $controller->$method();
} else {
    echo "404 – Seite nicht gefunden.";
}
