import { CardInfosProps } from "@/types/types";
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useImc } from '../lib/hooks/useImc';

describe('useImc', () => {
  it('should calculate IMC correctly', () => {
    const { result } = renderHook(() => useImc());

    // Simulate user input
    act(() => {
      result.current.userInput({ id: 'weight' } as CardInfosProps, { target: { value: '70' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.userInput({ id: 'height' } as CardInfosProps, { target: { value: '1.75' } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Calculate IMC
    act(() => {
      result.current.calculateIMC();
    });

    // Check result
    expect(result.current.result).toBe('Votre IMC est de 22.86, vous avez un poids normal');
  });
});