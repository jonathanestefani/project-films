import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersLongestComponent } from './producers-longest.component';

describe('ProducersLongestComponent', () => {
  let component: ProducersLongestComponent;
  let fixture: ComponentFixture<ProducersLongestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducersLongestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducersLongestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
