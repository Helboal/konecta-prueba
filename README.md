# Prueba Konecta

## Requerimientos
```
PHP versión 8.0.8 o 8.1
```

```
Composer versión 2.4.2 
```

```
Node versión v16.13.0
```

```
npm versión 8.1.0
```

## Project setup
```
composer install
```

```
Se debe copiar el archivo crear el archivo .env apartir del .env.example, en este se deben configurar las variables de entorno para la conexión a la base de datos
DB_HOST=url
DB_PORT=puerto
DB_DATABASE=nombre_base_de_datos
DB_USERNAME=usuario_base_de_datos
DB_PASSWORD=_contraseña_base_de_datos
```

```
php artisan key:generate
```

```
php artisan migrate => Esto creará la estructura de la base de datos.
```

```
php artisan db:seed => Esto insertará datos semilla a las tablas.
```

```
npm install
```

```
npm run dev => Es posible que se solicite ejecutar por segunda vez.
```

```
php artisan serve => Lanzará un servidor en localhost para probar el proyecto.
```

