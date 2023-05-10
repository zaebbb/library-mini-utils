export {}

function textToSlug(string: string = ''): string {
  let letters: string[] = string
    .trim()
    .toLowerCase()
    .split('')

  letters = letters.map(switchFormatterLetter);

  return letters.join('')
}

function switchFormatterLetter(letter: string = ''): string {
  if ('abcdefghijklmnopqrstuvwxyz'.includes(letter)) {
    return letter;
  }

  switch (letter) {
    case 'а': return 'a'
    case 'б': return 'b'
    case 'в': return 'v'
    case 'г': return 'g'
    case 'д': return 'd'
    case 'е': case 'ё': return 'e'
    case 'ж': return 'zh'
    case 'з': return 'z'
    case 'и': return 'i'
    case 'й': return 'y'
    case 'к': return 'k'
    case 'л': return 'l'
    case 'м': return 'm'
    case 'н': return 'n'
    case 'о': return 'o'
    case 'п': return 'p'
    case 'р': return 'r'
    case 'с': return 's'
    case 'т': return 't'
    case 'у': return 'u'
    case 'ф': return 'f'
    case 'х': return 'kx'
    case 'ц': return 'ts'
    case 'ч': return 'ch'
    case 'ш': return 'sh'
    case 'щ': return 'shch'
    case 'ы': return 'y'
    case 'э': return 'e'
    case 'ю': return 'yu'
    case 'я': return 'ya'
    case ' ': case '-': return '-'
  }

  return '';
}