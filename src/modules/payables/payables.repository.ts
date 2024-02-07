import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Payables } from "./payables.entity";

@Injectable()
export class PayablesRepository extends Repository<Payables> { }