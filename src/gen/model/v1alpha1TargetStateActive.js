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
exports.V1alpha1TargetStateActive = void 0;
/**
* TargetStateActive is a target that is currently running but has not yet finished.
*/
var V1alpha1TargetStateActive = /** @class */ (function () {
    function V1alpha1TargetStateActive() {
    }
    V1alpha1TargetStateActive.getAttributeTypeMap = function () {
        return V1alpha1TargetStateActive.attributeTypeMap;
    };
    V1alpha1TargetStateActive.discriminator = undefined;
    V1alpha1TargetStateActive.attributeTypeMap = [
        {
            "name": "ready",
            "baseName": "ready",
            "type": "boolean"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        }
    ];
    return V1alpha1TargetStateActive;
}());
exports.V1alpha1TargetStateActive = V1alpha1TargetStateActive;
