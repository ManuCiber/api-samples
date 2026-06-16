import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http_exception.filters';
import { envs } from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  
  const logger = new Logger('Sample - App');
  
  await app.listen(envs.PORT || 3000);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('Api Almacén Muestras Medicas')
  .setDescription('Sistema Backend avanzado para la gestión de inventario y entrega de muestras medicas a visitadores medicos')
  .setVersion('1.0.0')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document)
  
  logger.log(`Server running on port ${envs.PORT || 3000}`);
}
bootstrap();
