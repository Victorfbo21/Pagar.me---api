import { Payables } from './payables.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePyablesDto } from './interfaces/create-payables.interface';
import { PayableStatus } from './payables.entity';

@Injectable()
export class PayablesServices {

    constructor(@InjectRepository(Payables) private _payablesRepository: Repository<Payables>) { }


    async createPayable(createPayableDto: CreatePyablesDto) {

        const fee = createPayableDto.isCredit ? (5 / 100) : (3 / 100)

        const resultValue = parseFloat(createPayableDto.value) - (parseFloat(createPayableDto.value) * fee)


        const toCreate = {
            client: createPayableDto.client,
            transaction: createPayableDto.transaction,
            status: createPayableDto.status,
            value: resultValue,
            payment_date: createPayableDto.payment_date
        }


        const createCliente = this._payablesRepository.create(toCreate)

        return await this._payablesRepository.save(createCliente)
    }


    async getClientBalance(client: string) {

        const payablesList = await this._payablesRepository.findBy({ client: client })
        const payablesAvailableList = payablesList.filter((item) => item.status === PayableStatus.Paid)
        const payablesWaitingList = payablesList.filter((item) => item.status === PayableStatus.Waiting_funds)


        const availableValue = payablesAvailableList.reduce((acc, item) => {
            return acc + item.value
        }, 0)

        const waitingValue = payablesWaitingList.reduce((acc, item) => {
            return acc + item.value
        }, 0)

        const available = {
            amout: availableValue,
            list: payablesAvailableList
        }

        const awaiting = {
            amout: waitingValue,
            list: payablesWaitingList
        }

        const toReturn = {
            available: available,
            awaiting: awaiting
        }


        return toReturn

    }
}