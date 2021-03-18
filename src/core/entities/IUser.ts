export enum userPlans {
  PAID = 'paid',
  FREE = 'free',
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  plan: userPlans;
}
