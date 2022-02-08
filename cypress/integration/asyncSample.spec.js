///<reference types ='cypress'/>
describe('first sample', () =>{
    it("Launch URL ", ()=> {
        cy.visit ("https://books.toscrape.com/index.html")
        cy.contains("Mystery").click()

        cy.url().should('include', 'mystery')
        console.log("before test execution")

        cy.get("h1").should("be.visible").then ( ()=>{
            console.log("after test")
        }
        )

    })

})