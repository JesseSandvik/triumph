const request = require("supertest");
const app = require("../app");
const serverRequest = request(app);

describe("POST, /register", () => {
  describe("not found handler", () => {
    test("should return a 404 status code for a non-existent route", async () => {
      const user = {
        username: "username",
        password: "password",
      };
      const { status } = await serverRequest
        .post("/register/non-existent")
        .send({ data: user });
      expect(status).toEqual(404);
    });
  });
  describe("error handler", () => {
    test("should return a 500 status for an internal server error", async () => {
      const { status } = await serverRequest.post("/register");
      expect(status).toEqual(500);
    });
  });
  describe("given a username and password", () => {
    const user = {
      username: "username",
      password: "password",
    };
    test("should respond with a 201 status code", async () => {
      const { status } = await serverRequest
        .post("/register")
        .send({ data: user });
      expect(status).toEqual(201);
    });
    test("should specify json in the content type header", async () => {
      const { headers } = await serverRequest
        .post("/register")
        .send({ data: user });
      expect(headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
    test("response should have a userId", async () => {
      const { body } = await serverRequest
        .post("/register")
        .send({ data: user });
      expect(body.data.userId).toBeDefined();
    });
  });
  describe("when the username and/or password is missing", () => {
    let user = {};
    beforeEach(() => {
      user = {};
    });

    test("should respond with a 400 status code if the username is missing", async () => {
      user.password = "password";
      const { status } = await serverRequest
        .post("/register")
        .send({ data: user });
      expect(status).toEqual(400);
    });
    test("should respond with a 400 status code if the username is an empty string", async () => {
      user.username = "";
      user.password = "password";
      const { status } = await serverRequest
        .post("/register")
        .send({ data: user });
      expect(status).toEqual(400);
    });
    test("should respond with a 400 status code if the password is missing", async () => {
      user.username = "username";
      const { status } = await serverRequest
        .post("/register")
        .send({ data: user });
      expect(status).toEqual(400);
    });
    test("should respond with a 400 status code if the password is an empty string", async () => {
      user.username = "username";
      user.password = "";
      const { status } = await serverRequest
        .post("/register")
        .send({ data: user });
      expect(status).toEqual(400);
    });
  });
});
