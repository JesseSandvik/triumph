const request = require("supertest");
const app = require("../app");

describe("Register", () => {
  test("returns a 201 status for a successful POST request", async () => {
    const newUser = {
      username: "Dennis Reynolds",
      password: "!Dayman10",
    };
    const res = await request(app).post("/register").send({ data: newUser });

    const { status } = res;
    const { data } = res.body;

    expect(status).toEqual(201);
    expect(data).toEqual(
      expect.objectContaining({ username: newUser.username })
    );
  });
});
