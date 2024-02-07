import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "./transactions.entity";
import { CreateTransactionDto } from "./interfaces/create-transaction.dto";
import { PayablesServices } from "../payables/payables.service";
import { TansactionsRepository } from "./transaction.repository"
import { PaymentMethod } from "./transactions.entity";
import { PayableStatus } from "../payables/payables.entity";
@Injectable()

export class TransactionsServices {


    constructor(
        @InjectRepository(Transaction)
        private _transactionRepository: TansactionsRepository,
        private _payablesServices: PayablesServices
    ) {
    }
    async getAllTransactions() {
        return await this._transactionRepository.find()
    }

    async createTransaction(createTransactionDto: CreateTransactionDto) {

        createTransactionDto.card_number = createTransactionDto.card_number.slice(-4);
        const createdTransaction = this._transactionRepository.create(createTransactionDto)

        const transactionSaveResult = await this._transactionRepository.save(createdTransaction)

        const isCredit = createTransactionDto.payment_method === PaymentMethod.CreditCard
        const today = new Date();
        const futureDate = new Date(today);

        futureDate.setDate(today.getDate() + 30);

        const data = {
            client: createTransactionDto.toClient,
            status: isCredit ? PayableStatus.Waiting_funds : PayableStatus.Paid,
            payment_date: isCredit ? futureDate : today,
            transaction: transactionSaveResult.id,
            isCredit: isCredit,
            value: transactionSaveResult.value
        }

        const createPyableResult = await this._payablesServices.createPayable(data)

        if (!createPyableResult) {
            throw new Error("Erro ao Gerar Payable")
        }

        return transactionSaveResult
    }

    async getTransactionsByClient(client: string) {
        const result = await this._transactionRepository.find({
            where: {
                toClient: client
            }
        })
        return result
    }
}