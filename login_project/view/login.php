<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    
    <!-- Hoja de estilos local -->
    <link rel="stylesheet" href="/trabajos_frontend/login_project/public/estilos.css">
</head>

<body>

<div class="contenedor">

    <form action="/trabajos_frontend/login_project/index.php" method="POST">
        <input type="hidden" name="action" value="login">

        <h2>Iniciar Sesión</h2>

        <input
            type="text"
            name="username"
            id="username"
            placeholder="Usuario"
            required
        >

        <div class="password-box">
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                required
            >

            <span id="verPassword">
                <i class="fa-solid fa-eye"></i>
            </span>
        </div>

        <button type="submit">
            Iniciar Sesión
        </button>

        <p class="signup-text">
                    ¿No tienes una cuenta? <a href="/trabajos_frontend/login_project/view/register.php">Regístrate</a>
        
        </p>

        <?php if (!empty($mensaje)): ?>
            <p id="mensaje"><?php echo htmlspecialchars($mensaje); ?></p>
        <?php endif; ?>
    </form>

</div>

<script>
    </p class="verPassword-text">
const verPassword = document.getElementById("verPassword");
const password = document.getElementById("password");

if (verPassword && password) {
    verPassword.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            verPassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            password.type = "password";
            verPassword.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
}
</script>

</body>
</html>