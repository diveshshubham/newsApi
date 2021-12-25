const app = require("../index");
const User = require("../model/user");
const supertest = require("supertest");
const faker = require('faker');

test("GET /weather", async () => {

    await supertest(app).get("/weather?q=Leh,IN")
        .expect(200)
        .then((response) => {
            expect(response.body.message).toBe("success");
            expect(response.body.final_res.count).toEqual(5);
        });
});

describe('Users route', () => {
    const signup = '/users/signup';
    const login = '/users/login';
    const user = {
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    const preSave = {
        email: 'sometest@xyz.com',
        password: faker.internet.password(),
    };

 
    describe('signup', () => {
        it('should crete new user if email not found', async () => {
            try {
                const result = await supertest(app)
                    .post(signup)
                    .send(user);
                expect(result.status).to.equal(200);
                expect(result.body).to.have.property('token');
            } catch (error) {
                console.log(error);
            }
        });

    });


    describe('signin', () => {
        it('should return error 400 if user email and password empty', async () => {
            let user = {};
            try {
                const result = await supertest(app)
                    .post(login)
                    .send(user);
            } catch (error) {
                expect(error.status).to.equal(400);
            }
        });

        it('should return 200 and our token', async () => {
            try {
                const result = await supertest(app)
                    .post(login)
                    .send(preSave);
               expect(result.status).to.equal(200);
            } catch (error) {
                throw new Error(error);
            }
        });
    });
});
