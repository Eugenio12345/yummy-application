import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraProductoComponent } from './muestra-producto.component';

describe('MuestraProductoComponent', () => {
  let component: MuestraProductoComponent;
  let fixture: ComponentFixture<MuestraProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
