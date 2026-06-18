-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ALMACENISTA',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Muestras" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "existencias" INTEGER NOT NULL,
    "umbral_minimo" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Muestras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visitadores" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "zona" TEXT NOT NULL,
    "muestras_asignadas" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visitadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregas" (
    "id" TEXT NOT NULL,
    "muestra_id" TEXT NOT NULL,
    "visitador_id" TEXT NOT NULL,
    "nombre_visitador" TEXT,
    "nombre_muestra" TEXT,
    "cantidad" INTEGER NOT NULL,
    "fecha" DATE NOT NULL,
    "hora" TIME NOT NULL,
    "estado" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logs_Inventario" (
    "id" TEXT NOT NULL,
    "muestra_id" TEXT,
    "tipo_movimiento" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "descripcion" TEXT,
    "usuario_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Entregas" ADD CONSTRAINT "Entregas_muestra_id_fkey" FOREIGN KEY ("muestra_id") REFERENCES "Muestras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entregas" ADD CONSTRAINT "Entregas_visitador_id_fkey" FOREIGN KEY ("visitador_id") REFERENCES "Visitadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs_Inventario" ADD CONSTRAINT "Logs_Inventario_muestra_id_fkey" FOREIGN KEY ("muestra_id") REFERENCES "Muestras"("id") ON DELETE SET NULL ON UPDATE CASCADE;
