const request = require("supertest");
const app = require("../app");

describe("Register", () => {
  test("01. returns a 201 status for a successful POST request", async () => {
    const res = await request(app).post("/register");

    expect(res.status).toEqual(201);
  });
});
