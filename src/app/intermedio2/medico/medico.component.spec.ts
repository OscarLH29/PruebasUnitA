import {MedicoComponent} from './medico.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MedicoService} from './medico.service';
import {HttpClientModule} from '@angular/common/http';


describe('Intermedio 2: Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ MedicoComponent ], // declaraciones a usar
      providers: [ MedicoService ], // servicios
      imports: [ HttpClientModule ] // importaciones de otros modulos y/o servicios
    });

    fixture = TestBed.createComponent( MedicoComponent );
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
      expect(component).toBeTruthy();
  });

  it('Debe retornar el nombre del medico', () => {
    const nombre = 'Juan';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });
});
