<?php
namespace App\Post;

use App\Core\AbstractRepository;

class PostsRepository extends AbstractRepository {

  public function getTableName() {
    return "posts";
  }

  public function getModelName() {
    return "App\\Post\\PostModel";
  }

  public function update(PostModel $model) {
    $table = $this->getTableName();
    $stmt = $this->pdo->prepare("UPDATE `{$table}` SET `content` = :content, `title` = :title WHERE `id`= :id ");
    $stmt->execute([
      'title' => $model->title,
      'content' => $model->content,
      'id' => $model->id,
    ]);
  }
}
?>