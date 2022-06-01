import { Component, OnInit } from '@angular/core';
import { FnoFormService } from '../../services/fno-form.service';
import { StockDetails } from '../../models/stock-details';

@Component({
  selector: 'app-fno-form',
  templateUrl: './fno-form.component.html',
  styleUrls: ['./fno-form.component.scss']
})
export class FnoFormComponent implements OnInit {

  constructor(public fno_form_service: FnoFormService) { }

  ngOnInit(): void {
  }



  


  onSubmit(){
    let stockDets:StockDetails = this.fno_form_service.fnoform.value;
    this.fno_form_service.appendPosition(stockDets);  
  }
}
