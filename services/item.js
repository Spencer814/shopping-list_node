var Item = require('../models/item');

exports.save = function(name, callback, errback) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};

exports.list = function(callback, errback) {
    Item.find(function(err, items) {
        if (err) {
            errback(err);
            return;
        }
        callback(items);
    });
};

exports.update = function(id, named, callback, errback) {
    var options = { new: true };
    Item.findOneAndUpdate({ id: id }, { name: named }, options, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};

exports.remove = function(id, callback, errback) {
    Item.findOneAndRemove({ id: id }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};