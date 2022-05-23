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
    test("should respond with a 400 status code if the username is missing", async () => {
      user.password = "password";
      const { status } = await serverRequest.post("/auth").send({ data: user });
      expect(status).toEqual(400);
    });
    test("should respond with an error message if the username is missing", async () => {
      user.password = "password";
      const { body } = await serverRequest.post("/auth").send({ data: user });
      expect(body.error).toBeDefined();
      expect(body.error).toContain("username");
    });
    test("should respond with a 400 status code if the username is an empty string", async () => {
      user.username = "";
      user.password = "password";
      const { status } = await serverRequest.post("/auth").send({ data: user });
      expect(status).toEqual(400);
    });
    test("should respond with an error message if the username is an empty string", async () => {
      user.username = "";
      user.password = "password";
      const { body } = await serverRequest.post("/auth").send({ data: user });
      expect(body.error).toBeDefined();
      expect(body.error).toContain("username");
    });
    test("should respond with a 400 status code if the password is missing", async () => {
      user.username = "username";
      const { status } = await serverRequest.post("/auth").send({ data: user });
      expect(status).toEqual(400);
    });
    test("should respond with an error message if the password is missing", async () => {
      user.username = "username";
      const { body } = await serverRequest.post("/auth").send({ data: user });
      expect(body.error).toBeDefined();
      expect(body.error).toContain("password");
    });
    test("should respond with a 400 status code if the password is an empty string", async () => {
      user.username = "username";
      user.password = "";
      const { status } = await serverRequest.post("/auth").send({ data: user });
      expect(status).toEqual(400);
    });
    test("should respond with an error message if the password is an empty string", async () => {
      user.username = "username";
      user.password = "";
      const { body } = await serverRequest.post("/auth").send({ data: user });
      expect(body.error).toBeDefined();
      expect(body.error).toContain("password");
    });
  });
  describe("when no data is sent with the request", () => {
    test("should return a 500 status code", async () => {
      const { status } = await serverRequest.post("/auth");
      expect(status).toEqual(500);
    });
  });
});
