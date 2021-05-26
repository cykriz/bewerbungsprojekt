<?php
namespace App\Core;

use PDO;
use Exception;
use PDOException;
use App\Comment\CommentsRepository;
use App\Post\PostsRepository;
use App\Post\PostsController;
use App\Post\PostsAdminController;
use App\User\UserRepository;
use App\User\LoginController;
use App\User\LoginService;

class Container
{
    private $receipts = [];
    private $instances = [];

    public function __construct()
    {
        $this->receipts = [
      'postsAdminController' => function () {
          return new postsAdminController(
              $this->make('postsRepository'),
              $this->make('loginService')
          );
      },
      'loginService' => function () {
          return new LoginService(
              $this->make('userRepository')
          );
      },
      'loginController' => function () {
          return new LoginController(
              $this->make('loginService')
          );
      },
      'postsController' => function () {
          return new PostsController(
              $this->make('postsRepository'),
              $this->make('commentsRepository')
          );
      },
      'postsRepository' => function () {
          return new PostsRepository(
              $this->make("pdo")
          );
      },
      'commentsRepository' => function () {
          return new CommentsRepository(
              $this->make("pdo")
          );
      },
      'userRepository' => function () {
          return new UserRepository(
              $this->make("pdo")
          );
      },
      'pdo' => function () {
          try {
              $host = $_ENV['DB_HOST'] ?? null;
              $port =  $_ENV['DB_PORT'] ?? null;
              $database = $_ENV['DB_DATABASE_DEMO_BLOG'] ?? null;
              $user = $_ENV['DB_USER'] ?? null;
              $password = $_ENV['DB_PASSWORD'] ?? null;
            
              $pdo = new PDO(
                  "mysql:host=$host:$port;dbname=$database;charset=utf8",
                  $user,
                  $password
              );
          } catch (PDOException $e) {
              echo "Die Verbindung zur Datenbank ist fehlgeschlagen.";
              die();
          }
          $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
          return $pdo;
      }
    ];
    }

    public function make($name)
    {
        if (!empty($this->instances[$name])) {
            return $this->instances[$name];
        }

        if (isset($this->receipts[$name])) {
            $this->instances[$name] = $this->receipts[$name]();
        }

        return $this->instances[$name];
    }
}
