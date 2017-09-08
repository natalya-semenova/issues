const { defineSupportCode } = require('cucumber');

class Context {
  constructor({ attach, parameters }) {
    this.browsers = [];
    this.current = {};
    this.attach = attach;
    this.parameters = parameters;
  }
}

defineSupportCode(({ setWorldConstructor }) => {
  setWorldConstructor(Context);
});
