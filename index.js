//            _ _____    _     
//  _      __(_) __(_)  (_)___ 
// | | /| / / / /_/ /  / / __ \
// | |/ |/ / / __/ /_ / / /_/ /
// |__/|__/_/_/ /_/(_)_/\____/ 
//                                                     
// @brief: wifi.io node.js sdk
// @author: [turingou](http://guoyu.me)

var API = require('./api');

var Wifi = function(params) {
    this.account = params.account;
    this.server = 'http://api.wifi.io/';
    Wifi.prototype.user = new API('device',this);
    Wifi.prototype.device = new API('sensor',this);
    Wifi.prototype.data = new API('datapoint',this);
};

module.exports = Wifi;