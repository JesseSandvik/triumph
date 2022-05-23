const request = require("supertest");
const app = require("../app");
const serverRequest = request(app);

describe("GET, /users/list", () => {
  describe("when the request is successful", () => {
    test("should return a 200 status", async () => {
      const { status } = await serverRequest.get("/users/list");
      expect(status).toEqual(200);
    });
  });
});
