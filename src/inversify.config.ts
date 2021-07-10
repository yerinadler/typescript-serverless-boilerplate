import 'reflect-metadata';

import { Container } from 'inversify';

import { TYPES } from './types';

import { HelloService } from '#services/hello.service';

const container = new Container();

container.bind<HelloService>(TYPES.HelloService).to(HelloService);

export default container;