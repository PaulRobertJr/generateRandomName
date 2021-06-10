describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  function generateNewUsername() {
    let text = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnoprstwcrec";

    for (let i = 0; i < 10; i++)
      text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return text;
  }

  const generateUsername = generateNewUsername;

  it("Login existe", () => {
    cy.get("input[name=email]").type("generateNewUsername");
  });
});
