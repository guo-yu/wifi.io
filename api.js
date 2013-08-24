var api = require('beer');

var API = function(type, params) {
    if (params) this.parent = params;
    this.type = type;
}

var routerMap = function(type, params) {
    var map = {
        user: {
            add: 'devices',
            list: 'devices',
            update: 'device/' + params.device_id,
            read: 'device/' + params.device_id,
            remove: 'device/' + params.device_id
        },
        device: {
            add: 'device' + device_id + '/sensors',
            list: 'device' + device_id + '/sensors',
            update: 'device/' + params.device_id + '/sensor/' + params.sensor_id,
            read: 'device/' + params.device_id + '/sensor/' + params.sensor_id,
            remove: 'device/' + params.device_id + '/sensor/' + params.sensor_id
        },
        data: {
            add: 'device' + device_id + '/sensors/datapoints',
            update: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign,
            read: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign,
            remove: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign
        }
    }
    return map[type][params.action];
}

API.prototype.add = function(device_id, cb) {
    var info = this.parent,
        self = this;
    api.post(info.server + routerMap(self.type, {
        action: 'add'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.list = function(device_id, cb) {
    var info = this.parent,
        self = this;
    api.get(info.server + routerMap(self.type, {
        action: 'list'
    }), {
        device_id: device_id,
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.update = function() {
    var info = this.parent,
        self = this;
    api.put(info.server + routerMap(self.type, {
        action: 'update'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.read = function() {
    var info = this.parent,
        self = this;
    api.get(info.server + routerMap(self.type,{
        action: 'read'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.remove = function() {
    var info = this.parent,
        self = this;
    api.delete(info.server + routerMap(self.type,{
        action: 'remove'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

module.exports = API;