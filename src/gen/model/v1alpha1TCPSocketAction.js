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
exports.V1alpha1TCPSocketAction = void 0;
/**
* TCPSocketAction describes an action based on opening a socket
*/
var V1alpha1TCPSocketAction = /** @class */ (function () {
    function V1alpha1TCPSocketAction() {
    }
    V1alpha1TCPSocketAction.getAttributeTypeMap = function () {
        return V1alpha1TCPSocketAction.attributeTypeMap;
    };
    V1alpha1TCPSocketAction.discriminator = undefined;
    V1alpha1TCPSocketAction.attributeTypeMap = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        }
    ];
    return V1alpha1TCPSocketAction;
}());
exports.V1alpha1TCPSocketAction = V1alpha1TCPSocketAction;
