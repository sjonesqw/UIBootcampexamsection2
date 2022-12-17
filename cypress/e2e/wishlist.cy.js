// https://github.com/sjonesqw/UIBootcampexamsection2.git 


describe('Automation of the wishlist section of the Application ', () => {

    it('Login to the application', () => {
        cy.visit('https://ui-automation-camp.vercel.app')
        cy.get('#signInOrRegister').click()
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
            cy.get('[type="email"]').type("Stephanie@test.com");
            cy.get('[type="password"]').type("Stephanie1!", { log: false });
            cy.get("[name=submit]").click();
            }
        );
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
        

    })

    it('User can add item to favourites (product page) ', () => {
        cy.visit('https://ui-automation-camp.vercel.app/products')
        cy.get('#product-0 > div.css-5ge9zd > div ').click()
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products/quality-hat-model')
        cy.get('#add-to-favorite').click()
        cy.get('#toast-3-title').text().should('include','added to favorites')
        
        

    })

    it('user can remove item from favourites (product page)',() =>{
        cy.visit('https://ui-automation-camp.vercel.app/products/quality-hat-model')
        cy.get('#add-to-favorite').click()
        cy.get('#toast-6-title').text().should('include','removed from favorites')
    })

    it('user can add item to favourites (product gallery)',() =>{
        cy.visit('https://ui-automation-camp.vercel.app/products')
        cy.get('#add-to-favorite').click()
        cy.get ('#toast-11-title').text().should('include','added to favorites')
        
    })
    it('user can remove item from favourites (product gallery)',() =>{
        cy.visit('https://ui-automation-camp.vercel.app/products')
        cy.get('#remove-from-favorite').click()
        cy.get ('#toast-7-title').text().should('include','removed from favorites')
        
    })

    it('Verify that number next to favorites is incremented',() =>{
        cy.visit('https://ui-automation-camp.vercel.app/products')
        for ( let x=0;x<3;x++){
            cy.get('#add-to-favorite').click()  
        }
        cy.get('#top-favorite > p').text().should('contain','Favorites [3]')
        
        
    })



    

})