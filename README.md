# vue-cos-helper

Vue plugins for interacting with coschain though cos chrome extension.

# Usage

## cos-transfer

```js
import Transfer from 'vue-cos-helper'
Vue.use(Transfer)
```

```html
<cos-transfer receiver="initminer" amount="1" text="donate" memo="test"></cos-transfer>
```
