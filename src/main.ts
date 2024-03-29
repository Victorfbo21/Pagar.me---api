import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.BACKEND_PORT);
  console.log(`App is Runnig in ${process.env.BACKEND_URL_API.replace('@@@@', process.env.BACKEND_PORT)}`)
}
bootstrap();
