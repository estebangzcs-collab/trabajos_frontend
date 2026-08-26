<?php

class Materia {

    private $nombre;
    private $estudiante;

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setEstudiante($estudiante) {
        $this->estudiante = $estudiante;
    }

    public function getEstudiante() {
        return $this->estudiante;
    }
}
?>