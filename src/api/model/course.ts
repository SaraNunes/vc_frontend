/**
 * vc_webapi
 * Web API for the Virtual Classroom project
 *
 * The version of the OpenAPI document: v1
 * Contact: 237294@via.dk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Session } from './session';


export interface Course { 
    readonly id?: number;
    webuntisCourseId?: number;
    name?: string | null;
    sessions?: Array<Session> | null;
}

