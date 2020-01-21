import {Jugador2} from './jugador2';


describe('Jugador 2 emit', () => {
  let jugador: Jugador2;

  beforeEach( () => jugador = new Jugador2());

  it('Debe emitir un evento cuando recibe daño', () => {
    let nuevohp = 0;
    jugador.hpCambia.subscribe( hp => {
      nuevohp = hp;
    });

    jugador.recibeDanio(1000);

    expect(nuevohp).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobervivit si es < 100', () => {
    let nuevohp = 0;
    jugador.hpCambia.subscribe( hp => nuevohp = hp );

    jugador.recibeDanio(50);

    expect(nuevohp).toBe(50);
  });
});
