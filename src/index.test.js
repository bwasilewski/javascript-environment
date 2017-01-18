import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(false);
  })
})

describe('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
  })
})
