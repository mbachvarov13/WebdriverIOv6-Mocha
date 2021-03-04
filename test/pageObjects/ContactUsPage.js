class ContactUsPage{

    get subjectHeadingDropdown(){ return $("//span[text()='-- Choose --']");}
    get emailAddressInput(){ return $("#email");}
    get messageInput(){ return $("#message");}
    get submitBtn(){ return $('#submitMessage');}

    selectHeadingOption(option){ return $("//option[contains(text(),'"+option+"')]");}

    selectSubject(option){
        this.selectHeadingOption.waitForVisible();
        this.subjectHeadingDropdown.click();
        this.selectHeadingOption(option).click();
    };

    enterEmail(email){
        this.emailAddressInput.setValue(email);
    };

    enterMessage(message){
        this.messageInput.setValue(message);
    };

    submitEmail(){
        this.submitBtn.click();
    };

    
}

export default new ContactUsPage();