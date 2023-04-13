import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoFotosComponent } from './trabalho-fotos.component';

describe('TrabalhoFotosComponent', () => {
  let component: TrabalhoFotosComponent;
  let fixture: ComponentFixture<TrabalhoFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalhoFotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalhoFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
