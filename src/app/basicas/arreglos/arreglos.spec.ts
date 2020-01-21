import {obtenerPokemon} from './arreglos';


describe('Pruebas de arreglos ', () => {
  it('debe retornar almenos 3 pokemon', () => {
      const res = obtenerPokemon();
      expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir mew y pikachu', () => {
    const res = obtenerPokemon();
    expect(res).toContain('Mew');
    expect(res).toContain('Pikachu');
  });
});
