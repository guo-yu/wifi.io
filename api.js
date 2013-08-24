var api = require('beer');

var API = function(type, params) {
    if (params) this.parent = params;
    this.type = type;
}

var routerMap = function(type, params) {
    var map = {
        user: {
            login: 'user/login.php',
            logout: 'user/logout.php',
            devices: 'user/get_devices.php'
        },
        device: {
            command: 'device/command.php'
        },
        data: {
            get: 'data/get_data.php',
            getByKey: 'data/get_by_key.php',
            insert: 'data/insert.php'
        }
    }
    return map[type][params.action];
}

API.prototype.login = function(cb) {
    var info = this.parent,
        self = this;
    api.post(info.server + routerMap(self.type, {
        action: 'login'
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