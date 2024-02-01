import { Injectable } from "@nestjs/common";
import { Client } from "./client.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClientRepository extends Repository<Client> { }