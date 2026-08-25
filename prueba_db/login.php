<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post">
        Usuario: <input type="text" name="username"><br>
        Contraseña: <input type="password" name="password"><br>
        <input type="submit" value="Ingresar">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"]== "POST") {
        $username =$_POST["username"];
        $password =$_POST["password"];
    
        // conexion a la base de datos
        $conn = new mysqli("localhost","root","","prueba_db");
        
        //verificar conexion 
        if ($conn->connect_error) {
            die("conexion fallida: ". $conn->connect_error);
        }

        // consunlta SQL vulnerable a inyecion
        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Usuario autenticado
            header("Location: principal.php");
            exit(); //Asegurate de que el script se detenga depues de la redireccion
        } else {
            echo "Usuario o contraseña incorrecto";
        }

        $conn->close();
    }
    ?>
</body>
</html>
