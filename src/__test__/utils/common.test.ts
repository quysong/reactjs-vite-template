import { getDecimalPart } from '../../utils/common';

describe('Test function getDecimalPart()', () => {
  it('Case num: 15.4. Expected: 4', () => {
    const num = 15.4;
    const input = getDecimalPart(num);
    const result = 4;

    expect(input).toEqual(result);
  });

  it('Case num: 0.4. Expected: 4', () => {
    const num = 0.4;
    const input = getDecimalPart(num);
    const result = 4;

    expect(input).toEqual(result);
  });

  it('Case num: 0. Expected: 0', () => {
    const num = 0;
    const input = getDecimalPart(num);
    const result = 0;

    expect(input).toEqual(result);
  });

  it('Case num: 15. Expected: 0', () => {
    const num = 15;
    const input = getDecimalPart(num);
    const result = 0;

    expect(input).toEqual(result);
  });
});
