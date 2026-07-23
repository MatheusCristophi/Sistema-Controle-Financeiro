import { ChildEntity } from 'typeorm'
import { TransactionEntity } from './transaction.entity';

@ChildEntity('Incomes')
export class IncomeEntity extends TransactionEntity{
    
}