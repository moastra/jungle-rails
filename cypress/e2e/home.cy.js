describe("Home Page", () => {
  it("should visit the home page", () => {
    cy.visit("/");


    cy.title().should("include", "Jungle");
  });

  it("There is products on the page", () => {
    cy.visit("/");
    cy.get(".products article").should("be.visible");
  });
  

  it("There is 2 products on the page", () => {
    cy.visit("/");
    cy.get(".products article").should("have.length", 2);
  });
  
});