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
import { Comment } from './comment';


export interface Video { 
    id?: number;
    url?: string | null;
    duration?: number;
    comments?: Array<Comment> | null;
    name?: string | null;
    thumbnailURL?: string | null;
    recordTimeUtc?: Date;
}

