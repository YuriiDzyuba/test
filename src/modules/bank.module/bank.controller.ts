import {
  Controller,
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create.bank.dto';
import { UpdateBankDto } from './dto/update.bank.dto';
import { BankPresenter } from './bank.presenter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  createBank,
  findAllBanks,
  findOneBank,
  updateBank,
  removeBank,
} from './consts/swagger.consts';

@ApiTags('Bank module')
@Controller('bank')
export class BankController {
  constructor(
    private readonly bankService: BankService,
    private readonly bankPresenter: BankPresenter,
  ) {}

  @ApiOperation(createBank.apiOperation)
  @ApiResponse(createBank.apiResponse)
  @Post()
  async createBank(@Body() createBankDto: CreateBankDto) {
    const newBank = await this.bankService.createBank(createBankDto);
    return this.bankPresenter.mapBankResponse(newBank);
  }

  @ApiOperation(findAllBanks.apiOperation)
  @ApiResponse(findAllBanks.apiResponse)
  @Get()
  async findAllBanks() {
    const foundedBanks = await this.bankService.findAllBanks();
    return this.bankPresenter.mapMenuBankResponse(foundedBanks);
  }

  @ApiOperation(findOneBank.apiOperation)
  @ApiResponse(findOneBank.apiResponse)
  @Get(':bankId')
  async findOneBank(@Param('bankId') bankId: string) {
    const foundedBank = await this.bankService.findOneBank(bankId);
    return this.bankPresenter.mapBankResponse(foundedBank);
  }

  @ApiOperation(updateBank.apiOperation)
  @ApiResponse(updateBank.apiResponse)
  @Patch(':bankId')
  async updateBank(
    @Param('bankId') bankId: string,
    @Body() updateBankDto: UpdateBankDto,
  ) {
    const updatedBank = await this.bankService.updateBank(
      bankId,
      updateBankDto,
    );
    return this.bankPresenter.mapBankResponse(updatedBank);
  }

  @ApiOperation(removeBank.apiOperation)
  @ApiResponse(removeBank.apiResponse)
  @Delete(':bankId')
  async removeBank(@Param('bankId') bankId: string) {
    const removedBank = await this.bankService.removeBank(bankId);
    return this.bankPresenter.mapBankResponse(removedBank);
  }
}
