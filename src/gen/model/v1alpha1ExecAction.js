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
exports.V1alpha1ExecAction = void 0;
/**
* ExecAction describes a \"run in container\" action.
*/
var V1alpha1ExecAction = /** @class */ (function () {
    function V1alpha1ExecAction() {
    }
    V1alpha1ExecAction.getAttributeTypeMap = function () {
        return V1alpha1ExecAction.attributeTypeMap;
    };
    V1alpha1ExecAction.discriminator = undefined;
    V1alpha1ExecAction.attributeTypeMap = [
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>"
        }
    ];
    return V1alpha1ExecAction;
}());
exports.V1alpha1ExecAction = V1alpha1ExecAction;
