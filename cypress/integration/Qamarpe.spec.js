
context('marpe saucedemo', () => {

    before(() => {
        cy.visit('/')
    });
    it('Realizar Login', () => {

        cy.xpath('//*[@id="user-name"]').type('standard_user')
        cy.xpath('//*[@id="password"]').type('secret_sauce')
        cy.xpath('//*[@id="login-button"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('ordenar lista', () => {

        cy.xpath('//*[@id="header_container"]/div[2]/div[2]/span/select').select('Price (low to high)', { force: true })
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('selecao de produtos', () => {

        cy.xpath('//*[@id="add-to-cart-sauce-labs-onesie"]').click()
        cy.xpath('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('click no carrinho', () => {

        cy.xpath('//*[@id="shopping_cart_container"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('ir para checkout', () => {
        
        cy.xpath('//*[@id="checkout"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('preencher informações pessoais e continuar ', () => {

        cy.xpath('//*[@id="first-name"]').type('Marcus')
        cy.xpath('//*[@id="last-name"]').type('Goncalves')
        cy.xpath('//*[@id="postal-code"]').type('88080010')
        cy.xpath('//*[@id="continue"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('finalizar compra', () => {
        
        cy.xpath('//*[@id="finish"]').click()
        Cypress.Cookies.preserveOnce('session-username')
    });
});