const request = require("supertest");
const app = require("../app");
const serverRequest = request(app);

describe("POST, /auth", () => {
  describe("given a username and password", () => {
    const user = {
      username: "username",
      password: "password",
    };
    test("should respond with a 200 status code", async () => {
      const { status } = await serverRequest.post("/auth").send({ data: user });
      expect(status).toEqual(200);
    });
    test("should specify json in the content type header", async () => {
      const { headers } = await serverRequest
        .post("/auth")
        .send({ data: user });
      expect(headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
  });
  describe("when the username and/or password is missing", () => {
    let user = {};
    beforeEach(() => {
      user = {};
    });
    test("should respond with a 400 status code for a missing username", async () => {
      user.username = "username";
      const { status } = await serverRequest.post("/auth").send({ data: user });
      expect(status).toEqual(400);
    });
  });
});
