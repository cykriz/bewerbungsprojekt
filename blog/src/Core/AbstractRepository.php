<?php

namespace App\Core;

use PDO;

abstract class AbstractRepository {

  protected $pdo;

  public function __construct(PDO $pdo) {
    $this->pdo = $pdo;
  }

  abstract public function getTableName();
  
  abstract public function getModelName();
  
  function all() {
    $table = $this->getTableName();
    $model = $this->getModelName();
    $statement = $this->pdo->query("SELECT * FROM `$table`");
    
    $posts = $statement->fetchAll(PDO::FETCH_CLASS, $model);
    return $posts;
  }
  
  function find($id) {
    $table = $this->getTableName();
    $model = $this->getModelName();
    $statement = $this->pdo->prepare("SELECT * FROM `$table` WHERE id = :id");
    $statement->execute(['id' => $id]);
    $statement->setFetchMode(PDO::FETCH_CLASS, $model);
    $post = $statement->fetch(PDO::FETCH_CLASS);
    return $post;
  }

}
?>