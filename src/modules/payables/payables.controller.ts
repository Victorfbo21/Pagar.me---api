import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { PayablesServices } from './payables.service';
import { CreatePyablesDto } from './interfaces/create-payables.interface';

@Controller('/payables')
export class PayablesController {

    constructor(private payablestServices: PayablesServices) { }

    @Get('/')
    async getClients() {
        return 'Clientes!!'
    }

    @Post('/create')
    async createPayable(@Body() data: CreatePyablesDto) {

        return this.payablestServices.createPayable(data)
    }


    @Post('/extract')
    async getClientExtract(@Body() data: { client: string }) {
        const { client } = data
        return this.payablestServices.getClientBalance(client)
    }


}