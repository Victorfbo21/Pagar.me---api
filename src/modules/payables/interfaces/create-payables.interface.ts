

export interface CreatePyablesDto {
    client: string,
    status: any,
    payment_date: Date,
    transaction: string;
    isCredit: boolean;
    value: string
}