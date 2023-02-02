module.exports = class A {
  method() {
    const res = this.called();
    return res;
  }
  called() {
    return 114514
  }
}