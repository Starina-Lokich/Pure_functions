// src/healthIndicator.js

/**
 * Определяет состояние здоровья персонажа.
 *
 * @param {Object} character - Объект персонажа.
 * @param {string} character.name - Имя персонажа.
 * @param {number} character.health - Здоровье персонажа (от 0 до 100).
 * @returns {string} Состояние здоровья ('healthy', 'wounded', 'critical').
 */
export default function getHealthStatus(character) {
    if (!character || typeof character !== 'object' || !('health' in character)) {
      throw new Error('Неверный формат данных персонажа');
    }
  
    const { health } = character;
  
    if (health > 50 && health <= 100) {
      return 'healthy';
    } else if (health >= 15 && health <= 50) {
      return 'wounded';
    } else if (health < 15 && health >= 0) {
      return 'critical';
    } else {
      throw new Error('Значение здоровья должно быть в диапазоне от 0 до 100');
    }
  }