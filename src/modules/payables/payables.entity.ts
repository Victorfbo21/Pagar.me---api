
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Index } from 'typeorm';

export enum PayableStatus {
    Paid = "paid",
    Waiting_funds = "waiting_funds",
}


@Entity()
export class Payables {
    @PrimaryGeneratedColumn()
    id: string;

    @Index()
    @Column()
    client: string;

    @Index()
    @Column()
    transaction: string;

    @Column({
        type: 'enum',
        enum: PayableStatus
    })
    status: PayableStatus;

    @Column({
        type: 'float'
    })
    value: number

    @Column()
    payment_date: Date

}