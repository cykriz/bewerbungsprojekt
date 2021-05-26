<?php

namespace App\Post;

use App\Core\AbstractController;
use App\User\LoginService;

class PostsAdminController extends AbstractController
{
    public function __construct(
        PostsRepository $postsRepository,
        LoginService $loginService
    ) {
        $this->postsRepository = $postsRepository;
        $this->loginService = $loginService;
    }

    public function index()
    {
        $this->loginService->check();
        $all = $this->postsRepository->all();
        $this->render('post/admin/index', [
      "all" => $all
    ]);
    }

    public function edit()
    {
        $id = $_GET['id'];
        $entry = $this->postsRepository->find($id);

        $savedSuccess = false;

        if (!empty($_POST['content']) and !empty($_POST['title'])) {
            // So würde der neue Beitrag in er DB gespeichert werden:
            // $entry->content = $_POST['content'];
            // $entry->title = $_POST['title'];
            // $this->postsRepository->update($entry);
            $entry->newTitle = $_POST['title'];
            $entry->newContent = $_POST['content'];
            $savedSuccess = true;
        }

        $this->render('post/admin/edit', [
      'entry' => $entry,
      'savedSuccess' => $savedSuccess
    ]);
    }
}
