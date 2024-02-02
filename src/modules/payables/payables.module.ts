import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payables } from './payables.entity';
import { PayablesController } from './payables.controller';
import { PayablesServices } from './payables.service';

@Module({
    imports: [TypeOrmModule.forFeature([Payables])],
    controllers: [PayablesController],
    providers: [PayablesServices],
})
export class PayablesModule { }
