import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroUsuariosComponent } from './resgistro-usuarios.component';

describe('ResgistroUsuariosComponent', () => {
  let component: ResgistroUsuariosComponent;
  let fixture: ComponentFixture<ResgistroUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistroUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistroUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
