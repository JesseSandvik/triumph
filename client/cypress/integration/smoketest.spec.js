describe("smoke test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays Hello World!", () => {
    cy.contains("header", { name: /Hello World/i });
  });
});
