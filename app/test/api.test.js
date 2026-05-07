import request from 'supertest';
import app from '../src/app.js';
import {closePool} from '../src/utils/database.js';

afterAll(async () => {
	await closePool();
});

describe('test user endpoints', () => {
	describe('POST /api/user/signin', () => {
		it('should create a new user', async () => {
			const newUser = {
				username: 'John Doe',
				password: 'password123',
				email: 'john.doe@example.com',
			};
			const res = await request(app)
				.post('/api/user/signin')
				.send(newUser)
				.set('Accept', 'application/json');
			expect(res.statusCode).toEqual(201);
			expect(res.body.username).toBe('John Doe');
			expect(res.body.email).toBe('john.doe@example.com');
		});
	});

	describe('GET /api/user/me', () => {
		it('should get user information', async () => {
			const res = await request(app)
				.get('/api/user/me')
				.set('Accept', 'application/json');
			expect(res.statusCode).toEqual(200);
			expect(res.body).toHaveProperty('username');
			expect(res.body).toHaveProperty('email');
		});
	});
});

describe('test auth endpoints', () => {
	describe('POST /api/user/login', () => {
		it('should log in a user', async () => {
			const credentials = {
				username: 'John Doe',
				password: 'password123',
			};
			const res = await request(app)
				.post('/api/user/login')
				.send(credentials)
				.set('Accept', 'application/json');
			expect(res.statusCode).toEqual(200);
			expect(res.body).toHaveProperty('token');
		});
	});
});

describe('test restaurant endpoints', () => {
	describe('GET /api/restaurant/list', () => {
		it('should get a list of recipes', async () => {
			const res = await request(app)
				.get('/api/restaurant/list')
				.set('Accept', 'application/json');
			expect(res.statusCode).toEqual(200);
			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	describe('GET /api/restaurant/list', () => {
		it('should get the details of a recipe', async () => {
			const res = await request(app)
				.get('/api/restaurant/list')
				.set('Accept', 'application/json');
			expect(res.statusCode).toEqual(200);
			expect(Array.isArray(res.body)).toBe(true);
			expect(res.body[0]).toHaveProperty('meal_id');
			expect(res.body[0]).toHaveProperty('meal_type');
			expect(res.body[0]).toHaveProperty('meal_name');
			expect(res.body[0]).toHaveProperty('meal_content');
			expect(res.body[0]).toHaveProperty('price');
			expect(res.body[0]).toHaveProperty('allergens');
		});
	});
});
