describe('App', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual("Angular App | ng-webpack");
  });

  it('should have <header>', function() {
    expect(element(by.css('my-app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', function() {
    expect(element(by.css('my-app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', function() {
    expect(element(by.css('main h1')).getText()).toEqual('Hello from Angular!');
  });

  it('should have <footer>', function() {
    expect(element(by.css('my-app footer')).getText()).toEqual("Webpack Angular Starter");
  });

});
