import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create.bank.dto';
import { UpdateBankDto } from './dto/update.bank.dto';
import { BankRepository } from './bank.repository';
import { BankEntity } from "./entities/bank.entity";

@Injectable()
export class BankService {
  constructor(private readonly bankRepository: BankRepository) {}
  async createBank(createBankDto: CreateBankDto) {
    const emptyBank = new BankEntity()
    const newBank = await this.bankRepository.createBank({...emptyBank, ...createBankDto});
    return newBank;
  }

  async findAllBanks() {
    const foundedBanks = await this.bankRepository.findAllBanks();
    return foundedBanks;
  }

  async findOneBank(bankId: string) {
    const foundedBank = await this.bankRepository.findOneBank(bankId);
    return foundedBank;
  }

  async updateBank(bankId: string, updateBankDto: UpdateBankDto) {
    const updatedBank = await this.bankRepository.updateBank(
      bankId,
      updateBankDto,
    );
    return updatedBank;
  }

  async removeBank(bankId: string) {
    await this.bankRepository.removeBank(bankId);
  }
}
