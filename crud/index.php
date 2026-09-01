<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Crud php y MySQL</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" 
	integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
	<script src="https://kit.fontawesome.com/edf14e2fc0.js" crossorigin="anonymous"></script>
</head>

<body>
	<h1 class="text-center p-3">Hola, bienvenido</h1>
	<div class="container-fluid row">
		<form class="col-4" p-3>
			<h3 class="text-center text-secondary">Registro de personas</h3>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Nombre</label>
				<input type="text" class="form-control" name="nombre">
			</div>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Apellido</label>
				<input type="text" class="form-control" name="apellido">
			</div>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Documento</label>
				<input type="text" class="form-control" name="documento">
			</div>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">fecha de nacimiento</label>
				<input type="date" class="form-control" name="fecha">
			</div>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">correo</label>
				<input type="text" class="form-control" name="correo">
			</div>

			<button type="submit" class="btn btn0-primary/" name="btnregistrar" value="ok">Registrar</button>
		</form>
		<div class="col-8 p-4">
			<table class="table">
				<thead class="bg-info">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Documento</th>
					    <th scope="col">Fecha de nacimiento</th>
				        <th scope="col">Correo</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>
							<a herf="" class="btn btn-small btn-warning"><i class="fa-solid fa-pen-to-square"></i></a>																			
							<a herf="" class="btn btn-small btn-danger"><i class="fa-solid fa-trash"></i></a>	
						</td>
					</tr>
					
				</tbody>
			</table>
		</div>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" 
	integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" 
	crossorigin="anonymous"></script>
</body>

</html>