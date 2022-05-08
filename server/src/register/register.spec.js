const request = require("supertest");
const app = require("../app");

describe("Register", () => {
  test("returns a 201 status for a successful POST request", async () => {
    const user = {
      username: "Dennis_Reynolds",
      password: "!IamAGoldenGod10",
    };

    const res = await request(app).post("/register").send({ data: user });

    const { status } = res;
    const { data } = res.body;
    const { password } = data;

    expect(res.body.error).toBeUndefined();
    expect(status).toEqual(201);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(data).toEqual(
      expect.objectContaining({
        username: user.username,
        password: expect.any(String),
      })
    );
    expect(password).not.toEqual(user.password);
  });
  test("returns a 404 for a invalid/missing route", async () => {
    const res = await request(app).post("/register/bad-route");

    const { status } = res;
    expect(res.body.error).toBeDefined();
    expect(status).toEqual(404);
    expect(res.body.error).toContain("/register/bad-route");
  });
});
