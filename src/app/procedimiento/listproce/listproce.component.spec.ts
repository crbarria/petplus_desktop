import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproceComponent } from './listproce.component';

describe('ListproceComponent', () => {
  let component: ListproceComponent;
  let fixture: ComponentFixture<ListproceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
