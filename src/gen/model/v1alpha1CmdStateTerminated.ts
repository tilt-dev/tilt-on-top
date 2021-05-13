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
* CmdStateTerminated is a terminated state of a local command.
*/
export class V1alpha1CmdStateTerminated {
    /**
    * Exit status from the last termination of the command
    */
    'exitCode': number;
    /**
    * Time at which the command last terminated
    */
    'finishedAt'?: Date;
    /**
    * The process id of the command.
    */
    'pid': number;
    /**
    * (brief) reason the process is terminated
    */
    'reason'?: string;
    /**
    * Time at which previous execution of the command started
    */
    'startedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1CmdStateTerminated.attributeTypeMap;
    }
}

