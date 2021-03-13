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
  - 기본 : `<span>{{dataname}}</span>`
  - HTML 직접표시 : `<div v-html="dataname"></div>`
  - js 표현식 : `<span>{{dataNumber +1}}</span>` , `<span>{{boolean ? 'yes' : 'no'}}</span>`

---

## 디렉티브

- v-if : 화면에 나타낼지 말지
  ```
  <p v-if="seen">이제 나를 볼 수 있어요</p>
  <p v-if="!seen">이제 나를 볼 수 없어요</p>
  <p v-else>이제 나를 볼 수 없어요</p>
  <p v-else-if="neverSeen">이제 나를 볼 수 없어요</p>
  ```
- v-show : css display로 숨겼다 나타났다
  ```
  <p v-show="seen">이제 나를 볼 수 있어요</p>
  <p v-show="!seen">이제 나를 볼 수 없어요</p>
  ```
- v-bind:어트리뷰트
  ```
  <a v-bind:href="url">링크 이동 </a>
  <img v-bind:src="imagePath" />
  <a :href="url">링크 이동 </a>
  <img :src="imagePath" />
  ```

---

## class, style 바인딩

- v-bind:class
  ```
  <div :class="{ active: isActive }">활성화</div>
  <div class="">활성화</div>
  <div class="active">활성화</div>
  ```
- v-bind:style
  ```
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  <div style="color:red;font-size:16px"></div>
  ```

---

## 템플릿 반복, 이벤트

- v-for
  ```
  <ul>
    <li v-for="(key, val, index) in items" :key="item.name">
      {{index}} - {{key}} - {{val}}
    </li>
  </ul>
  ```

---

## v-on: 이벤트

- v-on:이벤트

  ```
  <button v-on:click="methodName">클릭하세요!</button>
  <button @click="methodName">클릭하세요!</button>
  <button @click="methodName(param)">클릭하세요!</button>
  ```

  - method

    > 주로 이벤트를 처리하기 위한 동작을 구현할 때
    > <br/> 컴포넌트 data에 대한 접근은 this.데이터명으로 한다.
    >
    > - 버튼클릭
    >
    > ```
    > <button @click="updateScore(1)">점수가져오기</button>
    > ```
    >
    > - 클릭시 호출되는 이벤트
    >
    > ```
    > method : {
    >   updateScore(score){
    >     this.score = score;
    >   }
    > }
    > ```

- v-on:이벤트.수식어
  ```
  <form @submit.prevent="onSubmit"> ... </form>
  <a @click.once="methodName">한 번 만</a>
  ```
  - stop
  - prevent
  - capture
  - self
  - once
- v-on:이벤트.키수식어
  ```
  <input @keyup.enter="submit">
  <input @keyup.13="submit">
  ```
  - enter
  - tab
  - delete (“Delete” 와 “Backspace” 키 모두를 캡처합니다)
  - esc
  - space
  - up
  - down
  - left
  - right

---

## computed

- computed
  - 지속적인 연산, 계산이 필요한 데이터 표현
  - 템플릿에서 데이터, props와 사용법 동일, 스크립트에서 function 형태로 작성
  - `watch`보다 간편
- 쓸 때
  ```
  <a
    :href="today"
  >
    go today!
  </a>
  ```
- 정의할 때
  ```
  computed: {
    today() {
      let date = new Date();
      return '/day/' + date.getDay();
    }
  }
  ```

---

## 폼

- text, checkbox, radio, select (pass!)

---

## 스타일(style)

- 컴포넌트에 한정된(scoped) 스타일 적용
- inline과 src모두 가능
- 독립된 컴포넌트, 관심사의 분리
  ```
  <style scoped>
    .day ul {padding:10px;}
    .dat ul li {padding:5px;}
  </style>
  <style lang="scss" src="./assets/css/style.scss" />
  ```

---

## 컴포넌트 라이프사이클

- 컴포넌트 기반 프레임워크의 핵심
- 컴포넌트 입장에서 생성부터 소멸까지의 큰 흐름

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
