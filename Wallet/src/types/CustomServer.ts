import { Express } from 'express';

export default interface CustomServer extends Express {
  close?: Function;
}
