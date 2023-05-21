export class DatePickerPage{

    elements ={
        inputCommonDatepicker: () => cy.contains("Common Datepicker").parent().find('input')
        .then(input=> {
            cy.wrap(input)
        }),
        //inputRangePicker: () => cy.get(""),
        //inputMinMaxPicker: () => cy.get(""),
        dateBoxCalendarNavigation: () => cy.get("nb-calendar-navigation"),
        rightNavButtonCalendarNavigation: () => cy.get("[data-name='chevron-right']"),
        dayPickerCalendar: () => cy.get("nb-calendar-day-picker [class='day-cell ng-star-inserted']")
    }

    // todo: detach from class to separate function
    selectDateFromCurrent(days) {
        let date = new Date()
        date.setDate(date.getDate() + days)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleString('default', {month: 'short'})
        this.elements.dateBoxCalendarNavigation().invoke('attr', 'ng-reflect-date').then(dateAttribute => {
            if(!dateAttribute.includes(futureMonth)){
                this.elements.rightNavButtonCalendarNavigation().click()
                this.elements.dayPickerCalendar().contains(futureDay).click()
            } else {
                this.elements.dayPickerCalendar().contains(futureDay).click()
            }
        })    
    }
    
    returnFutureDate(days) {
        let date = new Date()
        date.setDate(date.getDate() + days)
        return date.getDate()
    }

    selectDateFromCurrentInCommonDatepicker(days){
        this.elements.inputCommonDatepicker().click()
        this.selectDateFromCurrent(days)
    }
}

export const onDatePickerPage = new DatePickerPage()