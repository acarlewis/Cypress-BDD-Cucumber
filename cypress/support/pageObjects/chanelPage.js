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
    elt.getCookiesSettingsBtn().click();
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
    elt.getRougeAllureProduct().click();
    // cy.get('.product-list-inline').should('contain.text', product);
  }

  GetProductPrice() {
    elt.getProductPrice().then((price) => {
      const productPrice = price.text().trim();
      cy.log(`Product Price: ${productPrice}`);
      // You can store the price in a variable or use it as needed
      // For example, you can save it to the Cypress environment:
      cy.wrap(productPrice).as('productPrice');
    });
  }

  addProductToCart() {

    // elt.getAddToBagBtn().should('have.class', 'product-details__ctas').click();
    elt.getAddToBagBtn().eq(0).click();

    elt.getCardModal()
      .should('be.visible')
      .then(() => {
        elt.getContinueShoppingbtn().should('not.have.attr', 'hidden').click();
      }
    );
  }

  verifyProductInCart(productName) {
    elt.getCartButton().click()
    elt.getCardModal()
      .should('be.visible')
      .then(() => {
        elt.getCheckoutbtn().click();
      }
    );

    cy.get('.cart-product-list').should('be.visible');
    cy.get('[data-test="lblProductTitle_160990"]').should('contain.text', productName);
  }

  compareProductPrice() {
    // cy.get('span').should('have.class', 'heading is-7 js-text-ltr')
    //   .filter((i, el) => el.innerText.trim() === productName)
    //   .first()
    //   .closest('article')
    //   .within(() => {
    //     cy.get('.price').should('contain.text', expectedPrice); // assert price
    //   }
    // );
    cy.get('[data-test="lblProductPrice_160990"]')
      .then((price) => {
      const cartPrice = price.text().trim();
      cy.comparePrices('productPrice', cartPrice);
    });
  }



}

export default new ChanelPage();
