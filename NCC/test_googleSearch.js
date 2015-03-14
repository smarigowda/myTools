var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    By = webdriver.By;

test.describe('Google Search', function() {
  var driver;

  test.before(function() {
    driver = new webdriver.Builder()
                          .forBrowser('firefox')
                          .build();
  });

  test.it('should open home page', function() {
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(By.name('q'));
    searchBox.sendKeys('webdriver');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'webdriver');
    });
  });

  test.it('search videos', function() {
    driver.findElement(By.name('btnG')).click();
    // driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    driver.wait(until.elementsLocated(By.linkText('Videos')), 10000);
    // driver.wait(until.elementsLocated(By.js("document.getElementById('lst-ib')")), 10000);

    driver.findElement(By.linkText('Videos')).click();
   
    driver.wait(until.elementsLocated(By.css('input[aria-label="Search Videos"]')), 30000);
    // driver.wait(until.elementsLocated(By.id('resultStats')), 10000);
    var inputBox = driver.findElement(By.css('input[aria-label="Search Videos"]'));
    inputBox.getAttribute('aria-label').then(function(value) {
      assert.equal(value, 'Search Videos');
    });
    // console.log(videosLink);
    // driver.wait(until.elementLocated(By.id('foogjhgjhghkg')), 100000);
    driver.quit();
  });

});