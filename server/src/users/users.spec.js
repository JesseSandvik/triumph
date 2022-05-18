const request = require("supertest");
const app = require("../app");

describe("Users", () => {
  test("returns a 200 for a successful GET request", async () => {
    const res = await request(app).get("/users/list");

    expect(res.body.error).toBeUndefined();
    expect(res.status).toEqual(200);
  });
});
