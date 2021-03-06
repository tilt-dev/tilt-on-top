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
exports.V1alpha1ContainerStateTerminated = void 0;
/**
* ContainerStateTerminated is a terminated state of a container.
*/
var V1alpha1ContainerStateTerminated = /** @class */ (function () {
    function V1alpha1ContainerStateTerminated() {
    }
    V1alpha1ContainerStateTerminated.getAttributeTypeMap = function () {
        return V1alpha1ContainerStateTerminated.attributeTypeMap;
    };
    V1alpha1ContainerStateTerminated.discriminator = undefined;
    V1alpha1ContainerStateTerminated.attributeTypeMap = [
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
    return V1alpha1ContainerStateTerminated;
}());
exports.V1alpha1ContainerStateTerminated = V1alpha1ContainerStateTerminated;
