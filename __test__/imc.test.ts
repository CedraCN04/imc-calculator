import { CardInfosProps } from "@/types/types";
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useImc } from '../lib/hooks/useImc';

describe('useImc', () => {
  it('should calculate IMC correctly', () => {
    const { result } = renderHook(() => useImc());

    // Simuler les entrées utilisateurs
    act(() => {
      result.current.userInput({ id: 'weight' } as CardInfosProps, { target: { value: '70' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.userInput({ id: 'height' } as CardInfosProps, { target: { value: '175' } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Calcul de l'IMC
    act(() => {
      result.current.calculateIMC();
    });

    // Controle du resultat
    expect(result.current.result).toBe('Votre IMC est de 22.86, vous avez un poids normal');
  });

  it('should return error if height is not valid', () => {
    const { result } = renderHook(() => useImc());

    // Simuler les entrées utilisateurs
    act(() => {
      result.current.userInput({ id: 'weight' } as CardInfosProps, { target: { value: '70' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.userInput({ id: 'height' } as CardInfosProps, { target: { value: '0' } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Calcul de l'IMC
    act(() => {
      result.current.calculateIMC();
    });

    // Controle du resultat
    expect(result.current.heightError).toBe(true);
  })
});