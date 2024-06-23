describe('HSBC Credit Card Test Scenario', () => {
  it('HSBC Credit Card Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.get('nav.header-main-navigation>ul>li>div[data-target="header-doormat-0"]>span[class="header-main-navigation-title"]').click({force: true});
    //cy.get('//nav/ul/li/div/span[text()='Banking']').click({force: true});
    //cy..get('//a/h2[text()='Credit Cards']').click();
    cy.contains('Credit Cards').click({force: true});
    cy.wait(30000);
    //cy.visit('https://www.hsbc.co.in/credit-cards/');
    //cy.get('h1').contains('Credit Cards');
    cy.get('#chp_main_link_2 > a > span.link.text').contains('HSBC Cashback Credit Card').should('be.visible');
    cy.get('#chp_main_link_2 > a > span.link.text').click({force: true});
    cy.get('#pp_intro_button_1 > span').should('be.visible');
    cy.url().should('include', 'credit-cards/products/visa-cashback/');
    cy.get('#pp_intro_image_3').should('be.visible');
    cy.get('#pp_tools_richtext_2 > p > span.A-TYP22L-RW-ALL').contains('INR999').should('be.visible');
    cy.get('#pp_tools_richtext_3 > p > span.A-TYP22L-RW-ALL').contains('INR999 (waived if you spend more than INR200,000 per year) ').should('be.visible');
    cy.wait(10000);
    cy.get('img.LPMimage').should('be.visible');
    cy.get('div.header-logo>a>img').click();
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.screenshot();
   
   


  })
})