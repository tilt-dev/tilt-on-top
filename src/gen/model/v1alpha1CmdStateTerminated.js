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
exports.V1alpha1CmdStateTerminated = void 0;
/**
* CmdStateTerminated is a terminated state of a local command.
*/
var V1alpha1CmdStateTerminated = /** @class */ (function () {
    function V1alpha1CmdStateTerminated() {
    }
    V1alpha1CmdStateTerminated.getAttributeTypeMap = function () {
        return V1alpha1CmdStateTerminated.attributeTypeMap;
    };
    V1alpha1CmdStateTerminated.discriminator = undefined;
    V1alpha1CmdStateTerminated.attributeTypeMap = [
        {
            "name": "exitCode",
            "baseName": "exitCode",
            "type": "number"
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date"
        },
        {
            "name": "pid",
            "baseName": "pid",
            "type": "number"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        }
    ];
    return V1alpha1CmdStateTerminated;
}());
exports.V1alpha1CmdStateTerminated = V1alpha1CmdStateTerminated;
