<?php
namespace App\Comment;

use App\Core\AbstractRepository;
use PDO;

class CommentsRepository extends AbstractRepository {  

  public function getTableName() {
    return "comments";
  }

  public function getModelName() {
    return "App\\Comment\\CommentModel";
  }

  public function allByPost($post_id) {
    $table = $this->getTableName();
    $model = $this->getModelName();

    $statement = $this->pdo->prepare("SELECT * FROM `$table` WHERE post_id = :post_id");
    $statement->execute(['post_id' => $post_id]);
    $comments = $statement->fetchAll(PDO::FETCH_CLASS, $model);
    return $comments;
  }

  public function saveComment($post_id, $content) {
    $table = $this->getTableName();
    $statement = $this->pdo->prepare("INSERT INTO `$table` (`content`, `post_id`) VALUES (:content, :post_id)");
    $statement->execute([
      "content" => $content,
      "post_id" => $post_id
    ]);
  }

}
?>