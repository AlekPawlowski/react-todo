# Dlaczego Vite zamiast CRA:
* większa szybkość w budowaniu samego projektu, 
* mozliwości konfiguracji na starcie są zdecydowanie większe
* większa szybkość w przeładowywaniu contentu

# Opis projektu
Aplikacja TODO to prosta aplikacja do zarządzania zadaniami. Użytkownicy mogą dodawać nowe zadania, oznaczać je jako zakończone, oraz usuwać niepotrzebne zadania i zapisywać je w pamięci przeglądarki za pomocą localStorage. Aplikacja ma na celu pomóc użytkownikom w organizacji ich obowiązków i codziennych zadań.

# Requirements
NPM -> package menager

# Tech stack:
Tech  | Description
------------- | -------------
[EsList](https://eslint.org/)  | JS/TS linter
[Prettier](https://prettier.io/)  | Code formater
[Typescript](https://www.typescriptlang.org/) | JavaScript supset language
[Styled Components](https://styled-components.com/) | CSS in JavaScript
[React](https://react.dev//) | React library to create graphic interfaces
[React-hook-form](https://react-hook-form.com/) | Library for managing forms
[Zod](https://zod.dev/) | Schema declaration and validation libarary
[Redux](https://redux.js.org/) | State menager for React
[vitest](https://vitest.dev/) | Test framework
[SCSS](https://sass-lang.com/) | CSS preprocessor
[UUID](https://github.com/uuidjs/uuid#readme) | Library for creating UUID

# Instalacja i uruchomienie
```bash
git clone https://github.com/AlekPawlowski/users_list_app.git
# ponizsze komendy wykonać w katalogu projektu
# pobranie paczek
npm install
# uruchomienie projektu lokalnie
npm run dev
# zbudowanie paczki
npm run build
# pusczenie testów
npm run test
```

# Localhost adress (po uruchomieniu lokalnie):
http://localhost:5173/

# Live adress
[live adress](https://ap-to-do-app.netlify.app/)

# Testowany komponent:
TaskListElement (src/components/TaskListElement/TaskListElement.tsx);