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
    cy.get('header').then(($header) => {
      const hasNarrowClass = $header.hasClass('is-narrow');
      cy.log(`Body has class is-narrow: ${hasNarrowClass}`);
      if (!hasNarrowClass) {
        cy.get('#makeup').click();
        cy.get('.header__columns').should('be.visible');
        cy.get('[data-test="lnkLevelThreeCategory_ByCategory"]').click();
      } else {
        cy.get('#onetrust-close-btn-container').click()
        cy.get('[data-test="lnkMainNagation"]').click();
        cy.get('[data-test="lnkAxisCategory_makeup"]')
          .should('have.text', category)
          .closest('a') 
          .click();
      }
    });
  }

  clickOnSubCategory(product) {
    cy.get('[data-linkname="Lipstick"]')
      .should('contain.text', product)
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
