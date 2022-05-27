import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create.bank.dto';
import { UpdateBankDto } from './dto/update.bank.dto';
import { BankRepository } from './bank.repository';
import { BankEntity } from './entities/bank.entity';

@Injectable()
export class BankService {
  constructor(private readonly bankRepository: BankRepository) {}
  async createBank(createBankDto: CreateBankDto) {
    const foundedBank = await this.bankRepository.findBankByName(
      createBankDto.name,
    );

    if (foundedBank) {
      throw new HttpException(
        `bank ${createBankDto.name} exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const emptyBank = new BankEntity();
    return await this.bankRepository.createBank({
      ...emptyBank,
      ...createBankDto,
    });
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
