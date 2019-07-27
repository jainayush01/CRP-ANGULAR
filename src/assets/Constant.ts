export interface reportACrime {
  position: number;
  descript: string;
}
export let Report_DATA: reportACrime[] = [
  { position: 1, descript: 'uske ghar chor aye hai' }
]

export interface EmergencyDatabase {
  position: number;
  reason: string;
  name: string;
  mobile: number;
  address: string;

}
export let ELEMENT_DATA: EmergencyDatabase[] = [
  { position: 1, reason: 'ChildAbuse', name: 'Bunty', mobile: 12345, address: 'Hydrabad' },
  { position: 2, reason: 'Robbery', name: 'Ramesh', mobile: 123, address: 'Delhi' },
];

export interface FIRDatabase {
  position: number;
  registerationid: number;
  name: string;
  email: string;
  mobile: number;
  description: string;
  address: string;
  city: string;
  state: string;
  pincode: number;
  status: number;
  file:string;

}

export let FIR_DATA: FIRDatabase[] = [
  {
    position: 1,
    registerationid: 12,
    name: 'Bunty',
    email: 'abc',
    mobile: 12345,
    description: 'kuch bhi',
    address: 'Marathalli',
    city: 'Bengaluru',
    state: 'Karnatka',
    pincode: 560093,
    status: 2,
    file:'none'
  },
  {
    position: 2,
    registerationid: 22,
    name: 'Ramesh', email: 'abc',
    mobile: 123, description: 'murder',
    address: 'IndiraNagar', city: 'Bengaluru',
    state: 'Karnatka', pincode: 560034,
    status: 1,
    file:'none'
  },
];


