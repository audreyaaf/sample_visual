function terminalLog(violations){
    cy.task(
        'log',
        `${violations.length} accessibility violations${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were ' } detected`
    )

    const violationsData = violations.map(
        ({ id, impact, description, nodes}) => ({
            id,
            impact,
            description,
            nodes: nodes.length
        })
    )
    cy.task('table', violationsData)
    }

///<reference types='cypress'/>
describe('Accessibility testing', ()=>{
    it('First Accessibility Testing', ()=> {
        cy.visit('https://demo.opencart.com')
        cy.injectAxe()

        cy.checkA11y
    })

})
