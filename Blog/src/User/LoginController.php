<?php

namespace App\User;
use App\Core\AbstractController;

class LoginController extends AbstractController {

  public function __construct(LoginService $loginService) {
    $this->loginService = $loginService;
  }

  public function logout() {
    $this->loginService->logout();
    header('location: login');
  }

  public function dashboard() {
    if ($this->loginService->check()) {
      $this->render('user/dashboard', []);
    } else {
      header('location: login');
    }
  }

  public function login() {
    if (isset($_POST["username"]) AND isset($_POST["password"])) {
      $error = "Die Nutzerdaten stimmen nicht überein.";

      $username = $_POST["username"];
      $password = $_POST["password"];

      if ($this->loginService->attempt($username, $password)) {
        $error = null;
        header('location: dashboard');
      }
    }

    $this->render("user/login", [
      "error" => $error
    ]);
  }

}

?>