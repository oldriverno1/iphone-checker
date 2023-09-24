export interface QueryResponse {
  head: Head;
  body: Body;
}

interface Head {
  status: string;
  data: Record<string, unknown>;
}

interface Body {
  content: Content;
}

interface Content {
  pickupMessage: PickupMessage;
  deliveryMessage: DeliveryMessage;
}

interface PickupMessage {
  stores: Store[];
  overlayInitiatedFromWarmStart: boolean;
  viewMoreHoursLinkText: string;
  storesCount: string;
  little: boolean;
  location: string;
  notAvailableNearby: string;
  notAvailableNearOneStore: string;
  warmDudeWithAPU: boolean;
  viewMoreHoursVoText: string;
  availability: Availability;
  viewDetailsText: string;
  availabilityStores: string;
  legendLabelText: string;
  filteredTopStore: boolean;
}

interface Store {
  storeEmail: string;
  storeName: string;
  reservationUrl: string;
  makeReservationUrl: string;
  storeImageUrl: string;
  country: string;
  city: string;
  storeNumber: string;
  partsAvailability: Record<string, PartAvailability>;
  phoneNumber: string;
  pickupTypeAvailabilityText: string;
  address: Address;
  hoursUrl: string;
  storeHours: StoreHour[];
  specialHours: SpecialHours;
  storelatitude: number;
  storelongitude: number;
  storedistance: number;
  storeDistanceWithUnit: string;
  storeDistanceVoText: string;
  // ... other properties
}

interface PartAvailability {
  storePickEligible: boolean;
  pickupSearchQuote: string;
  partNumber: string;
  pickupDisplay: string;
  pickupType: string;
  messageTypes: MessageTypes;
}

interface MessageTypes {
  compact: CompactMessageType;
  regular: RegularMessageType;
}

interface CompactMessageType {
  storeSearchEnabled: boolean;
  storePickupLabel: string;
  storeSelectionEnabled: boolean;
  storePickupQuote: string;
  storePickupLinkText: string;
  storePickupProductTitle: string;
}

interface RegularMessageType {
  storeSearchEnabled: boolean;
  storePickupLabel: string;
  storeSelectionEnabled: boolean;
  storePickupQuote: string;
  storePickupQuote2_0: string;
  storePickupLinkText: string;
  storePickupProductTitle: string;
}

interface Address {
  address: string;
  address3?: string;
  address2: string;
  postalCode: string;
  // ... other properties
}

interface StoreHour {
  storeTimings: string;
  storeDays: string;
}

interface SpecialHours {
  specialHoursText: string;
  bopisPickupDays: string;
  bopisPickupHours: string;
  specialHoursData: SpecialHourData[];
  viewAllSpecialHours: boolean;
}

interface SpecialHourData {
  specialDays: string;
  specialTimings: string;
}

interface Availability {
  isComingSoon: boolean;
}

interface DeliveryMessage {
  geoEnabled: boolean;
  WarmAPUWithDude: boolean;
  deliveryLocationLabel: string;
  geoLocated: boolean;
  availableOptionsText: string;
  deliveryLocationLink: DeliveryLocationLink;
  dudeCookieSet: boolean;
  processing: string;
  contentloaded: string;
  // ... other properties
}

interface DeliveryLocationLink {
  text: string;
  dataVar: Record<string, unknown>;
  newTab: boolean;
}
