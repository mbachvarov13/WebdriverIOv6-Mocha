const assert = require("assert");

class Helpers {

    assertTitleIsAsExpected(expectedTitle) {
        assert.strictEqual(browser.getTitle(), expectedTitle);
    }
}

export default new Helpers();