"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newTiltClientFromConfig = exports.newTiltClient = exports.newTiltConfig = void 0;
var k8s = require("@kubernetes/client-node");
var TiltApi = require("../gen/api").TiltDevV1alpha1Api;
var homedir = require("os").homedir();
var path = require("path");
// Load the current tilt config.
var newTiltConfig = function () {
    var kc = new k8s.KubeConfig();
    var loaded = false;
    try {
        kc.loadFromFile(path.join(homedir, ".windmill", "config"));
        loaded = true;
    }
    catch (e) { }
    if (!loaded) {
        try {
            kc.loadFromFile(path.join(homedir, ".tilt-dev", "config"));
            loaded = true;
        }
        catch (e) { }
    }
    if (!loaded) {
        throw new Error("Could not connect to running Tilt instance: no config loaded");
    }
    return kc;
};
exports.newTiltConfig = newTiltConfig;
// Create a tilt client from the default context.
var newTiltClient = function () {
    return exports.newTiltClientFromConfig(exports.newTiltConfig());
};
exports.newTiltClient = newTiltClient;
// Create a tilt client from the given context.
var newTiltClientFromConfig = function (kc) {
    if (!kc.getCurrentCluster()) {
        throw new Error("Could not connect to running Tilt instance: no current cluster");
    }
    return kc.makeApiClient(TiltApi);
};
exports.newTiltClientFromConfig = newTiltClientFromConfig;
