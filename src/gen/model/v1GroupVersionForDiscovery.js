"use strict";
/**
 * tilt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.20.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GroupVersionForDiscovery = void 0;
/**
* GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
*/
var V1GroupVersionForDiscovery = /** @class */ (function () {
    function V1GroupVersionForDiscovery() {
    }
    V1GroupVersionForDiscovery.getAttributeTypeMap = function () {
        return V1GroupVersionForDiscovery.attributeTypeMap;
    };
    V1GroupVersionForDiscovery.discriminator = undefined;
    V1GroupVersionForDiscovery.attributeTypeMap = [
        {
            "name": "groupVersion",
            "baseName": "groupVersion",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }
    ];
    return V1GroupVersionForDiscovery;
}());
exports.V1GroupVersionForDiscovery = V1GroupVersionForDiscovery;
