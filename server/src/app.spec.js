const request = require('supertest');
const app = require('./app');

describe('Smoke test', () => {
    it('renders Hello World!', async () => {
        const res = await request(app).get('/');

        expect(res.status).toEqual(200);
        expect(res.body).toContain('Hello World!');
    });
});