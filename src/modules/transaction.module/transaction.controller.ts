import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete, Post,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create.transaction.dto';
import { UpdateTransactionDto } from './dto/update.transaction.dto';
import { TransactionPresenter } from './transaction.presenter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  createTransaction,
  findAllTransactions,
  findOneTransaction,
  updateTransaction,
  removeTransaction,
} from './consts/swagger.consts';

@ApiTags('Transaction module')
@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly transactionPresenter: TransactionPresenter,
  ) {}

  @ApiOperation(createTransaction.apiOperation)
  @ApiResponse(createTransaction.apiResponse)
  @Post()
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    const newTransaction = await this.transactionService.createTransaction(createTransactionDto);
    return this.transactionPresenter.mapTransactionResponse(newTransaction);
  }

  @ApiOperation(findAllTransactions.apiOperation)
  @ApiResponse(findAllTransactions.apiResponse)
  @Get()
  async findAllTransactions() {
    const foundedTransactions = await this.transactionService.findAllTransactions();
    return this.transactionPresenter.mapMenuTransactionResponse(foundedTransactions);
  }

  @ApiOperation(findOneTransaction.apiOperation)
  @ApiResponse(findOneTransaction.apiResponse)
  @Get(':transactionId')
  async findOneTransaction(@Param('transactionId') transactionId: string) {
    const foundedTransaction = await this.transactionService.findOneTransaction(transactionId);
    return this.transactionPresenter.mapTransactionResponse(foundedTransaction);
  }

  @ApiOperation(updateTransaction.apiOperation)
  @ApiResponse(updateTransaction.apiResponse)
  @Patch(':transactionId')
  async updateTransaction(
    @Param('transactionId') transactionId: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const updatedTransaction = await this.transactionService.updateTransaction(
      transactionId,
      updateTransactionDto,
    );
    return this.transactionPresenter.mapTransactionResponse(updatedTransaction);
  }

  @ApiOperation(removeTransaction.apiOperation)
  @ApiResponse(removeTransaction.apiResponse)
  @Delete(':transactionId')
  async removeTransaction(@Param('transactionId') transactionId: string) {
    const removedTransaction = await this.transactionService.removeTransaction(transactionId);
    return this.transactionPresenter.mapTransactionResponse(removedTransaction);
  }
}
