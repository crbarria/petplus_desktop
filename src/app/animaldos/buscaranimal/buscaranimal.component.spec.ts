import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaranimalComponent } from './buscaranimal.component';

describe('BuscaranimalComponent', () => {
  let component: BuscaranimalComponent;
  let fixture: ComponentFixture<BuscaranimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaranimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaranimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
