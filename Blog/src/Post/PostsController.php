<?php

namespace App\Post;
use App\Core\AbstractController;
use App\Comment\CommentsRepository;

class PostsController extends AbstractController {

  public function __construct(
    PostsRepository $postsRepository,
    CommentsRepository $commentsRepository
    ) {
    $this->postsRepository = $postsRepository;
    $this->commentsRepository = $commentsRepository;
  }

  public function index() {
    $posts = $this->postsRepository->all();

    $this->render(
      "post/index", 
      ["posts" => $posts]
    );
  }

  public function post() {
    $id = $_GET['id'];

    if (isset($_POST) AND !empty($_POST['content'])) {
      $content = $_POST['content'];
      $this->commentsRepository->saveComment($id, $content);
    }

    $post = $this->postsRepository->find($id);
    $comments = $this->commentsRepository->allByPost($id);
    
    $this->render(
      "post/post",
      [
        "post" => $post,
        "comments" => $comments,
        "comment" => $comment
      ]
    );
  }

}


?>