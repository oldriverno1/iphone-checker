import {QueryResponse} from './interface';

export interface IResponseParser {
  isIphoneAvailable(data: QueryResponse): boolean;
}

export class ResponseParser implements IResponseParser {
  isIphoneAvailable(data: QueryResponse): boolean {
    const strores = data.body.content.pickupMessage.stores;
    return strores.some(store => {
      const partsAvailability = store.partsAvailability;
      const keys = Object.keys(partsAvailability);
      return keys.some(key => {
        const part = partsAvailability[key];
        return (
          part.pickupDisplay === 'available' ||
          part.pickupSearchQuote !== '目前無法提供'
        );
      });
    });
  }
}
