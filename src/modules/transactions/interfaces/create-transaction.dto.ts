

export interface CreateTransactionDto {
    toClient: string,
    value: string;
    description: string;
    payment_method: any,
    card_number: string;
    card_owner: string;
    card_validAt: string;
    card_secret: string;
}