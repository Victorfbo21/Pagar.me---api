
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum PayableStatus {
    Paid = "paid",
    Waiting_funds = "waiting_funds",
}


@Entity()
export class Payables {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 500 })
    client: string;

    @Column()
    transaction: string;

    @Column({
        type: 'enum',
        enum: PayableStatus
    })
    status: PayableStatus;

    @Column()
    payment_date: Date

}