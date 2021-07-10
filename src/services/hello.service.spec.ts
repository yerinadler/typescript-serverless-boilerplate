import data from '../data/mock.json';

import { HelloService } from './hello.service';

describe('Hello Service', () => {
  const helloService = new HelloService();
  it('getHello()', () => {
    expect(helloService.getHello()).toBe('Hello, Serverless');
  });
  it('getMockData()', () => {
    expect(helloService.getMockData()).toEqual(data);
  });
});