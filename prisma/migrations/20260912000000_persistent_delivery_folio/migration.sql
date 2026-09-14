CREATE SEQUENCE "constancia_folio_seq";

ALTER TABLE "Entregas" ADD COLUMN "folio" TEXT;

CREATE INDEX "Entregas_folio_idx" ON "Entregas"("folio");
