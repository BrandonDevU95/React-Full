import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../Hooks/useCounter';

describe('Pruebas en UseCounter', () => {
	test('Debe de retornar valores por defecto', () => {
		const { result } = renderHook(() => useCounter());
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	});
});
