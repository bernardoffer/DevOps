const request = require('supertest');
const app = require('./index');


describe('Testes da aplicação Express', () => {
  it('Deve retornar a mensagem de boas-vindas', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Olá! Sua aplicação Docker está funcionando!');
  });

  it('Deve retornar 404 para rota não existente', async () => {
    const res = await request(app).get('/rota-inexistente');
    expect(res.statusCode).toEqual(404);
  });

  it('Deve verificar se a porta 3000 está configurada corretamente', () => {
    const port = process.env.PORT || 3000;
    expect(port).toBe(3000);
  });

  it('Deve garantir que a resposta contém a palavra Olá', async () => {
    const res = await request(app).get('/');
    expect(res.text).toMatch(/Olá/);
  });

  it('Deve retornar um objeto JSON vazio ao acessar uma API inexistente', async () => {
    const res = await request(app).get('/api/inexistente');
    expect(res.body).toEqual({});
  });

  describe('Testando a rota GET /', () => {
    it('Deve retornar a mensagem Olá Professor!', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200); // Verifica se o status é 200
      expect(res.text).toBe('Olá Professor!'); // Verifica se o corpo da resposta contém a mensagem correta
    });
  });
});
