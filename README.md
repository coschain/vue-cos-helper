# vue-cos-widget

Vue plugins for interacting with coschain though cos chrome extension.

# Usage

## install

```bash
npm i @coschain/vue-cos-widget --save
```

## principle

1. each widget has two callback functions. `v-on:result` would be triggered when request success otherwise `v-on:error` triggered.
2. text refers to what the button-like widget will display

## cos-transfer

```js
import Widget from 'vue-cos-widget'
Vue.use(Widget)
```

```html
<cos-transfer receiver="initminer" amount="1" text="donate" memo="test" v-on:result="resultHandler" v-on:error="errorHandler"></cos-transfer>
```

## cos-vest

```js
import Widget from 'vue-cos-widget'
Vue.use(Widget)
```

```html
<cos-vest text="vest" v-on:result="resultHandler" v-on:error="errorHandler"></cos-vest>
```

## cos-unvest

```js
import Widget from 'vue-cos-widget'
Vue.use(Widget)
```

```html
<cos-unvest text="unvest" v-on:result="resultHandler" v-on:error="errorHandler"></cos-unvest>
```

## cos-chicken

```js
import Widget from 'vue-cos-widget'
Vue.use(Widget)
```

```html
<cos-chicken text="stake" v-bind:receiver="receiver" v-on:result="resultHandler" v-on:error="errorHandler"></cos-chicken>
```

## cos-unchicken

```js
import Widget from 'vue-cos-widget'
Vue.use(Widget)
```

```html
<cos-unchicken text="unstake" v-bind:receiver="receiver" v-on:result="resultHandler" v-on:error="errorHandler"></cos-unchicken>
```

## cos-contractcall

```js
import Widget from 'vue-cos-widget'
Vue.use(Widget)
```

```html
<cos-contractcall text="contract call" v-bind:contract="contract" v-bind:owner="owner" v-bind:method="method" v-bind:argument="argument" v-bind:payment="payment" v-on:result="resultHandler" v-on:error="errorHandler"></cos-contractcall>
```

## cos-votebp

```js
import Widget from 'vue-cos-widget'
Vue.use(Widget)
```

```html
<cos-votebp text="vote" v-bind:bp="bp" v-bind:cancel="cancel" v-on:result="resultHandler" v-on:error="errorHandler"></cos-votebp>
```
