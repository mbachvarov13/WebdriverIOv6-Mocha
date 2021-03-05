import browserCapabilities from "../config/browserCapabilities";

class ContactUsPage {

    get subjectHeadingDropdown() { return $("#id_contact"); }
    get emailAddressInput() { return $("#email"); }
    get messageInput() { return $("#message"); }
    get submitBtn() { return $('#submitMessage'); }

    selectSubject(option) {
        this.subjectHeadingDropdown.selectByVisibleText(option);
        browser.pause(5000);
    };

    enterEmail(email) {
        this.emailAddressInput.setValue(email);
    };

    enterMessage(message) {
        this.messageInput.setValue(message);
    };

    submitEmail() {
        this.submitBtn.click();
    };

    isEmailIsSent() {
        return webElement.isVisible();
    }
}

export default new ContactUsPage();