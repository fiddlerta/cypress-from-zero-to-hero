function clickOnCollapsedMenuButton(navigationButtonTitle){
    cy.contains('a', navigationButtonTitle).then(navButton => {
        cy.wrap(navButton).find(".expand-state g[data-name^='chevron']").invoke('attr', 'data-name')
        .then(attr =>{
            if(attr.includes('left')){
                cy.wrap(navButton).click()
            }
        })
    })
}

export class NavigationPage {
    // Layout
    stepperPage(){
        clickOnCollapsedMenuButton('Layout')
        cy.contains('Stepper').click()
    }

    accordionPage(){
        clickOnCollapsedMenuButton('Layout')
        cy.contains('Accordion').click()
    }

    // Forms
    formLayoutsPage(){
        clickOnCollapsedMenuButton('Forms')
        cy.contains('Form Layouts').click()
    }

    datePickerPage(){
        clickOnCollapsedMenuButton('Forms')
        cy.contains('Datepicker').click()
    }

    // Modal and overlays
    dialogPage(){
        clickOnCollapsedMenuButton('Modal & Overlays')
        cy.contains('Dialog').click()
    }

    windowPage(){
        clickOnCollapsedMenuButton('Modal & Overlays')
        cy.contains('Window').click()
    }

    popoverPage(){
        clickOnCollapsedMenuButton('Modal & Overlays')
        cy.contains('Popover').click()
    }

    toastrPage(){
        clickOnCollapsedMenuButton('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    tooltipPage(){
        clickOnCollapsedMenuButton('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

    // Extra components
    calendarPage(){
        clickOnCollapsedMenuButton('Extra Components')
        cy.contains('Calendar').click()
    }

    // Tables and data
    smartTablePage(){
        clickOnCollapsedMenuButton('Tables & Data')
        cy.contains('Smart Table').click()
    }

    treeGridPage(){
        clickOnCollapsedMenuButton('Tables & Data')
        cy.contains('Tree Grid').click()
    }

    // Auth
    loginPage(){
        clickOnCollapsedMenuButton('Auth')
        cy.contains('Login').click()
    }

    registerPage(){
        clickOnCollapsedMenuButton('Auth')
        cy.contains('Register').click()
    }

    requestPasswordPage(){
        clickOnCollapsedMenuButton('Auth')
        cy.contains('Request Password').click()
    }

    resetPasswordPage(){
        clickOnCollapsedMenuButton('Auth')
        cy.contains('Reset Password').click()
    }
}

export const navigateTo = new NavigationPage()