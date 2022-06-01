import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnoFormComponent } from './fno-form.component';

describe('FnoFormComponent', () => {
  let component: FnoFormComponent;
  let fixture: ComponentFixture<FnoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
