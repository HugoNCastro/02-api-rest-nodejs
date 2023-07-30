import { beforeAll, afterAll, describe, it } from 'vitest'
import { app } from '../app'
import request from 'supertest'

describe('Transaction routes', () => {
  beforeAll(async () => {
    // esperar a aplicação estar totalmente disponível, com os plugins instalados
    await app.ready()
  })

  afterAll(async () => {
    // após rodar os testes quero remover a aplicação do espaço da memória
    await app.close()
  })

  it('user can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })
})
