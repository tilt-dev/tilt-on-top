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
exports.V1alpha1PodLogStreamList = void 0;
/**
* PodLogStreamList
*/
var V1alpha1PodLogStreamList = /** @class */ (function () {
    function V1alpha1PodLogStreamList() {
    }
    V1alpha1PodLogStreamList.getAttributeTypeMap = function () {
        return V1alpha1PodLogStreamList.attributeTypeMap;
    };
    V1alpha1PodLogStreamList.discriminator = undefined;
    V1alpha1PodLogStreamList.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1alpha1PodLogStream>"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ListMeta"
        }
    ];
    return V1alpha1PodLogStreamList;
}());
exports.V1alpha1PodLogStreamList = V1alpha1PodLogStreamList;
