const functionCache = new WeakMap();
const processedObjects = new WeakSet();

function processObject(obj) {
  if (processedObjects.has(obj)) {
    return functionCache.get(obj);
  }

  if (functionCache.has(obj)) {
    return functionCache.get(obj);
  }

  const result = {
    processed: true,
    data: 'Результат обработки объекта ' + JSON.stringify(obj),
    timestamp: Date.now()
  };

  functionCache.set(obj, result);
  processedObjects.add(obj);

  return result;
}

const obj1 = { id: 1, name: 'Тестовый объект' };
const obj2 = { id: 2, name: 'Другой объект' };

console.log(processObject(obj1));
console.log(processObject(obj1));
console.log(processObject(obj2));
console.log('obj1 обработан?', processedObjects.has(obj1));
console.log('obj2 обработан?', processedObjects.has(obj2));





// 1. Чем Map отличается от обычного объекта ({})?
// Ключи: В Map — любые типы, в объекте — только строки/Symbol.

// Порядок: Map сохраняет порядок, объект — нет (до ES6).

// Размер: У Map есть свойство .size, у объекта — нет.

// Производительность: Map быстрее для частого добавления/удаления.

// 2. Когда использовать Set, а когда Array?
// Set: Для уникальных значений, быстрой проверки наличия (has).

// Array: Если важен порядок, нужны дубликаты или методы типа map/filter.

// 3. Производительность Map/Set vs объекты/массивы
// Map/Set: Быстрее для добавления/удаления, поиска (O(1)).

// Объекты/массивы: Медленнее при частых изменениях, но оптимизированы для простых случаев.

// 4. Основные методы Map и Set
// Map:

// set(key, value), get(key), has(key), delete(key), clear().

// Set:

// add(value), has(value), delete(value), clear().

// 5. Сохранение порядка
// Да: Map и Set сохраняют порядок добавления.

// 6. Почему ключи в WeakMap/WeakSet — только объекты?
// Чтобы сборщик мусора мог автоматически удалять элементы при отсутствии других ссылок на ключ.

// 7. Чем WeakMap отличается от Map?
// WeakMap:

// Только объекты в ключах.

// Нет перебора (keys, values, entries).

// Автоматическая очистка при удалении ключа.

// 8. Чем WeakSet отличается от Set?
// WeakSet:

// Только объекты в значениях.

// Нет перебора и метода .size.

// Автоочистка при удалении объекта.

// 9. Почему нет методов перебора в WeakMap/WeakSet?
// Из-за особенностей сборки мусора: список элементов может меняться в любой момент.

// 10. Где использовать WeakMap?
// Для кэширования, приватных данных объекта, избегая утечек памяти.

// 11. Как работает сборка мусора в WeakMap/WeakSet?
// Элементы удаляются, если на ключ (WeakMap) или значение (WeakSet) нет других ссылок.

// 12. Можно ли примитивы в WeakMap/WeakSet?
// Нет: Только объекты (иначе теряется смысл слабой ссылки).

// 13. Преимущество WeakMap перед Map
// Не препятствует сборке мусора, уменьшает утечки памяти.

// 14. Почему WeakSet не содержит примитивы?
// Примитивы неизменяемы и не могут быть удалены сборщиком.

// 15. Какие коллекции позволяют перебор?
// Map, Set, Array — да.

// WeakMap, WeakSet — нет.

// 16. Что использовать для кэширования с объектами?
// WeakMap: Если нужно автоматическое удаление при недоступности ключа.

// 17. Разница Set и WeakSet на практике
// Set: Для любых значений, с перебором.

// WeakSet: Только объекты, без перебора, с автоочисткой.


