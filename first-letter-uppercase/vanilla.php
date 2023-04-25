<?php 

function firstLetterWord(string $string = ''): string
{
  return strToUpper($string[0]) . strToLower(substr($string, 1));
}

function firstLetterWords(string $string = ''): string
{
  $arStr = explode('. ', $string);

  foreach ($arStr as $key => $value) {
    $arStr[$key] = firstLetterWord($value);
  }

  return implode('. ', $arStr);
}