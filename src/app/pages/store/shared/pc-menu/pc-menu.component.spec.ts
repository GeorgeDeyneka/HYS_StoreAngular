import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcMenuComponent } from './pc-menu.component';

describe('PcMenuComponent', () => {
  let component: PcMenuComponent;
  let fixture: ComponentFixture<PcMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
