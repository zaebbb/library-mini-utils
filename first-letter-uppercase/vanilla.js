const firstLetterWord = (string = '') => 
  string
    .charAt(0)
    .toUpperCase() + 
  string
    .substring(1)
    .toLowerCase();

const firstLetterWords = (string = '') => 
  string
    .split('. ')
    .map(firstLetterWord)
    .join('. ')
