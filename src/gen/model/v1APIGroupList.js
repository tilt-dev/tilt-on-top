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
exports.V1APIGroupList = void 0;
/**
* APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
*/
var V1APIGroupList = /** @class */ (function () {
    function V1APIGroupList() {
    }
    V1APIGroupList.getAttributeTypeMap = function () {
        return V1APIGroupList.attributeTypeMap;
    };
    V1APIGroupList.discriminator = undefined;
    V1APIGroupList.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<V1APIGroup>"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        }
    ];
    return V1APIGroupList;
}());
exports.V1APIGroupList = V1APIGroupList;
