import { T24Module } from './t24.module';

describe('T24Module', () => {
  let t24Module: T24Module;

  beforeEach(() => {
    t24Module = new T24Module();
  });

  it('should create an instance', () => {
    expect(t24Module).toBeTruthy();
  });
});
