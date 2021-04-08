/**
 * @file Routes for getting Canny authentication info.
 */

import express from 'express';

import { cannyIdentify } from './canny.handlers';

/**
 * Set up Canny routes.
 * @param app: express app instance.
 */
export default async (app: express.Express): Promise<void> => {
  app.get('/api/canny/token', cannyIdentify);
};
