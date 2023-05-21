// enable IntelliSense for Cypress
/// <reference types="Cypress" />
export class SmartTablePage{

    elements = {
        addButtonActions: ()=> cy.get("th[ng2-st-add-button] > a"),
        idInputEditorField: ()=> cy.get("input-editor input[ng-reflect-name='id']"),
        firstNameInputEditorField: ()=> cy.get("input-editor input[ng-reflect-name='firstName']"),
        lastNameInputEditorField: ()=> cy.get("input-editor input[ng-reflect-name='lastName']"),
        usernameInputEditorField: ()=> cy.get("input-editor input[ng-reflect-name='username']"),
        emailInputEditorField: ()=> cy.get("input-editor input[ng-reflect-name='email']"),
        ageInputEditorField: ()=> cy.get("input-editor input[ng-reflect-name='age']"),
        approveNewEntryCheckmarkButton: ()=> cy.get("a.ng2-smart-action-add-create"),
        approveEditEntryCheckmarkButton:  '.nb-checkmark',
        tableRowsList: ()=> cy.get("tbody tr.ng-star-inserted"),
        editRowAction:  '.nb-edit',
        deleteRowAction:  '.ng2-smart-action-delete-delete',
        cellsInRowListViewMode: ()=> 'ng2-smart-table-cell div.ng-star-inserted',
        filterInputsList: ()=> cy.get("th input-filter input"),
        usernameCellsList: ()=> cy.get("tr td.ng-star-inserted:nth-child(5)")
    }

    // add

    // private method inputParams
    #inputParams(id, firstName, lastName, username, email, age){
        this.elements.idInputEditorField().clear().type(id)
        this.elements.firstNameInputEditorField().clear().type(firstName)
        this.elements.lastNameInputEditorField().clear().type(lastName)
        this.elements.usernameInputEditorField().clear().type(username)
        this.elements.emailInputEditorField().clear().type(email)
        this.elements.ageInputEditorField().clear().type(age)
    }

    addEntryWithParams(id, firstName, lastName, username, email, age){
        this.elements.addButtonActions().click()
        this.#inputParams(id, firstName, lastName, username, email, age)
        this.elements.approveNewEntryCheckmarkButton().click()
    }

    verifyTableRowContainsValues(rowIndex, id, firstName, lastName, username, email, age){
        this.elements.tableRowsList().eq(rowIndex).children(this.elements.cellsInRowListViewMode).then(rowCells => {
                expect(rowCells[1]).to.contain.text(id)
                expect(rowCells[2]).to.contain.text(firstName)
                expect(rowCells[3]).to.contain.text(lastName)
                expect(rowCells[4]).to.contain.text(username)
                expect(rowCells[5]).to.contain.text(email)
                expect(rowCells[6]).to.contain.text(age)
            })
    }

    // edit

    editEntryParamsByIndex(rowIndex, id, firstName, lastName, username, email, age){
        this.elements.tableRowsList().eq(rowIndex).find(this.elements.editRowAction).click()
        this.#inputParams(id, firstName, lastName, username, email, age)
        this.elements.tableRowsList().eq(rowIndex).find(this.elements.approveEditEntryCheckmarkButton).click()
    }
    

    // delete + stub() info: video regarding tooltips
    deleteEntryByIndex(rowIndex, confirmCondition){
        const confirmStub = cy.stub()
        cy.on('window:confirm', confirmStub.returns(confirmCondition))
        this.elements.tableRowsList().eq(rowIndex).find(this.elements.deleteRowAction).click().then(()=>{
            expect(confirmStub.getCall(0)).to.be.calledWith("Are you sure you want to delete?");
        })
    }
    
    verifyTableDoesntContainEntryWithUsername(username){
        this.elements.usernameCellsList().each((element)=>{
            expect(element.text()).not.to.be.equal(username)
        })
    }

    // filtering

}

export const onSmartTable = new SmartTablePage() 