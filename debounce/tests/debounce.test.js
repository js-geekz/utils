import { expect } from 'chai';
import debounce from '../';

describe('Debounce', function() {
  it('should return a function', function() {
  	const func = debounce(() => {}, 1000);
  	expect(func).to.be.a('function');
  });
});
