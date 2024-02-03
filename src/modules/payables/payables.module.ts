import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payables } from './payables.entity';
import { PayablesController } from './payables.controller';
import { PayablesServices } from './payables.service';
import { PayablesRepository } from './payables.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Payables, PayablesRepository])],
    controllers: [PayablesController],
    providers: [PayablesServices],
    exports: [PayablesServices]
})
export class PayablesModule { }
