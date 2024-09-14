describe("Add to Cart", () => {
  it("should visit the home page", () => {
    cy.visit("/");

    cy.title().should("include", "Jungle");
  });

  it("There is products on the page", () => {
    cy.visit("/");
    cy.get(".products article").should("be.visible");
  });

  it("should add a product to the cart and update the cart count", () => {
    cy.visit("/");

    cy.get("nav .nav-item")
      .contains("My Cart")
      .invoke("text")
      .then((text) => {
        const initialCount = parseInt(text.match(/\((\d+)\)/)[1], 10);

        cy.contains("article", "Scented Blade")
          .find("button")
          .click({ force: true });
        cy.get("nav .nav-item")
          .contains("My Cart")
          .invoke("text")
          .then((updatedText) => {
            const updatedCount = parseInt(
              updatedText.match(/\((\d+)\)/)[1],
              10
            );
            expect(updatedCount).to.eq(initialCount + 1);
          });
      });
  });
});