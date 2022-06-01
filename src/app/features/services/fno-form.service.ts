import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StockDetails } from '../models/stock-details';

@Injectable({
  providedIn: 'root'
})

export class FnoFormService {

  fnoform = new FormGroup({
    index: new FormControl('hello'),
    spot_price : new FormControl(''),
    fo_price : new FormControl(''),
    lot_size : new FormControl(''),
    segment: new FormControl('1'),
    squareoff_price : new FormControl('-1'),
    optionStrike : new FormControl(''),
    optionType : new FormControl('CE'),
    buy_sell : new FormControl('buy'),
    lotqy : new FormControl(''),
  })


  positionList:StockDetails[] = [];


  appendPosition(stockDetails:StockDetails){
    this.positionList.push(stockDetails);
  }

  deletePosition(idx:number){
    this.positionList.splice(idx,1);
  }

  constructor() { }
}
