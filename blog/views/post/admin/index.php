<?php
  require __DIR__ . "/../../layouts/header.php";
  // var_dump($all);
?>
<a href="dashboard" class="back">Dashboard</a>
<h1>Posts verwalten</h1>
<ul>
<?php foreach ($all AS $entry): ?>
  <a href="post-edit?id=<?php echo e($entry->id) ?>">
    <li><?php echo $entry->title ?></li>
  </a>
<?php endforeach; ?>
</ul>

<?php
  require __DIR__ . "/../../layouts/footer.php";
?>