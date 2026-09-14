# Idempotencia de entregas por lote

POST /api/deliveries/batch requiere la cabecera Idempotency-Key con un UUID v4.
La clave identifica un lote concreto. Repetir clave y contenido devuelve las mismas entregas sin otro descuento; cambiar contenido o usuario devuelve 409.
La huella ordena los productos e incluye el visitador, las cantidades y el usuario. La tabla OperacionEntrega y el inventario se escriben en una sola transaccion. No borrar operaciones confirmadas mientras puedan existir reintentos.

## Despliegue

1. Aplicar la migracion prisma/migrations/20260911000000_delivery_idempotency/migration.sql mediante prisma migrate deploy en el entorno de destino.
2. Publicar backend y frontend coordinadamente: el frontend anterior no envia la cabecera requerida. Durante la actualizacion, detener temporalmente el registro de entregas o usar una ventana de mantenimiento.
3. Servir el frontend por HTTPS (localhost tambien admite Web Locks). El navegador conserva clave y lote en localStorage, separados por URL de API. No borrar el almacenamiento mientras exista una entrega pendiente.
4. Comprobar la recuperacion del mismo lote despues de interrumpir la respuesta.

La migracion de produccion y el despliegue NO se ejecutaron automaticamente.

## Pruebas locales

node --test test/deliveries.integration.cjs

Requiere TEST_DATABASE_URL apuntando a PostgreSQL local y a una base exclusiva cuyo nombre termine en _integration_test. Aplicar previamente las migraciones. Las pruebas usan registros propios y los eliminan al terminar; nunca cargar la URL de produccion en esta variable.

En el frontend: node --test tests/*.test.cjs

El endpoint individual POST /api/deliveries conserva su comportamiento anterior. La proteccion de claves se aplica al endpoint por lote que utiliza la aplicacion.
