// Імпорт всіх необхідних модулів
import { onFormLayoutsPage } from "../../support/page_objects/formLayoutsPage"
import { navigateTo } from "../../support/page_objects/navigationModule"

// describe описує функцію (Feature), яка тестується. Містить набір тестів всередині.
describe('verify inline form on form layouts page', () => {
    
    // beforeEach хук, який здійснює логування перед виконанням кожного тесту
    beforeEach('Login and open HomePage', () => {
        cy.loginToApplication()
    })

    // Тестовий сценарій, який перевіряє можливість взаємодії з вбудованою формою
    it('should submit Inline form', () => {
        navigateTo.formLayoutsPage()
        // Метод, експортований з сторінки об'єкта Form Layouts
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('John', 'email@com.t')
        onFormLayoutsPage.elements.nameInputInlineForm().should('have.value', '')
    })
})