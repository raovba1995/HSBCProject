describe('HSBC Login Test Scenario', () => {
  it('HSBC Login Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.get('div.header-logo>h1>img').should('be.visible');
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.get('div[aria-label="Log on options"]>a[class="selected-item login-button only-one-link"]').click({force: true});
    cy.wait(10000);
    //cy.visit('https://www.hsbc.co.in/security/');
    //cy.wait(40000);
    cy.get('h2>span').contains('Log on');
    cy.get('#username_submit_btn').should('be.visible');
    cy.get('#username_submit_btn').should('be.disabled');
    cy.get('input#username').type('abc.xyz.com');
    cy.get('#username_submit_btn').should('not.be.disabled');
    cy.get('span[class="icon icon-circle-help-solid help-icon"]').should('be.visible');
    cy.get('span[class="icon icon-circle-help-solid help-icon"]').click();
    cy.get('h3>span').contains('Username');
    cy.get('span[class="icon icon-delete"]').should('be.visible');
    cy.get('span[class="icon icon-delete"]').click({force: true});
    cy.screenshot();



  })
})