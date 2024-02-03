import { Payables } from './payables.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePyablesDto } from './interfaces/create-payables.interface';

@Injectable()
export class PayablesServices {

    constructor(@InjectRepository(Payables) private payablesRepository: Repository<Payables>) { }


    async createPayable(createClienteDto: CreatePyablesDto) {

        const createCliente = this.payablesRepository.create(createClienteDto)

        return await this.payablesRepository.save(createCliente)
    }

}