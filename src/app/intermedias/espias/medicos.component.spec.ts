import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {EMPTY, empty, from, Observable, of, throwError} from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
    });


    it('Init: debe obtener a los medicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
          return from( [ medicos ]);
          // return of( [ medicos ]);
        });

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);

    });

    it('debe llamar al servidor para agregar medico', () => {
        const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( medico => {
          return EMPTY;
        });

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();
    });


    it('Debe agregar nuevo medico al arreglo', () => {
        const medico = {
          id: 1,
          nombre: 'Juan'
        };

        spyOn( servicio, 'agregarMedico' ).and.returnValue( from( [medico] ));

        componente.agregarMedico();

        expect( componente.medicos.indexOf(medico) ).toBeGreaterThanOrEqual(0);
    });

    it('si falla se debe mostrar el mensaje de error del servicio', () => {
        const miError = 'Error: no se pudo agregar';

        spyOn(servicio, 'agregarMedico' ).and.returnValue(
          throwError(miError)
        );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe( miError );
    });

    it('debe llamar al servidor para borrar medico', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( EMPTY );

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');

    });

  it('No debe llamar al servidor para borrar medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( EMPTY );

    componente.borrarMedico('1');

    expect( espia ).not.toHaveBeenCalledWith('1');

  });

});
