import {AppController} from './app-controller';
import * as dotenv from 'dotenv';
import logger from './logger';

dotenv.config();
const app = new AppController();

const URL =
  'https://www.apple.com/tw/shop/fulfillment-messages?pl=true&mts.0=regular&mts.1=compact&parts.0=MU793ZP%2FA&searchNearby=true&store=R713';
const EMAIL = process.env.RECEIVER || '';

const checkAvailability = () => {
  logger.info('Checking availability...');
  app
    .checkAndNotify(URL, EMAIL)
    .then(() => {
      logger.info('Check completed.');
    })
    .catch(error => {
      logger.error('An error occurred:', error);
    });
};

// Call the function immediately to check right away
checkAvailability();

// Set an interval to check every 1 minute (60000 milliseconds)
setInterval(checkAvailability, 60000);
