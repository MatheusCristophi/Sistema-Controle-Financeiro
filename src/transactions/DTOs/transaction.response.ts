import { PaymentMethod } from "src/enum/payment.method";
import { Status } from "src/enum/status.enum";
import { TransactionEntity } from "../transaction.entity";

export class TransactionResponse {

    description:string;

    value:number;

    categoryId:string;

    status:Status;

    paymentMethod:PaymentMethod;

    fromTransaction(transaction:TransactionEntity){
        this.description = transaction.description;
        this.value = transaction.value;
        this.categoryId = transaction.category.id;
        this.status = transaction.status;
        this.paymentMethod = transaction.paymentMethod;
    }
}