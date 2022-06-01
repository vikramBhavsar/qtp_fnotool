import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnoTableComponent } from './fno-table.component';

describe('FnoTableComponent', () => {
  let component: FnoTableComponent;
  let fixture: ComponentFixture<FnoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
