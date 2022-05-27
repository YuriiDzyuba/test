import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { DatabaseConfig } from "./config/database.config";
import {BankModule} from "./modules/bank.module/bank.module";
import {TransactionModule} from "./modules/transaction.module/transaction.module";
import {CategoryModule} from "./modules/category.module/category.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env',
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
      BankModule,
      TransactionModule,
      CategoryModule,
  ],
})
export class AppModule {}
