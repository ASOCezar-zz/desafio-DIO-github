const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math class', () => {
  // Hooks
  // São realizados antes de qualquer it para evitar repetição de código
  beforeEach(function() {
    value = 5;
  })

  it('Should sum two numbers', function (done) {
    const math = new Math();

    this.timeout(3500);

    math.sum(value, 5, (value) => {
      assert.equal(value, 10);
      done();
    })
  });

  it.skip('Should Skip a test');      // Esse teste será ignorado.

  it.only("Should be the only test executed");     // Esse teste será o único executado.

  it('Should return pending');    // Esse teste retornará Pending.
})
// Não é recomendado passar uma arrow function como parâmetro para o it para que seja possível
// utilizar o escopo da função com o this.