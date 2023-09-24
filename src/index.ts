import {AppController} from './app-controller';
import * as dotenv from 'dotenv';

dotenv.config();
const app = new AppController();

const URL =
  'https://www.apple.com/tw/shop/fulfillment-messages?pl=true&mts.0=regular&mts.1=compact&parts.0=MU793ZP%2FA&searchNearby=true&store=R713';
const EMAIL = process.env.RECEIVER || '';

app
  .checkAndNotify(URL, EMAIL)
  .then(() => {
    console.log('Check completed.');
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
