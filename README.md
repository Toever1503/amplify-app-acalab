# saenggibu-app

This template should help get you started developing with Vue 3 in Vite.

## Quick Start
코드 저장소 복제

``` 
git clone https://github.com/acalab-web/saenggibu-app.git
```

amplify cli 설치하고 `EACCES` 에러 발생하면 [문제 해결 링크](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) 참고
```
npm install -g @aws-amplify/cli
```

설정하기
```
cd saenggibu-app

npm install
```

amplify 설정
```
amplify pull
```

Access Key ID, Secret Access Key를 전달 받아 설정
```
? Select the authentication method you want to use: AWS access keys
? accessKeyId: ********************
? secretAccessKey: ****************************************
? region: ap-northeast-2
? Which app are you working on? dw5hsb0rviael
? Pick a backend environment: dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you’re building javascript
Please tell us about your project
? What javascript framework are you using vue
? Source Directory Path: src
? Distribution Directory Path: dist
? Build Command: npm run build
? Start Command: npm run dev
? Do you plan on modifying this backend? Yes
```

빌드 & 로컬 실행하기
```
npm run build

npm run dev
```

웹브라우저 접속 -> [http://localhost:5173](http://localhost:5173)


## Branch

- main: 개발 브랜치
- prod: 운영 브랜치

## 폴더 설명

```
/amplify     -> amplify 설정 폴더로 인프라 환경 설정
/src         -> vue 개발 코드
/src/graphql -> schema 소스
...
```

## Amplify 설정

설정 변경
```
amplify configure project
```

변경 사항 확인
```
amplify status
```
변경 사항 가져오기 
```
amplify pull
```
변경 사항 반영하기  
```
amplify push
```
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
