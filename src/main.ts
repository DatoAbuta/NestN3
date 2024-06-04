import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UserGuard } from './products/user.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new UserGuard());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
