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

import { UlTokenModel } from '../model/ulTokenModel';
import { Video } from '../model/video';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class VideostreamService {

    protected basePath = 'http://localhost:58180';
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
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * @param video 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVideostreamPost(video?: Video, observe?: 'body', reportProgress?: boolean): Observable<UlTokenModel>;
    public apiVideostreamPost(video?: Video, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UlTokenModel>>;
    public apiVideostreamPost(video?: Video, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UlTokenModel>>;
    public apiVideostreamPost(video?: Video, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<UlTokenModel>(`${this.configuration.basePath}/api/Videostream`,
            video,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param ulToken 
     * @param body payload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVideostreamUlTokenBodyPost(ulToken: string, body: Blob, observe?: 'body', reportProgress?: boolean): Observable<Video>;
    public apiVideostreamUlTokenBodyPost(ulToken: string, body: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Video>>;
    public apiVideostreamUlTokenBodyPost(ulToken: string, body: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Video>>;
    public apiVideostreamUlTokenBodyPost(ulToken: string, body: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (ulToken === null || ulToken === undefined) {
            throw new Error('Required parameter ulToken was null or undefined when calling apiVideostreamUlTokenBodyPost.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiVideostreamUlTokenBodyPost.');
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


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/octet-stream'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Video>(`${this.configuration.basePath}/api/Videostream/${encodeURIComponent(String(ulToken))}/body`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param ulToken 
     * @param file 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVideostreamUlTokenPost(ulToken: string, file?: Array<Blob>, observe?: 'body', reportProgress?: boolean): Observable<Video>;
    public apiVideostreamUlTokenPost(ulToken: string, file?: Array<Blob>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Video>>;
    public apiVideostreamUlTokenPost(ulToken: string, file?: Array<Blob>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Video>>;
    public apiVideostreamUlTokenPost(ulToken: string, file?: Array<Blob>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (ulToken === null || ulToken === undefined) {
            throw new Error('Required parameter ulToken was null or undefined when calling apiVideostreamUlTokenPost.');
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

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: this.encoder});
        }

        if (file) {
            if (useForm) {
                file.forEach((element) => {
                    formParams = formParams.append('file', <any>element) as any || formParams;
            })
            } else {
                formParams = formParams.append('file', file.join(COLLECTION_FORMATS['csv'])) as any || formParams;
            }
        }

        return this.httpClient.post<Video>(`${this.configuration.basePath}/api/Videostream/${encodeURIComponent(String(ulToken))}`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param videoId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVideostreamVideoIdGet(videoId: number, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public apiVideostreamVideoIdGet(videoId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public apiVideostreamVideoIdGet(videoId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public apiVideostreamVideoIdGet(videoId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling apiVideostreamVideoIdGet.');
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
            'application/octet-stream'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/api/Videostream/${encodeURIComponent(String(videoId))}`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
