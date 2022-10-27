import request from 'supertest'
import app from './app'

describe('Users endpoints', () => {
  it('get all users', async () => {
    const res = await request(app)
      .get('/users')
      .expect(200)
      .expect('Content-Type', /json/)

    expect(res.body).toBeInstanceOf(Array)
  })

  it('wrong data: missing username validation should return error', async () => {
    const user = {
      email: 'prueba@prueba.com',
      password: '1234'
    }
    const res = await request(app)
      .post('/users')
      .expect(400)
      .expect('Content-Type', /json/)
      .send(user)
    expect(res.body).toHaveProperty('message', 'missing username')
  })

  it('check for duplicate username', async () => {
    const user = {
      username: 'Moyra',
      email: 'prueba@prueba.com',
      password: 'Ntc12345'
    }
    const res = await request(app)
      .post('/users')
      .send(user)
      .expect(400)
      .expect('Content-Type', /json/)

    expect(res.body).toHaveProperty('message', 'Already created user')
  })

  it('wrong data: email validation should return error', async () => {
    const user = {
      username: 'Moyra',
      email: 'pruebaprueba.com',
      password: 'Ntc12345'
    }
    const res = await request(app)
      .post('/users')
      .send(user)
      .expect(400)
      .expect('Content-Type', /json/)
    expect(res.body).toHaveProperty('message', 'wrong email address')
  })

  it('wrong data: missing email validation should return error', async () => {
    const user = {
      username: 'Moyra',
      password: 'Ntc12345'
    }
    const res = await request(app)
      .post('/users')
      .send(user)
      .expect(400)
      .expect('Content-Type', /json/)
    expect(res.body).toHaveProperty('message', 'missing email')
  })

  it('wrong data: missing password validation should return error', async () => {
    const user = {
      username: 'Moyra',
      email: 'prueba@prueba.com'
    }
    const res = await request(app)
      .post('/users')
      .send(user)
      .expect(400)
      .expect('Content-Type', /json/)
    expect(res.body).toHaveProperty('message', 'missing password')
  })

  it('wrong data: password validation should return error', async () => {
    const user = {
      username: 'Moyra',
      email: 'prueba@prueba.com',
      password: '1234'
    }
    const res = await request(app)
      .post('/users')
      .send(user)
      .expect(400)
      .expect('Content-Type', /json/)
    expect(res.body).toHaveProperty('message', 'wrong password')
  })

  it('success register', async () => {
    const user = {
      username: 'Eris',
      email: 'prueba@prueba.com',
      password: 'Prueba1234'
    }
    const res = await request(app)
      .post('/users')
      .send(user)
      .expect(200)
      .expect('Content-Type', /json/)
    expect(res.body).toBeInstanceOf(Object)
  })
})
