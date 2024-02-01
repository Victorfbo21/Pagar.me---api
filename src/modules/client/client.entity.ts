import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 500 })
    name: string;
}