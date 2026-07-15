import { ChildEntity, Entity } from 'typeorm'
import { TransactionEntity } from './transaction.entity';

@Entity()
@ChildEntity('Incomes')
export class IncomeEntity extends TransactionEntity{
    
}