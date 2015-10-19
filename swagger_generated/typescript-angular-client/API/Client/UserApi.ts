/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class UserApi {
        private basePath = 'https://api.uber.com/v1';

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(private $http: ng.IHttpService, basePath?: string, private $httpParamSerializer?: (any) => any) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public historyGet (offset?: number, limit?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Activities> {
            var path = this.basePath + '/history';

            var queryParameters: any = {};
            var headerParams: any = {};
            if (offset !== undefined) {
                queryParameters['offset'] = offset;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public meGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<Profile> {
            var path = this.basePath + '/me';

            var queryParameters: any = {};
            var headerParams: any = {};
            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }
    }
}
