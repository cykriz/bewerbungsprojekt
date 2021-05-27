<?php
include __DIR__ . "/../layouts/header.php";
?>

<div id="form-container">
  <p class="text-center" id="test-user">Es wurde folgender Test-User angelegt:
    <br>Name: test, Passwort: test123
  </p>
  <form action="login" method="post">
    <div>
      <label for="username">Name</label>
      <input type="text" name="username" id="username" required />
    </div>
    <div>
      <label for="password">Passwort</label>
      <input type="password" name="password" id="username" required />
    </div>
    <input type="submit" value="Einloggen">
  </form>

  <?php if (isset($error)): ?>
  <div class="error">
    <?php echo $error; ?>
  </div>
  <?php endif; ?>
</div>

<?php
include __DIR__ . "/../layouts/footer.php";
