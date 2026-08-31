<?php

class Profesor {

    private $nombre;
    private $materia;

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setMateria($materia) {
        $this->materia = $materia;
    }

    public function getMateria() {
        return $this->materia;
    }
}
?>