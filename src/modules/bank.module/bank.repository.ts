import { BankEntity } from './entities/bank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankMapper } from './bank.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BankRepository {
  constructor(
    @InjectRepository(BankEntity)
    private readonly bank: Repository<BankEntity>,
    readonly bankMapper: BankMapper,
  ) {}

  async findBankByName(bankName: string) {
    const foundedBank = await this.bank.findOne({ name: bankName });
    return foundedBank
      ? this.bankMapper.mapBankEntityToBank(foundedBank)
      : null;
  }

  async createBank(bankToSave: BankEntity) {
    const newBank = await this.bank.save(bankToSave);
    return newBank ? this.bankMapper.mapBankEntityToBank(newBank) : null;
  }

  async findAllBanks() {
    const foundedBanks = await this.bank.find();
    return foundedBanks
      ? this.bankMapper.mapBankEntitiesToBanks(foundedBanks)
      : [];
  }

  async findOneBank(bankId: string) {
    const foundedBank = await this.bank.findOne({ bankId });
    return foundedBank
      ? this.bankMapper.mapBankEntityToBank(foundedBank)
      : null;
  }

  async updateBank(bankId: string, fieldsToUpdate) {
    const { affected } = await this.bank.update(
      { bankId },
      {
        ...fieldsToUpdate,
      },
    );
    return !!affected;
  }

  async removeBank(bankId: string): Promise<boolean> {
    const { affected } = await this.bank.delete(bankId);
    return !!affected;
  }
}
