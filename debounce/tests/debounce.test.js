import { expect } from 'chai';
import debounce from '../';

describe('Debounce', function() {

  it('should return a function', function() {
    const func = debounce(() => {}, 1000);
    expect(func).to.be.a('function');
  });

  it('should call the function only once', function(done) {
    let i = 0;
    const func = debounce(() => {
      i += 1;
      expect(i).to.equal(1);
      done();
    }, 1000);
    func();
    func();
    func();
    func();
    func();
  });

  it('should call the function with expected arguments', function(done) {
    const func = debounce((msg) => {
      expect(msg).to.equal('smile');
      done();
    }, 1000);
    func('smile');
  });
  
});
