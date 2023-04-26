export {}

const firstLetterWord = (string: string = ''): string => 
  string
    .charAt(0)
    .toUpperCase() + 
  string
    .substring(1)
    .toLowerCase();

const firstLetterWords = (string: string = ''): string => 
  string
    .split('. ')
    .map(firstLetterWord)
    .join('. ')
