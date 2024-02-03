


import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum PaymentMethod {
    DebitCard = "debit_card",
    CreditCard = "credit_card",
}

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    toClient: string;

    @Column({ length: 500 })
    value: string;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: PaymentMethod
    })
    payment_method: PaymentMethod

    @Column()
    card_number: string;

    @Column()
    card_owner: string;

    @Column()
    card_validAt: string;

    @Column()
    card_secret: string;
}