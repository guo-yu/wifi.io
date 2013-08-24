wifi.io sdk ![npm](https://badge.fury.io/js/wifi.png)
---

wifi.io node.js sdk

### How to install 

make sure `node-gyp` has been installed.

````
$ npm install wifi
````

### Sample code

require wifi.io

````javascript
var Wifi = require('wifi');

// init instance
var wifi = new Wifi({
    username: 'xxx',
    password: 'xxx'
});
````

users api
````javascript
// signin
wifi.user.login(function(err,result){
    // console.log result token
    // token will be stored in wifi instance
    console.log(result);
});

// signout
wifi.user.logout(function(err,result){
    // console.log result token
    console.log(result) 
});

// get_devices
// http://wifi.io/developer/api_if.php?id=50e67bc57f8b9aaf18000000
wifi.user.devices({
    status: 0 , // 根据设备在线状态查询，-1:不在线，0:全部，1:在线，默认为全部,
    page: 1, // 分页页码，默认为1
    pagesize: 10 // 分页大小，默认每页10条，如果pagesize为0，则返回全量数据
},function(err,result){
    // console.log result token
    console.log(result) 
});
````

device api
````javascript
wifi.device.command({
    did: 123, // device id 目标设备的设备id
    method: 'reboot', // 要执行的方法名称
    params: {} // 需要传递的参数
},function(err,result){
    console.log(result);
});
````

data apis
````javascript
wifi.data.get({
    tags: '123', // device id 目标设备的设备id
    starttime: 0,
    endtime: 100,
    filter: '(3,9]',
    simplify: false,
    page: 1,
    pagesize: 10,
    method: 'reboot', // 要执行的方法名称
    params: {} // 需要传递的参数
},function(err,result){
    console.log(result);
});

### Local scanner supported

````javascript
// init local instance
var local = new Wifi().scan();

// send command
local.device.command({
    method: 'reboot', // 要执行的方法名称
    params: {} // 需要传递的参数
},function(err,result){
    console.log(result);
});
````

### Pull Request Welcome !

- fork this repo
- feel free to add your feature
- make sure your feature are fully tested!
- send me a PR, and enjoy !