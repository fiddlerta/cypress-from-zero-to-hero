// Клас, оголошений як export, може бути імпортований в місця (класи) фреймворку 
export class FormLayoutsPage{

    /**
    * Об'єкт elements містить ключі (keys) з назвою веб елементів, 
    * а відповідні їм значення (values) - це шлях для їх знаходження (так звані локатори)
    */
    elements ={
        nameInputInlineForm: () => cy.get("form.form-inline input[placeholder='Jane Doe']"),
        emailInputInlineForm: () => cy.get("form.form-inline input[placeholder='Email']"),
        checkboxInlineForm: () => cy.get("form.form-inline nb-checkbox input"),
        submitButtonInlineForm: ()=> cy.get("form.form-inline button[type='submit']")
    }

    /**
    * Метод, який здійснює ввід імені та пошти у відповідні поля форми
    * Тоді активує чекбокс, і натискає на кнопку підтвердити (Submit) 
    * В якості параметрів приймає ім'я та пошту
    */
    submitInlineFormWithNameAndEmail(name, email){
        this.elements.nameInputInlineForm().type(name)
        this.elements.emailInputInlineForm().type(email)
        this.elements.checkboxInlineForm().check({force: true})
        this.elements.submitButtonInlineForm().click()
    }
}

/** 
 * Інструкція export використовується для експорту функцій, об'єктів 
 * чи примітивів з файлу (або модуля)
 * */ 
export const onFormLayoutsPage = new FormLayoutsPage()