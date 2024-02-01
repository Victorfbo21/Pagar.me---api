import { Module } from '@nestjs/common';
import { ClientsController } from './client.controller'
import { Client } from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientServices } from './client.serveice';
import { ClientRepository } from './client.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    controllers: [ClientsController],
    providers: [ClientServices, ClientRepository],
})
export class ClientModule { }
