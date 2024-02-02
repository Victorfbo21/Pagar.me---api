import { Injectable } from "@nestjs/common";
import { CreateClienteDto } from "./interfaces/create-clienteDto.interface";
import { Repository } from "typeorm";
import { Client } from "./client.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()

export class ClientServices {

    constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) { }


    async createClient(createClienteDto: CreateClienteDto) {
        if (!createClienteDto.name) {
            throw new Error("Nome do Cliente não fornecido")
        }
        const createCliente = this.clientRepository.create(createClienteDto)

        return await this.clientRepository.save(createCliente)
    }

}