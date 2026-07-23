import { ChildEntity } from 'typeorm'
import { TransactionEntity } from './transaction.entity';

@ChildEntity('Expenses')
export class ExpensesEntity extends TransactionEntity{

}