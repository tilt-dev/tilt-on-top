"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./v1APIGroup"), exports);
__exportStar(require("./v1APIGroupList"), exports);
__exportStar(require("./v1APIResource"), exports);
__exportStar(require("./v1APIResourceList"), exports);
__exportStar(require("./v1DeleteOptions"), exports);
__exportStar(require("./v1GroupVersionForDiscovery"), exports);
__exportStar(require("./v1LabelSelector"), exports);
__exportStar(require("./v1LabelSelectorRequirement"), exports);
__exportStar(require("./v1ListMeta"), exports);
__exportStar(require("./v1ManagedFieldsEntry"), exports);
__exportStar(require("./v1ObjectMeta"), exports);
__exportStar(require("./v1OwnerReference"), exports);
__exportStar(require("./v1Preconditions"), exports);
__exportStar(require("./v1ServerAddressByClientCIDR"), exports);
__exportStar(require("./v1Status"), exports);
__exportStar(require("./v1StatusCause"), exports);
__exportStar(require("./v1StatusDetails"), exports);
__exportStar(require("./v1WatchEvent"), exports);
__exportStar(require("./v1alpha1Cmd"), exports);
__exportStar(require("./v1alpha1CmdList"), exports);
__exportStar(require("./v1alpha1CmdSpec"), exports);
__exportStar(require("./v1alpha1CmdStateRunning"), exports);
__exportStar(require("./v1alpha1CmdStateTerminated"), exports);
__exportStar(require("./v1alpha1CmdStateWaiting"), exports);
__exportStar(require("./v1alpha1CmdStatus"), exports);
__exportStar(require("./v1alpha1Container"), exports);
__exportStar(require("./v1alpha1ContainerLogStreamStatus"), exports);
__exportStar(require("./v1alpha1ContainerState"), exports);
__exportStar(require("./v1alpha1ContainerStateRunning"), exports);
__exportStar(require("./v1alpha1ContainerStateTerminated"), exports);
__exportStar(require("./v1alpha1ContainerStateWaiting"), exports);
__exportStar(require("./v1alpha1ExecAction"), exports);
__exportStar(require("./v1alpha1FileEvent"), exports);
__exportStar(require("./v1alpha1FileWatch"), exports);
__exportStar(require("./v1alpha1FileWatchList"), exports);
__exportStar(require("./v1alpha1FileWatchSpec"), exports);
__exportStar(require("./v1alpha1FileWatchStatus"), exports);
__exportStar(require("./v1alpha1HTTPGetAction"), exports);
__exportStar(require("./v1alpha1HTTPHeader"), exports);
__exportStar(require("./v1alpha1IgnoreDef"), exports);
__exportStar(require("./v1alpha1KubernetesDiscovery"), exports);
__exportStar(require("./v1alpha1KubernetesDiscoveryList"), exports);
__exportStar(require("./v1alpha1KubernetesDiscoverySpec"), exports);
__exportStar(require("./v1alpha1KubernetesDiscoveryStatus"), exports);
__exportStar(require("./v1alpha1KubernetesWatchRef"), exports);
__exportStar(require("./v1alpha1Pod"), exports);
__exportStar(require("./v1alpha1PodCondition"), exports);
__exportStar(require("./v1alpha1PodLogStream"), exports);
__exportStar(require("./v1alpha1PodLogStreamList"), exports);
__exportStar(require("./v1alpha1PodLogStreamSpec"), exports);
__exportStar(require("./v1alpha1PodLogStreamStatus"), exports);
__exportStar(require("./v1alpha1Probe"), exports);
__exportStar(require("./v1alpha1RestartOnSpec"), exports);
__exportStar(require("./v1alpha1Session"), exports);
__exportStar(require("./v1alpha1SessionList"), exports);
__exportStar(require("./v1alpha1SessionSpec"), exports);
__exportStar(require("./v1alpha1SessionStatus"), exports);
__exportStar(require("./v1alpha1TCPSocketAction"), exports);
__exportStar(require("./v1alpha1Target"), exports);
__exportStar(require("./v1alpha1TargetState"), exports);
__exportStar(require("./v1alpha1TargetStateActive"), exports);
__exportStar(require("./v1alpha1TargetStateTerminated"), exports);
__exportStar(require("./v1alpha1TargetStateWaiting"), exports);
__exportStar(require("./v1alpha1TiltBuild"), exports);
__exportStar(require("./v1alpha1UIBuildRunning"), exports);
__exportStar(require("./v1alpha1UIBuildTerminated"), exports);
__exportStar(require("./v1alpha1UIFeatureFlag"), exports);
__exportStar(require("./v1alpha1UIResource"), exports);
__exportStar(require("./v1alpha1UIResourceKubernetes"), exports);
__exportStar(require("./v1alpha1UIResourceLink"), exports);
__exportStar(require("./v1alpha1UIResourceList"), exports);
__exportStar(require("./v1alpha1UIResourceLocal"), exports);
__exportStar(require("./v1alpha1UIResourceStatus"), exports);
__exportStar(require("./v1alpha1UIResourceTargetSpec"), exports);
__exportStar(require("./v1alpha1UISession"), exports);
__exportStar(require("./v1alpha1UISessionList"), exports);
__exportStar(require("./v1alpha1UISessionStatus"), exports);
__exportStar(require("./v1alpha1VersionSettings"), exports);
__exportStar(require("./versionInfo"), exports);
var v1APIGroup_1 = require("./v1APIGroup");
var v1APIGroupList_1 = require("./v1APIGroupList");
var v1APIResource_1 = require("./v1APIResource");
var v1APIResourceList_1 = require("./v1APIResourceList");
var v1DeleteOptions_1 = require("./v1DeleteOptions");
var v1GroupVersionForDiscovery_1 = require("./v1GroupVersionForDiscovery");
var v1LabelSelector_1 = require("./v1LabelSelector");
var v1LabelSelectorRequirement_1 = require("./v1LabelSelectorRequirement");
var v1ListMeta_1 = require("./v1ListMeta");
var v1ManagedFieldsEntry_1 = require("./v1ManagedFieldsEntry");
var v1ObjectMeta_1 = require("./v1ObjectMeta");
var v1OwnerReference_1 = require("./v1OwnerReference");
var v1Preconditions_1 = require("./v1Preconditions");
var v1ServerAddressByClientCIDR_1 = require("./v1ServerAddressByClientCIDR");
var v1Status_1 = require("./v1Status");
var v1StatusCause_1 = require("./v1StatusCause");
var v1StatusDetails_1 = require("./v1StatusDetails");
var v1WatchEvent_1 = require("./v1WatchEvent");
var v1alpha1Cmd_1 = require("./v1alpha1Cmd");
var v1alpha1CmdList_1 = require("./v1alpha1CmdList");
var v1alpha1CmdSpec_1 = require("./v1alpha1CmdSpec");
var v1alpha1CmdStateRunning_1 = require("./v1alpha1CmdStateRunning");
var v1alpha1CmdStateTerminated_1 = require("./v1alpha1CmdStateTerminated");
var v1alpha1CmdStateWaiting_1 = require("./v1alpha1CmdStateWaiting");
var v1alpha1CmdStatus_1 = require("./v1alpha1CmdStatus");
var v1alpha1Container_1 = require("./v1alpha1Container");
var v1alpha1ContainerLogStreamStatus_1 = require("./v1alpha1ContainerLogStreamStatus");
var v1alpha1ContainerState_1 = require("./v1alpha1ContainerState");
var v1alpha1ContainerStateRunning_1 = require("./v1alpha1ContainerStateRunning");
var v1alpha1ContainerStateTerminated_1 = require("./v1alpha1ContainerStateTerminated");
var v1alpha1ContainerStateWaiting_1 = require("./v1alpha1ContainerStateWaiting");
var v1alpha1ExecAction_1 = require("./v1alpha1ExecAction");
var v1alpha1FileEvent_1 = require("./v1alpha1FileEvent");
var v1alpha1FileWatch_1 = require("./v1alpha1FileWatch");
var v1alpha1FileWatchList_1 = require("./v1alpha1FileWatchList");
var v1alpha1FileWatchSpec_1 = require("./v1alpha1FileWatchSpec");
var v1alpha1FileWatchStatus_1 = require("./v1alpha1FileWatchStatus");
var v1alpha1HTTPGetAction_1 = require("./v1alpha1HTTPGetAction");
var v1alpha1HTTPHeader_1 = require("./v1alpha1HTTPHeader");
var v1alpha1IgnoreDef_1 = require("./v1alpha1IgnoreDef");
var v1alpha1KubernetesDiscovery_1 = require("./v1alpha1KubernetesDiscovery");
var v1alpha1KubernetesDiscoveryList_1 = require("./v1alpha1KubernetesDiscoveryList");
var v1alpha1KubernetesDiscoverySpec_1 = require("./v1alpha1KubernetesDiscoverySpec");
var v1alpha1KubernetesDiscoveryStatus_1 = require("./v1alpha1KubernetesDiscoveryStatus");
var v1alpha1KubernetesWatchRef_1 = require("./v1alpha1KubernetesWatchRef");
var v1alpha1Pod_1 = require("./v1alpha1Pod");
var v1alpha1PodCondition_1 = require("./v1alpha1PodCondition");
var v1alpha1PodLogStream_1 = require("./v1alpha1PodLogStream");
var v1alpha1PodLogStreamList_1 = require("./v1alpha1PodLogStreamList");
var v1alpha1PodLogStreamSpec_1 = require("./v1alpha1PodLogStreamSpec");
var v1alpha1PodLogStreamStatus_1 = require("./v1alpha1PodLogStreamStatus");
var v1alpha1Probe_1 = require("./v1alpha1Probe");
var v1alpha1RestartOnSpec_1 = require("./v1alpha1RestartOnSpec");
var v1alpha1Session_1 = require("./v1alpha1Session");
var v1alpha1SessionList_1 = require("./v1alpha1SessionList");
var v1alpha1SessionSpec_1 = require("./v1alpha1SessionSpec");
var v1alpha1SessionStatus_1 = require("./v1alpha1SessionStatus");
var v1alpha1TCPSocketAction_1 = require("./v1alpha1TCPSocketAction");
var v1alpha1Target_1 = require("./v1alpha1Target");
var v1alpha1TargetState_1 = require("./v1alpha1TargetState");
var v1alpha1TargetStateActive_1 = require("./v1alpha1TargetStateActive");
var v1alpha1TargetStateTerminated_1 = require("./v1alpha1TargetStateTerminated");
var v1alpha1TargetStateWaiting_1 = require("./v1alpha1TargetStateWaiting");
var v1alpha1TiltBuild_1 = require("./v1alpha1TiltBuild");
var v1alpha1UIBuildRunning_1 = require("./v1alpha1UIBuildRunning");
var v1alpha1UIBuildTerminated_1 = require("./v1alpha1UIBuildTerminated");
var v1alpha1UIFeatureFlag_1 = require("./v1alpha1UIFeatureFlag");
var v1alpha1UIResource_1 = require("./v1alpha1UIResource");
var v1alpha1UIResourceKubernetes_1 = require("./v1alpha1UIResourceKubernetes");
var v1alpha1UIResourceLink_1 = require("./v1alpha1UIResourceLink");
var v1alpha1UIResourceList_1 = require("./v1alpha1UIResourceList");
var v1alpha1UIResourceLocal_1 = require("./v1alpha1UIResourceLocal");
var v1alpha1UIResourceStatus_1 = require("./v1alpha1UIResourceStatus");
var v1alpha1UIResourceTargetSpec_1 = require("./v1alpha1UIResourceTargetSpec");
var v1alpha1UISession_1 = require("./v1alpha1UISession");
var v1alpha1UISessionList_1 = require("./v1alpha1UISessionList");
var v1alpha1UISessionStatus_1 = require("./v1alpha1UISessionStatus");
var v1alpha1VersionSettings_1 = require("./v1alpha1VersionSettings");
var versionInfo_1 = require("./versionInfo");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {};
var typeMap = {
    "V1APIGroup": v1APIGroup_1.V1APIGroup,
    "V1APIGroupList": v1APIGroupList_1.V1APIGroupList,
    "V1APIResource": v1APIResource_1.V1APIResource,
    "V1APIResourceList": v1APIResourceList_1.V1APIResourceList,
    "V1DeleteOptions": v1DeleteOptions_1.V1DeleteOptions,
    "V1GroupVersionForDiscovery": v1GroupVersionForDiscovery_1.V1GroupVersionForDiscovery,
    "V1LabelSelector": v1LabelSelector_1.V1LabelSelector,
    "V1LabelSelectorRequirement": v1LabelSelectorRequirement_1.V1LabelSelectorRequirement,
    "V1ListMeta": v1ListMeta_1.V1ListMeta,
    "V1ManagedFieldsEntry": v1ManagedFieldsEntry_1.V1ManagedFieldsEntry,
    "V1ObjectMeta": v1ObjectMeta_1.V1ObjectMeta,
    "V1OwnerReference": v1OwnerReference_1.V1OwnerReference,
    "V1Preconditions": v1Preconditions_1.V1Preconditions,
    "V1ServerAddressByClientCIDR": v1ServerAddressByClientCIDR_1.V1ServerAddressByClientCIDR,
    "V1Status": v1Status_1.V1Status,
    "V1StatusCause": v1StatusCause_1.V1StatusCause,
    "V1StatusDetails": v1StatusDetails_1.V1StatusDetails,
    "V1WatchEvent": v1WatchEvent_1.V1WatchEvent,
    "V1alpha1Cmd": v1alpha1Cmd_1.V1alpha1Cmd,
    "V1alpha1CmdList": v1alpha1CmdList_1.V1alpha1CmdList,
    "V1alpha1CmdSpec": v1alpha1CmdSpec_1.V1alpha1CmdSpec,
    "V1alpha1CmdStateRunning": v1alpha1CmdStateRunning_1.V1alpha1CmdStateRunning,
    "V1alpha1CmdStateTerminated": v1alpha1CmdStateTerminated_1.V1alpha1CmdStateTerminated,
    "V1alpha1CmdStateWaiting": v1alpha1CmdStateWaiting_1.V1alpha1CmdStateWaiting,
    "V1alpha1CmdStatus": v1alpha1CmdStatus_1.V1alpha1CmdStatus,
    "V1alpha1Container": v1alpha1Container_1.V1alpha1Container,
    "V1alpha1ContainerLogStreamStatus": v1alpha1ContainerLogStreamStatus_1.V1alpha1ContainerLogStreamStatus,
    "V1alpha1ContainerState": v1alpha1ContainerState_1.V1alpha1ContainerState,
    "V1alpha1ContainerStateRunning": v1alpha1ContainerStateRunning_1.V1alpha1ContainerStateRunning,
    "V1alpha1ContainerStateTerminated": v1alpha1ContainerStateTerminated_1.V1alpha1ContainerStateTerminated,
    "V1alpha1ContainerStateWaiting": v1alpha1ContainerStateWaiting_1.V1alpha1ContainerStateWaiting,
    "V1alpha1ExecAction": v1alpha1ExecAction_1.V1alpha1ExecAction,
    "V1alpha1FileEvent": v1alpha1FileEvent_1.V1alpha1FileEvent,
    "V1alpha1FileWatch": v1alpha1FileWatch_1.V1alpha1FileWatch,
    "V1alpha1FileWatchList": v1alpha1FileWatchList_1.V1alpha1FileWatchList,
    "V1alpha1FileWatchSpec": v1alpha1FileWatchSpec_1.V1alpha1FileWatchSpec,
    "V1alpha1FileWatchStatus": v1alpha1FileWatchStatus_1.V1alpha1FileWatchStatus,
    "V1alpha1HTTPGetAction": v1alpha1HTTPGetAction_1.V1alpha1HTTPGetAction,
    "V1alpha1HTTPHeader": v1alpha1HTTPHeader_1.V1alpha1HTTPHeader,
    "V1alpha1IgnoreDef": v1alpha1IgnoreDef_1.V1alpha1IgnoreDef,
    "V1alpha1KubernetesDiscovery": v1alpha1KubernetesDiscovery_1.V1alpha1KubernetesDiscovery,
    "V1alpha1KubernetesDiscoveryList": v1alpha1KubernetesDiscoveryList_1.V1alpha1KubernetesDiscoveryList,
    "V1alpha1KubernetesDiscoverySpec": v1alpha1KubernetesDiscoverySpec_1.V1alpha1KubernetesDiscoverySpec,
    "V1alpha1KubernetesDiscoveryStatus": v1alpha1KubernetesDiscoveryStatus_1.V1alpha1KubernetesDiscoveryStatus,
    "V1alpha1KubernetesWatchRef": v1alpha1KubernetesWatchRef_1.V1alpha1KubernetesWatchRef,
    "V1alpha1Pod": v1alpha1Pod_1.V1alpha1Pod,
    "V1alpha1PodCondition": v1alpha1PodCondition_1.V1alpha1PodCondition,
    "V1alpha1PodLogStream": v1alpha1PodLogStream_1.V1alpha1PodLogStream,
    "V1alpha1PodLogStreamList": v1alpha1PodLogStreamList_1.V1alpha1PodLogStreamList,
    "V1alpha1PodLogStreamSpec": v1alpha1PodLogStreamSpec_1.V1alpha1PodLogStreamSpec,
    "V1alpha1PodLogStreamStatus": v1alpha1PodLogStreamStatus_1.V1alpha1PodLogStreamStatus,
    "V1alpha1Probe": v1alpha1Probe_1.V1alpha1Probe,
    "V1alpha1RestartOnSpec": v1alpha1RestartOnSpec_1.V1alpha1RestartOnSpec,
    "V1alpha1Session": v1alpha1Session_1.V1alpha1Session,
    "V1alpha1SessionList": v1alpha1SessionList_1.V1alpha1SessionList,
    "V1alpha1SessionSpec": v1alpha1SessionSpec_1.V1alpha1SessionSpec,
    "V1alpha1SessionStatus": v1alpha1SessionStatus_1.V1alpha1SessionStatus,
    "V1alpha1TCPSocketAction": v1alpha1TCPSocketAction_1.V1alpha1TCPSocketAction,
    "V1alpha1Target": v1alpha1Target_1.V1alpha1Target,
    "V1alpha1TargetState": v1alpha1TargetState_1.V1alpha1TargetState,
    "V1alpha1TargetStateActive": v1alpha1TargetStateActive_1.V1alpha1TargetStateActive,
    "V1alpha1TargetStateTerminated": v1alpha1TargetStateTerminated_1.V1alpha1TargetStateTerminated,
    "V1alpha1TargetStateWaiting": v1alpha1TargetStateWaiting_1.V1alpha1TargetStateWaiting,
    "V1alpha1TiltBuild": v1alpha1TiltBuild_1.V1alpha1TiltBuild,
    "V1alpha1UIBuildRunning": v1alpha1UIBuildRunning_1.V1alpha1UIBuildRunning,
    "V1alpha1UIBuildTerminated": v1alpha1UIBuildTerminated_1.V1alpha1UIBuildTerminated,
    "V1alpha1UIFeatureFlag": v1alpha1UIFeatureFlag_1.V1alpha1UIFeatureFlag,
    "V1alpha1UIResource": v1alpha1UIResource_1.V1alpha1UIResource,
    "V1alpha1UIResourceKubernetes": v1alpha1UIResourceKubernetes_1.V1alpha1UIResourceKubernetes,
    "V1alpha1UIResourceLink": v1alpha1UIResourceLink_1.V1alpha1UIResourceLink,
    "V1alpha1UIResourceList": v1alpha1UIResourceList_1.V1alpha1UIResourceList,
    "V1alpha1UIResourceLocal": v1alpha1UIResourceLocal_1.V1alpha1UIResourceLocal,
    "V1alpha1UIResourceStatus": v1alpha1UIResourceStatus_1.V1alpha1UIResourceStatus,
    "V1alpha1UIResourceTargetSpec": v1alpha1UIResourceTargetSpec_1.V1alpha1UIResourceTargetSpec,
    "V1alpha1UISession": v1alpha1UISession_1.V1alpha1UISession,
    "V1alpha1UISessionList": v1alpha1UISessionList_1.V1alpha1UISessionList,
    "V1alpha1UISessionStatus": v1alpha1UISessionStatus_1.V1alpha1UISessionStatus,
    "V1alpha1VersionSettings": v1alpha1VersionSettings_1.V1alpha1VersionSettings,
    "VersionInfo": versionInfo_1.VersionInfo,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
