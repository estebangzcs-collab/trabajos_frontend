<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post">
        Usuario: <input type="text" name="username" required><br>
        Contraseña: <input type="password" name="password"><br>
        <input type="submit" value="Ingresar">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username =$_POST["username"];
        $password =$_POST["password"];
    
        // conexion a la base de datos
        $conn = new mysqli("localhost","root","","prueba_db");
        
        //verificar conexion 
        if ($conn->connect_error) {
            die("conexion fallida: ". $conn->connect_error);
        }

        // consunlta SQL no vulnerable a inyecion
        // En este cas usaremos prepared statements, esto hara que el SQL no sea vulnerable
       $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND passaword = ?");
       $stmt->bind_param("ss", $username, $password);
       $stmt->execute();
       $result = $stmt->get_result();
       
       if ($result->num_rows > 0) {
            // Usuario autenticado
            header("Location: principal.php");
            exit(); //Asegurate de que el script se detenga depues de la redireccion
        } else {
            echo "Usuario o contraseña incorrecto";
        }

        $stmt->close();
        $conn->close();
    }
    ?>
</body>
</html>
