import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, of } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent( servicio );
    });


    it('Init, debe cargar los medicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
          return from( [ medicos ]);
          // return of( [ medicos ]);
        });

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);

    });


});
