import { beforeEach, describe, expect, it, vi } from 'vitest';
import { errorDateInput } from '../lib/functions';

describe('errorDate', () => {
    beforeEach(() => {
        // fake date with mocking
        const mockDate = new Date(2025, 1, 5, 15, 0, 0)
        vi.setSystemTime(mockDate)
        console.log(mockDate)
  });
  it('should return true if date is empty', () => {
    const date = '';
    expect(errorDateInput(date)).toBe(true);
  });

  it('should return true if date is greater than today', () => {
    const date = '2025-02-06';
    expect(errorDateInput(date)).toBe(true);
  });

  it('should return false if date is valid', () => {
    const date = '2025-02-05';
    expect(errorDateInput(date)).toBe(false);
  });
});