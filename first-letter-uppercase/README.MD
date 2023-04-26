# Первая буква в верхнем регистре

Проект направлен на разработку 2 функци. Первая функция реализует определение первой буквы в верхний регистр, а остальные буквы форматирует в нижнем регистре

## Установка локально

Необходимые шаги для запуска у себя локально

### В случае когда проект не клонирован

```bash
  git clone https://github.com/zaebbb/library-mini-utils.git
  cd library-mini-utils/first-letter-uppercase
```

### В случае когда проект уже существует

```bash
  git checkout main
  git pull origin main
```

## Деплой проекта в репозиторий

Как залить изменения в директорию 

```bash
  git add .
  git commit -m "commit - refs #1" 
  git checkout main
  git pull origin main
  git checkout issue1
  git merge main
  git push origin issue1
```

Далее необходимо подключиться к удаленному репозиторию

```bash
  git status
  git merge issue1
```

##  Навыки
JS, TS, PHP

## Лицензия

[MIT](https://choosealicense.com/licenses/mit/)