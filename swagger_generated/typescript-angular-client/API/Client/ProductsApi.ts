/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class ProductsApi {
        private basePath = 'https://api.uber.com/v1';

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(private $http: ng.IHttpService, basePath?: string, private $httpParamSerializer?: (any) => any) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public productsGet (latitude: number, longitude: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Product>> {
            var path = this.basePath + '/products';

            var queryParameters: any = {};
            var headerParams: any = {};
            // verify required parameter 'latitude' is set
            if (!latitude) {
                throw new Error('Missing required parameter latitude when calling productsGet');
            }

            // verify required parameter 'longitude' is set
            if (!longitude) {
                throw new Error('Missing required parameter longitude when calling productsGet');
            }

            if (latitude !== undefined) {
                queryParameters['latitude'] = latitude;
            }

            if (longitude !== undefined) {
                queryParameters['longitude'] = longitude;
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
    }
}
