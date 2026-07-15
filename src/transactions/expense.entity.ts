import { ChildEntity, Entity } from 'typeorm'
import { TransactionEntity } from './transaction.entity';

@Entity()
@ChildEntity('Expenses')
export class ExpensesEntity extends TransactionEntity{

}