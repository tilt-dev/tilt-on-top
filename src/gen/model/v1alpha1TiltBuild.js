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
exports.V1alpha1TiltBuild = void 0;
/**
* Information about the running tilt binary.
*/
var V1alpha1TiltBuild = /** @class */ (function () {
    function V1alpha1TiltBuild() {
    }
    V1alpha1TiltBuild.getAttributeTypeMap = function () {
        return V1alpha1TiltBuild.attributeTypeMap;
    };
    V1alpha1TiltBuild.discriminator = undefined;
    V1alpha1TiltBuild.attributeTypeMap = [
        {
            "name": "commitSHA",
            "baseName": "commitSHA",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "dev",
            "baseName": "dev",
            "type": "boolean"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }
    ];
    return V1alpha1TiltBuild;
}());
exports.V1alpha1TiltBuild = V1alpha1TiltBuild;
