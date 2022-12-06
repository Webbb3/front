// Task: Створити функцію з назвою isEven, яка буде приймати 
// число і повертати булевий результат (True/False). 
// True – число парне, False – число не парне. 
// Результат повернути за допомогою ключового слова "return".

function isEven (number) {
    if ((number % 2) === 0) {
      return true;
    } else
      return false;
  };

// or

function isEven (number) {
    return ((number % 2) === 0) ? true : false;
};