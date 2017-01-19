import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
})

describe('index.html', () => {
  it('should contain a table', (done) => {
    const markup = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(markup, function (error, window) {
      const table = !!window.document.getElementById('users');
      expect(table).to.equal(true);
      done();
      window.close();
    });
  });
})
