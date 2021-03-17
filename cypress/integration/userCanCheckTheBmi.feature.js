describe('User can check their Bmi', () => {
    it('user can enter weight and height', () =>{
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('80')
        cy.get('#height').type('188')
        cy.get('#Calculate').click()
    })
})
