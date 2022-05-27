import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { BankRepository } from './bank.repository';
import { BankPresenter } from './bank.presenter';
import { BankMapper } from './bank.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from './entities/bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  controllers: [BankController],
  providers: [BankService, BankRepository, BankPresenter, BankMapper],
})
export class BankModule {}
