import { Module } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { UserEntity } from 'src/users/users.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([TransactionEntity, UserEntity])
    ],
    providers: [TransactionService]
})
export class TransactionsModule {}
