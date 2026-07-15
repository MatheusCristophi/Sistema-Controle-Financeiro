import { TransactionEntity } from 'src/transactions/transaction.entity';
import { UserEntity } from 'src/users/users.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class CategoryEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    decription:string;

    @CreateDateColumn({
        type:'timestamp'
    })
    createDate:Date;

    @ManyToOne(() => UserEntity, (user) => user)
    user:UserEntity;

    @OneToMany(() => TransactionEntity, (transaction) => transaction.category)
    transactions:TransactionEntity[];
}