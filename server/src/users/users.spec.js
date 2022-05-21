const request = require("supertest");
const app = require("../app");

describe("Users", () => {
  test("returns a 200 for a successful GET request", async () => {
    const res = await request(app).get("/users/list");

    expect(res.body.error).toBeUndefined();
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
  test("returns a 404 status for an invalid/missing route", async () => {
    const res = await request(app).get("/users/listing");

    expect(res.body.error).toBeDefined();
    expect(res.status).toEqual(404);
    expect(res.body.error).toContain("/users/listing");
  });
});
