import {usuarioIngresado} from './booleanos';


describe('Pruebas de booleanos', () => {
  it('debe retornar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
    /* evaluar false
    expect(res).toBeFalsy();
    expect(res).not.toBeTruthy(); */
  });
});
