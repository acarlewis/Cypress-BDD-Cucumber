class ChanelPage {
  openHomePage() {
    cy.visit('/us/');
    cy.on('uncaught:exception', () => false);
  }

  searchFor(product) {
    cy.get('[data-test="btnSearch_Header_Disabled"]').click();
    cy.get('[data-test="txtSearchTerm"]').type(`${product}{enter}`);
    cy.get('.search__results__axis').should('be.visible');
  }

  verifySearchResults(product) {
    cy.get('.product-list-inline').should('have.text', product);
  }
}

export default new ChanelPage();
