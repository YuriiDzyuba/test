import { Bank } from '../types/bank.type';
import { IsNotEmpty, IsUUID, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBankDto
  implements Pick<Bank, 'name' | 'balance' | 'description'>
{
  @ApiProperty({ example: 500, description: 'bank balance' })
  @IsNotEmpty()
  balance: number;

  @ApiProperty({
    example: 'super bank fo everyman',
    description: 'bank description',
  })
  @MinLength(2)
  @MaxLength(32)
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Privat-Bank', description: 'bank name' })
  @MinLength(2)
  @MaxLength(32)
  @IsNotEmpty()
  name: string;
}
