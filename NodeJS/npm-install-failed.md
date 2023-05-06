---
title: npm upgrade failed err code EEXIST
description: How to fix upgrade npm ERR! code EEXIST in nodejs
tags: [nodejs, npm]
categories: [programming, javascript]
date: 2023-05-06T13:27:31+07:00
updated: 2023-05-06T13:36:18+07:00
---

## Error logs 
let assumed your log errors like below:
```log
D:\bin\node>npm i -g npm@8                                                                                              
npm ERR! code EEXIST                                                                                                    
npm ERR! path D:\bin\node\windows\npm.cmd                                                                               
npm ERR! Refusing to delete D:\bin\node\windows\npm.cmd: is outside D:\bin\node\windows\node_modules\npm and not a link 
npm ERR! File exists: D:\bin\node\windows\npm.cmd                                                                       
npm ERR! Remove the existing file and try again, or run npm                                                             
npm ERR! with --force to overwrite files recklessly.                                                                                                                                                                                            npm ERR! A complete log of this run can be found in:                                                                    
npm ERR!     C:\Users\dimas\AppData\Roaming\npm-cache\_logs\2023-05-06T06_11_27_051Z-debug.log

D:\bin\node>npm install -g --force npm                                                                                  
npm WARN using --force I sure hope you know what you are doing.                                                         
npm ERR! code EEXIST                                                                                                    
npm ERR! path D:\bin\node\windows\npm.cmd                                                                               
npm ERR! Refusing to delete D:\bin\node\windows\npm.cmd: is outside D:\bin\node\windows\node_modules\npm and not a link 
npm ERR! File exists: D:\bin\node\windows\npm.cmd                                                                       
npm ERR! Remove the existing file and try again, or run npm                                                             
npm ERR! with --force to overwrite files recklessly.                                                                                                                                                                                            npm ERR! A complete log of this run can be found in:                                                                    
npm ERR!     C:\Users\dimas\AppData\Roaming\npm-cache\_logs\2023-05-06T06_13_54_211Z-debug.log  
```

## Step how to fix

### go to your nodejs root directory
example of my nodejs root directory at `D:\bin\node\windows`

### delete `npm`, `npm.cmd`, `npx`, `npx.cmd`
delete `npm`, `npm.cmd`, `npx`, `npx.cmd` in nodejs root directory

### open terminal/cmd and enable corepack
```bash
corepack enable
```
### upgrade `npm` using `yarn`
```bash
yarn dlx npm i -g npm
```
wait until process completed.

## Conclusion
After the upgrade process using `yarn` above, `npm` will automatically be updated.

