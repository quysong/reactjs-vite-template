import { STORAGE_PREFIX } from '../constants/storage';

/**
 * Get decimal part
 * @param num Decimal number
 * @returns only decimal part of the number
 */
export const getDecimalPart = (num: number) => {
  if (Number.isInteger(num)) {
    return 0;
  }

  const decimalStr = num.toString().split('.')[1];
  return Number(decimalStr);
};
