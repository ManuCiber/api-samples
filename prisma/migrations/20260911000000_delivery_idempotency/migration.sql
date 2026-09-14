CREATE TABLE "OperacionEntrega" (
 "clave" TEXT PRIMARY KEY,
 "huella" TEXT NOT NULL,
 "respuesta" JSONB,
 "creada_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
