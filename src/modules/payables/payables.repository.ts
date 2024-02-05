import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Payables } from "./payables.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PayablesRepository {

    constructor(
        @InjectRepository(Payables)
        private _payablesRepository: Repository<Payables>) { }
}