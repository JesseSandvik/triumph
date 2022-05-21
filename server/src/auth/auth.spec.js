const request = require("supertest");
const app = require("../app");

describe("Auth", () => {
  test("returns a 400 status if the username is missing", async () => {
    const user = {
      password: "@missingUsername99",
    };
    const res = await request(app).post("/auth").send({ data: user });

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
    expect(res.body.error).toContain("username");
  });
  test("returns a 400 status if the password is missing", async () => {
    const user = {
      username: "present_username312",
    };
    const res = await request(app).post("/auth").send({ data: user });

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(400);
    expect(res.body.error).toContain("password");
  });
  test("returns a jwt for a successful POST request", async () => {
    const user = { username: "ghostie", password: "@123456789" };
    const res = await request(app).post("/auth").send({ data: user });

    expect(res.body.error).toBeUndefined();
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});
