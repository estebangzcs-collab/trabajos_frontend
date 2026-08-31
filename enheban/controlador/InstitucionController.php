
    <?php
    class InstitucionController{

    public function index(){
        include("Institucion.php");
    $institucion = new Institucion();

    include("Profesor.php");
    $profesor = new Profesor();

    include("Materia.php");
    $ingles = new Materia();

    include("Estudiante.php");
    $enheban = new Estudiante();

    $institucion->setNombre("Institucion Educativa Departamental Pablo Neruda");
    
    $profesor->setNombre("Ms. Vargas");
    $profesor->setMateria($ingles);
    
    $ingles->setNombre("Ingles");
    $ingles->setEstudiante($enheban);

    $enheban-> setNombre("Enheban");
    // echo $enheban->getNombre();
    $institucion->setProfesor($profesor);
    $institucion->setMateria($ingles);

    echo "<b>Nombre de la institucion es: </b>".
    $institucion->getNombre()."<br>";
   
    echo "<b>El nombre del profesor es: </b>".
    $institucion->getProfesor()->getNombre()."<br>";

    echo "<b>La materia del profesor es: </b>".
    $institucion->getMateria()->getNombre()."<br>";

    echo "<b>Nombre del estudiante es: </b>".
    $institucion->getProfesor()->getMateria()->getEstudiante()->getNombre()."<br>";

    echo "<br>";

    }
    }
    
    ?>
