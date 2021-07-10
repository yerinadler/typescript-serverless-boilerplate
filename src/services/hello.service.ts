import { injectable } from 'inversify';

import data from '../data/mock.json';

@injectable()
export class HelloService {
  public getHello(): string {
    return 'Hello, Serverless';
  }

  public getMockData(): { name: string } {
    return data;
  }
}