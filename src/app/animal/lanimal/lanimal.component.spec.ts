import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanimalComponent } from './lanimal.component';

describe('LanimalComponent', () => {
  let component: LanimalComponent;
  let fixture: ComponentFixture<LanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
