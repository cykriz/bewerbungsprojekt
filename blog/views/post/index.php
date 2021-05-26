<?php
  require __DIR__ . "/../layouts/header.php";
?>

<h1>Startseite des Blogs</h1>
<p>Das hier ist die Startseite des Blogs.</p>

<ul>  
  <?php foreach ($posts AS $post): ?>
    <a href="post?id=<?php echo e($post->id); ?>">
      <li><?php echo e($post->title); ?></li>
    </a>
  <?php endforeach; ?> 
</ul>

<?php
  require __DIR__ . "/../layouts/footer.php";
?>