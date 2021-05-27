<?php
  require __DIR__ . "/../../layouts/header.php";
  // var_dump($all);
?>
<a href="posts-admin" class="back">Zurück</a>
<h1>Post bearbeiten</h1>

<h3>Titel</h3>

<form method="POST"
  action="post-edit?id=<?php echo e($entry->id) ?>">
  <input type="text" name="title" id="title"
    value="<?php echo e($entry->title) ?>">
  <h3>Inhalt</h3>
  <textarea name="content" id="content" cols="30"
    rows="10"><?php echo e($entry->content) ?></textarea>
  <input type="submit" value="Ändern" class="float-right">
</form>


<?php if (!empty($savedSuccess)): ?>
<p class="clearfix">Änderung erfolgreich registriert.<br>Folgende Informationen wären jetzt in der Datenbank gespeichert
  worden:</p>
<div style="border: 1px solid var(--myred); padding: 1rem">

  <?php if (empty($entry->deleted)) { ?>
  <h3><?= e($entry->newTitle); ?>
  </h3>
  <p><?= nl2br(e($entry->newContent)); ?>
  </p>
  <?php } else { ?>
  <p>Alle Inhalte des Eintrags wurden gelöscht.</p>
  <?php } ?>
</div>

<?php endif ?>

<?php
  require __DIR__ . "/../../layouts/footer.php";
