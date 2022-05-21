const request = require("supertest");
const app = require("../app");

describe("Auth", () => {
  test("returns a 400 status if username is missing", async () => {
    const user = {
      password: "@missingUsername99",
    };
    const res = await request(app).post("/auth").send({ data: user });

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
});
