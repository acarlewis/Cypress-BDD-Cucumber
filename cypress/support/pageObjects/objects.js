
export const getCookiesSettingsBtn = (category) => cy.get('#onetrust-close-btn-container');

export const getCategory = (category) => cy.get(`[data-aria-label="${category}"]`);

export const getSubCategory = () => cy.get('[data-linkname="Lipstick"]');

export const getRougeAllureProduct = () => cy.get('[data-id="160990"]').first() ;

export const getProductPrice = () => cy.get('[data-test="lblProductPrice_EditProduct"]');

// export const getAddToBagBtn = () => cy.get('.product-details__text > [data-test="secCTAButtonsZone"] > .product-ctas-wrapper > .js-addToBag > .form-buttons > :nth-child(1) > p > #pos-cnc-btn');
export const getAddToBagBtn = () => cy.get('[data-test="secCTAButtonsZone"]');

export const getCardModal = () => cy.get('[data-test="lblMiniCartHeader"]');

export const getContinueShoppingbtn = () => cy.get('[data-test="btnContinueShopping"]');

export const getCheckoutbtn = () => cy.get('[data-test="btnReviewBag"]');

export const getCartButton = () => cy.get('[data-test="btnCArt"]');