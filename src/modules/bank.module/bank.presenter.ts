import { Injectable } from '@nestjs/common';
import { ApiProperty } from "@nestjs/swagger";

@Injectable()
export class BankPresenter {
  mapBankResponse(bank) {
    return { bank };
  }

  mapMenuBankResponse(banks) {
    return { banks };
  }
}
