const request = require("supertest");
const app = require("../app");

describe("Register", () => {
  test("returns a 201 status for a successful POST request", async () => {
    const user = {
      username: "Dennis_Reynolds",
      password: "!IamAGoldenGod10",
    };

    const res = await request(app).post("/register").send({ data: user });

    expect(res.body.error).toBeUndefined();
    expect(res.status).toEqual(201);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body.data).toEqual(
      expect.objectContaining({
        username: user.username,
        password: expect.any(String),
      })
    );
    expect(res.body.data.password).not.toEqual(user.password);
  });
  test("returns a 404 status for a invalid/missing route", async () => {
    const res = await request(app).post("/register/bad-route");

    const { status } = res;
    expect(res.body.error).toBeDefined();
    expect(status).toEqual(404);
    expect(res.body.error).toContain("/register/bad-route");
  });
  test("returns a 400 status if the username is missing", async () => {
    const user = {
      password: "@missingUsername99",
    };
    const res = await request(app).post("/register").send({ data: user });

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
  test("returns a 400 status if the username is an empty string", async () => {
    const user = {
      username: "",
      password: "@usernameIsEmpty99",
    };
    const res = await request(app).post("/register").send({ data: user });

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
  test("returns a 400 status if the password is missing", async () => {
    const user = {
      username: "testingUsername99",
    };
    const res = await request(app).post("/register").send({ data: user });

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
  test("returns a 400 status if the password is an empty string", async () => {
    const user = {
      username: "testingUsername",
      password: "",
    };
    const res = await request(app).post("/register").send({ data: user });

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
  });
});
