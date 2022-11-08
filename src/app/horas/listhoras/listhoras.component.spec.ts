import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhorasComponent } from './listhoras.component';

describe('ListhorasComponent', () => {
  let component: ListhorasComponent;
  let fixture: ComponentFixture<ListhorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
