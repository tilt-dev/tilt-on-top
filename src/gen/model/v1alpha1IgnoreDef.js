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
exports.V1alpha1IgnoreDef = void 0;
var V1alpha1IgnoreDef = /** @class */ (function () {
    function V1alpha1IgnoreDef() {
    }
    V1alpha1IgnoreDef.getAttributeTypeMap = function () {
        return V1alpha1IgnoreDef.attributeTypeMap;
    };
    V1alpha1IgnoreDef.discriminator = undefined;
    V1alpha1IgnoreDef.attributeTypeMap = [
        {
            "name": "basePath",
            "baseName": "basePath",
            "type": "string"
        },
        {
            "name": "patterns",
            "baseName": "patterns",
            "type": "Array<string>"
        }
    ];
    return V1alpha1IgnoreDef;
}());
exports.V1alpha1IgnoreDef = V1alpha1IgnoreDef;
