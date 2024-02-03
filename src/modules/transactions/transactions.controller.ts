import { TransactionsServices } from './transactions.service';
import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { CreateTransactionDto } from './interfaces/create-transaction.dto';

@Controller('/transactions')
export class TransactionsController {

    constructor(private transactionService: TransactionsServices) { }

    @Get('/')
    async getAllTransactions() {
        return this.transactionService.getAllTransactions()
    }

    @Post('/create')
    async createTransaction(@Body() transactionData: CreateTransactionDto) {

        return this.transactionService.createTransaction(transactionData)
    }


}