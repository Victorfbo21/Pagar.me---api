import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "./transactions.entity";
import { CreateTransactionDto } from "./interfaces/create-transaction.dto";

@Injectable()

export class TransactionsServices {

    constructor(@InjectRepository(Transaction) private transactionRepository: Repository<Transaction>) { }


    async createTransaction(createClienteDto: CreateTransactionDto) {

        const createCliente = this.transactionRepository.create(createClienteDto)

        return await this.transactionRepository.save(createCliente)
    }

}