var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    By = webdriver.By;

test.describe('Google Search', function() {
  var driver;


  test.before(function() {
    driver = new webdriver.Builder()
                          // .forBrowser('firefox')
                          .forBrowser('chrome')
                          .build();
  });

  test.after(function() {
    driver.quit();
  });

  test.it('should open home page', function() {
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(By.name('q'));
    searchBox.sendKeys('webdriver');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'webdriver');
    });
  });


  test.it('should search videos', function() {
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.elementsLocated(By.linkText('Videos')), 10000);
    driver.findElement(By.linkText('Videos')).click();

    var cssLoc = By.css('input[aria-label="Search Videos"]');

    driver.wait(until.elementsLocated(cssLoc), 10000);
    var inputBox = driver.findElement(cssLoc);
    inputBox.getAttribute('aria-label').then(function(value) {
      assert.equal(value, 'Search Videos');
    });
  });


  test.it('sould search for images', function() {
    driver.wait(until.elementsLocated(By.linkText('Images')), 10000);
    var element = driver.findElement(By.xpath('//a[text()="Images"]'));
    driver.findElement(By.linkText('Images')).click();
    // var element = driver.findElement(By.xpath('//a[text()="Web"]'));
    driver.wait(until.stalenessOf(element), 20000);
    // driver.wait(until.elementIsDisabled(element), 20000);
  })

});