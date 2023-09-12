export type actionType = {
  type: string;
  payload: Array<T> | null | number;
  error: string;
};
export type initialAccountType = {
  amount: number;
  pending: boolean;
  error?: string;
};

export type initialBonusType = {
  points: number;
  pending: boolean;
  error?: string;
};
