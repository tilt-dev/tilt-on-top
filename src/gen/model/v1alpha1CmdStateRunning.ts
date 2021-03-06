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

import { RequestFile } from '../api';

/**
* CmdStateRunning is a running state of a local command.
*/
export class V1alpha1CmdStateRunning {
    /**
    * The process id of the command.
    */
    'pid': number;
    /**
    * Time at which the command was last started.
    */
    'startedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pid",
            "baseName": "pid",
            "type": "number"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1CmdStateRunning.attributeTypeMap;
    }
}

