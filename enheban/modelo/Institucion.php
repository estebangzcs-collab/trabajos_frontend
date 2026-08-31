<?php

class Institucion {

    private $nombre;
    private $profesor;

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function setProfesor($profesor) {
        $this->profesor = $profesor;
    }

    public function getProfesor() {
        return $this->profesor;
    }
    public function setMateria($materia) {
        $this->materia = $materia;
    }
    public function getMateria() {
        return $this->materia;
    }
}
?>