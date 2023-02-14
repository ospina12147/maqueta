<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="assets/img/iconooo.ico">
    <link rel="stylesheet" href="assets/Css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <main>
        <div class="Contenedor_todo">
            <div class="caja_trasera">
                <div class="caja_trasera_login">
                    <h3>¿ Ya tienes una cuenta ?</h3>
                    <p>Iniciar sesion para entrar en la pagina</p>
                    <button id="btn_iniciar_sesion"> iniciar sesion</button>
                </div>
                <div class="caja_trasera_register">
                    <h3>¿ Aun no tienes cuenta?</h3>
                    <p>Registrate para que puedas iniciar sesion</p>
                    <button id="btn_register"> Registrarse</button>
                </div>
            </div>
            <div class="contenedor_login_register">
                <form action="" class="formulario_login">
                    <h2>Iniciar sesion</h2>
                    <input type="text" placeholder="Correo Electronico">
                    <input type="password" placeholder="Contraseña">
                    <button> Entrar</button>
                </form>
                <!-- Aqui registramos-->
                <div class="contenedor_register">
                    <form accept="" class="formulario_register">
                        <h2> Registrarse </h2>
                        <input type="text" placeholder="Nombre Completo">
                        <input type="text" placeholder="Correo Electronico">
                        <input type="text" placeholder="Usuario">
                        <input type="password" placeholder="Contraseña">
                        <button> Registrarse </button>
                    </form>
                </div>
            </div>
    </main>

    <script src="./assets/js/script.js">
    </script>

</body>

</html>