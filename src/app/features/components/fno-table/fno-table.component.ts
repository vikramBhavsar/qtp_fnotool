import { Component, OnInit } from '@angular/core';
import { FnoFormService } from '../../services/fno-form.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StockDetails } from '../../models/stock-details';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fno-table',
  templateUrl: './fno-table.component.html',
  styleUrls: ['./fno-table.component.scss'],
})
export class FnoTableComponent implements OnInit {
  stockDetails!: StockDetails;


  listPosition:number = -1;

  fnoModalform = new FormGroup({
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

  constructor(
    public fno_form_service: FnoFormService,
    private modalService: NgbModal,
  ) {

    
  }

  ngOnInit(): void {}

  openLg(content: any,position:number) {
    this.modalService.open(content, { size: 'lg' });



    this.stockDetails = this.fno_form_service.positionList[position];
    this.fnoModalform.controls['index'].setValue(this.stockDetails.index);
    this.fnoModalform.controls['spot_price'].setValue(this.stockDetails.spot_price);
    this.fnoModalform.controls['fo_price'].setValue(this.stockDetails.fo_price);
    this.fnoModalform.controls['lot_size'].setValue(this.stockDetails.lot_size);
    this.fnoModalform.controls['segment'].setValue(this.stockDetails.segment);
    this.fnoModalform.controls['squareoff_price'].setValue(this.stockDetails.squareoff_price);
    this.fnoModalform.controls['optionStrike'].setValue(this.stockDetails.optionStrike);
    this.fnoModalform.controls['optionType'].setValue(this.stockDetails.optionType);
    this.fnoModalform.controls['buy_sell'].setValue(this.stockDetails.buy_sell);
    this.fnoModalform.controls['lotqy'].setValue(this.stockDetails.lotqy);
    
    this.listPosition = position;
  }



  onEdit(){

    let editedStockDetails:StockDetails = {
      index:this.fnoModalform.value['index'],
      spot_price:this.fnoModalform.value['spot_price'],
      fo_price:this.fnoModalform.value['fo_price'],
      lot_size:this.fnoModalform.value['lot_size'],
      segment:this.fnoModalform.value['segment'],
      squareoff_price:this.fnoModalform.value['squareoff_price'],
      optionStrike:this.fnoModalform.value['optionStrike'],
      optionType:this.fnoModalform.value['optionType'],
      buy_sell:this.fnoModalform.value['buy_sell'],
      lotqy:this.fnoModalform.value['lotqy'],
    };

    this.fno_form_service.positionList[this.listPosition] = editedStockDetails;

    this.listPosition = -1;

    this.modalService.dismissAll();
    
  }

  deletePosition(idx: number) {
    this.fno_form_service.deletePosition(idx);
  }
}
