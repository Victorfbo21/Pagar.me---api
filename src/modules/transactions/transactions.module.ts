import { TransactionsServices } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Transaction])],
    controllers: [TransactionsController],
    providers: [TransactionsServices],
})
export class TransactionsModule { }
