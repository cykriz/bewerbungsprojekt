<?php
  require __DIR__ . "/../layouts/header.php";
?>

<h1><?php echo e($post['title']); ?>
</h1>
<p>
  <?php echo nl2br(e($post['content'])); ?>
</p>
<h2>Kommentare</h2>
<?php
  if (!$comments) {
      echo "<p>Noch keine Kommentare vorhanden.</p>";
  }
?>
<ul class="list-group">
  <?php foreach ($comments as $comment): ?>
  <li class="list-group-item">
    <?php echo nl2br(e($comment->content)); ?>
  </li>
  <?php endforeach ?>
</ul>
<h2>Kommentar hinzufügen</h2>
<form
  action="post?id=<?php echo e($post['id']); ?>"
  method="POST">
  <textarea class="form-control" name="content" id="content" cols="30" rows="10"></textarea>
  <input type="submit" value="Senden" class="btn btn-primary">
</form>

<?php
  require __DIR__ . "/../layouts/footer.php";
