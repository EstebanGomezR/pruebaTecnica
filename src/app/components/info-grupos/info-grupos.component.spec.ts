import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGruposComponent } from './info-grupos.component';

describe('InfoGruposComponent', () => {
  let component: InfoGruposComponent;
  let fixture: ComponentFixture<InfoGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
