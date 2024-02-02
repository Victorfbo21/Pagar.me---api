import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { ClientServices } from './client.serveice';
import { CreateClienteDto } from './interfaces/create-clienteDto.interface';

@Controller('/clients')
export class ClientsController {

    constructor(private clientServices: ClientServices) { }

    @Get('/')
    async getClients() {
        return this.clientServices.getClients()
    }

    @Post('/create')
    async createClient(@Body() name: CreateClienteDto) {

        return this.clientServices.createClient(name)
    }


}