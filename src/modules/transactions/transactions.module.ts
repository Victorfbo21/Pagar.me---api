import { TransactionsServices } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';
import { PayablesModule } from '../payables/payables.module';
import { TansactionsRepository } from "./transaction.repository"
@Module({
    imports: [
        TypeOrmModule.forFeature([Transaction, TansactionsRepository]),
        PayablesModule
    ],
    controllers: [TransactionsController],
    providers: [TransactionsServices],
})
export class TransactionsModule { }
