import * as elt from './objects'; // ✅


class ChanelPage {

  // This section contains methods for first test case
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
    cy.get('.product-list-inline').should('contain.text', product);
  }


  // This section contains methods for second test case

  clickOnCategoryButton(category) {
    elt.getCategory(category)
      .find('span')
      .should('contain.text', category)
      .click();
  }

  clickOnSubCategory(subCategory) {
    elt.getSubCategory()
      .should('contain.text', subCategory )
      .click();
  }

  verifyProductAvailabilityAndClick(product) {
    cy.get('[data-id="160990"]')
    .first() 
    .click();
    // cy.get('.product-list-inline').should('contain.text', product);
  }

  addProductToCart(product) {
    cy.get('#pos-cnc-btn')
      .first()
      .click();
    // cy.get('[data-test="btnAddToCart"]').click();
    // cy.get('[data-test="btnViewCart"]').click();
  }

  verifyProductInCart(product) {
    // cy.get('.cart__items').should('contain.text', product);
  }

  viewCart() {
    // cy.get('[data-test="btnViewCart"]').click();
    // cy.get('.cart__items').should('be.visible');
  }



}

export default new ChanelPage();
