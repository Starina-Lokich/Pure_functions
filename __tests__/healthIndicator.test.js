// __tests__/healthIndicator.test.js

import getHealthStatus from '../src/healthIndicator.js';

describe('getHealthStatus', () => {
  test('возвращает "healthy" при здоровье более 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('возвращает "wounded" при здоровье от 15 до 50', () => {
    const character1 = { name: 'Воин', health: 40 };
    const character2 = { name: 'Лучник', health: 15 };

    expect(getHealthStatus(character1)).toBe('wounded');
    expect(getHealthStatus(character2)).toBe('wounded');
  });

  test('возвращает "critical" при здоровье менее 15', () => {
    const character = { name: 'Жрец', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('выбрасывает ошибку при отсутствии свойства "health"', () => {
    const invalidCharacter = { name: 'Безымянный' };
    expect(() => getHealthStatus(invalidCharacter)).toThrow('Неверный формат данных персонажа');
  });

  test('выбрасывает ошибку при значении здоровья вне диапазона [0, 100]', () => {
    const invalidCharacter1 = { name: 'Персонаж', health: -10 };
    const invalidCharacter2 = { name: 'Персонаж', health: 110 };

    expect(() => getHealthStatus(invalidCharacter1)).toThrow('Значение здоровья должно быть в диапазоне от 0 до 100');
    expect(() => getHealthStatus(invalidCharacter2)).toThrow('Значение здоровья должно быть в диапазоне от 0 до 100');
  });
});