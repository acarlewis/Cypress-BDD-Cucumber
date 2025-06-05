
export const getCategory = (category) => cy.get(`[data-aria-label="${category}"]`);
export const getSubCategory = () => cy.get('[data-linkname="Lipstick"]');