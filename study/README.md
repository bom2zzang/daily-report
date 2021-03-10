# study

## component based

- MVVM(..ViewModel)
  - View = dom, html
  - Model = data, store
- 데이터 바인딩가 전달
- 상태(데이터)에 의한 UI제어
- 관심사의 분리
- 분리와 재사용

---

## Vue vs. jQuery

---

## 학습레퍼런스

- 공식문서
- 한국사용자모임
- awesome vue

---

## 템플릿 구조와 컴포넌트

- 기본 템플릿 구조
  - node_modules/
  - public/
    - index.html → 브라우저에 보여지는 페이지
  - src/
    - assets/
    - components/
      - HelloWorld.vue → vue 컴포넌트
    - views/
    - App.vue → 최상위 vue 컴포넌트
    - main.js → 메인. vue 인스턴스 생성, 각종 모듈 임포트
    - router.js → 앱 라우터 설정
    - store.js → vuex. 상태 관리 모듈 설정
  - package.json → npm 설정

---

## Bundle

- 번들링
  - 프로젝트의 자원을 모아 덩어리로 만든다
- 빌드
  - `npm run build`
  - assets(이미지,js,css) → bundling → `/dist/`
  - 호스팅 서버에서는 `/dist/`만 서비스하면 된다

---

## 컴포넌트 구조

- template
  - HTML + vue 템플릿 문법
- script
  - import
  - component정의
  - data정의
    - 컴포넌트가 가지고 있는 (내부에서 사용할 수 있는) 데이터
    - 함수 형태로 정의
  - method
  - component cycle 관리
- style
  - css, sass
  - inline작성
  - src

---

## 템플릿

- 기본구조
  ```
  <template>
      <div></div>
  </template>
  ```
- 표현
  - 기본 `<span>{{dataname}}</span>`
  - HTML 직접표시 `<div v-html="dataname"></div>`
  - js 표현식 `<span>{{dataNumber +1}}</span>` , `<span>{{boolean ? 'yes' : 'no'}}</span>`

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
