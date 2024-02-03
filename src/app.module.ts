import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './modules/client/client.module';
import { PayablesModule } from './modules/payables/payables.module';
import { TransactionsModule } from './modules/transactions/transactions.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    ClientModule,
    PayablesModule,
    TransactionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
