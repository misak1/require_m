
# require_m

gulpfileとか大量にrequireしていると重くなりますね。  
requireにかかる時間を確認できるようになります。  
requireの問題特定にお使いください。

## インストール - Install
```
$ npm i -S require_m
```

## 使い方 - Usage

### Node.js
```js
var M = require('require_m');
// M.setWidth(15); <- Option
// M.setText("(-"); <- Option
var browserify = M.require('browserify');
var express = M.require('express');
var pm2 = M.require('pm2');
var karma = M.require('karma');
var bower = M.require('bower');
var cordova = M.require('cordova');
var gulp = M.require('gulp');
var grunt = M.require('grunt');
var jade = M.require('jade');
var forever = M.require('forever');
var less = M.require('less');
var sass = M.require('sass');
var stylus = M.require('stylus');
```

### output "Default"
```
# node example.js
browserify                               require's time: 214ms
express                                  require's time: 81ms
pm2                                      require's time: 154ms
karma                                    require's time: 623ms
bower                                    require's time: 220ms
cordova                                  require's time: 178ms
gulp                                     require's time: 180ms
grunt                                    require's time: 143ms
jade                                     require's time: 261ms
forever                                  require's time: 294ms
less                                     require's time: 80ms
sass                                     require's time: 1ms
stylus                                   require's time: 78ms
```

### output "Use Option Sample"
```
# node example.js
browserify      (-: 249ms
express         (-: 82ms
pm2             (-: 171ms
karma           (-: 610ms
bower           (-: 221ms
cordova         (-: 188ms
gulp            (-: 188ms
grunt           (-: 148ms
jade            (-: 248ms
forever         (-: 318ms
less            (-: 81ms
sass            (-: 1ms
stylus          (-: 79ms  
```

## ライセンス - License
MIT License


## 作者 - Author
- (C)Misaki Shibata <misaki.pink@gmail.com>
