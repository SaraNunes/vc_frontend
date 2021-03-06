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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { AddSessionModel } from '../model/addSessionModel';
import { Course } from '../model/course';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * @param course 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiCoursesAddPost(course?: Course, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiCoursesAddPost(course?: Course, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiCoursesAddPost(course?: Course, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiCoursesAddPost(course?: Course, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/api/Courses/Add`,
            course,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param course 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiCoursesAddRangePost(course?: Array<Course>, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public apiCoursesAddRangePost(course?: Array<Course>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public apiCoursesAddRangePost(course?: Array<Course>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public apiCoursesAddRangePost(course?: Array<Course>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<number>(`${this.configuration.basePath}/api/Courses/AddRange`,
            course,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param courseId 
     * @param addSessionModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiCoursesCourseIdAddSessionPost(courseId: number, addSessionModel?: AddSessionModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiCoursesCourseIdAddSessionPost(courseId: number, addSessionModel?: AddSessionModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiCoursesCourseIdAddSessionPost(courseId: number, addSessionModel?: AddSessionModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiCoursesCourseIdAddSessionPost(courseId: number, addSessionModel?: AddSessionModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling apiCoursesCourseIdAddSessionPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/api/Courses/${encodeURIComponent(String(courseId))}/AddSession`,
            addSessionModel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param limitCourses 
     * @param includeSessions 
     * @param includeSessionRecordings 
     * @param includeSessionParticipants 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiCoursesGet(limitCourses?: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<Course>>;
    public apiCoursesGet(limitCourses?: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Course>>>;
    public apiCoursesGet(limitCourses?: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Course>>>;
    public apiCoursesGet(limitCourses?: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (limitCourses !== undefined && limitCourses !== null) {
            queryParameters = queryParameters.set('limitCourses', <any>limitCourses);
        }
        if (includeSessions !== undefined && includeSessions !== null) {
            queryParameters = queryParameters.set('includeSessions', <any>includeSessions);
        }
        if (includeSessionRecordings !== undefined && includeSessionRecordings !== null) {
            queryParameters = queryParameters.set('includeSessionRecordings', <any>includeSessionRecordings);
        }
        if (includeSessionParticipants !== undefined && includeSessionParticipants !== null) {
            queryParameters = queryParameters.set('includeSessionParticipants', <any>includeSessionParticipants);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<Course>>(`${this.configuration.basePath}/api/Courses`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param includeSessions 
     * @param includeSessionRecordings 
     * @param includeSessionParticipants 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiCoursesIdGet(id: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiCoursesIdGet(id: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiCoursesIdGet(id: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiCoursesIdGet(id: number, includeSessions?: boolean, includeSessionRecordings?: boolean, includeSessionParticipants?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiCoursesIdGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (includeSessions !== undefined && includeSessions !== null) {
            queryParameters = queryParameters.set('includeSessions', <any>includeSessions);
        }
        if (includeSessionRecordings !== undefined && includeSessionRecordings !== null) {
            queryParameters = queryParameters.set('includeSessionRecordings', <any>includeSessionRecordings);
        }
        if (includeSessionParticipants !== undefined && includeSessionParticipants !== null) {
            queryParameters = queryParameters.set('includeSessionParticipants', <any>includeSessionParticipants);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<any>(`${this.configuration.basePath}/api/Courses/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
