<?php

namespace App\Core;

use ArrayAccess;

abstract class AbstractModel implements ArrayAccess {

  public function offsetSet($offset, $value) {
    $this->$offset = $value;
  }

  public function offsetExists($offset) {
    return isset($this->$offset);
  }

  public function offsetUnset($offset) {
    unset($this->$offset);
  }

  public function offsetGet($offset) {
    return isset($this->$offset) ? $this->$offset : null;
  }
}

?>