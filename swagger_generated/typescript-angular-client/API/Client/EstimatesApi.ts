/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class EstimatesApi {
        private basePath = 'https://api.uber.com/v1';

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(private $http: ng.IHttpService, basePath?: string, private $httpParamSerializer?: (any) => any) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public estimatesPriceGet (startLatitude: number, startLongitude: number, endLatitude: number, endLongitude: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<PriceEstimate>> {
            var path = this.basePath + '/estimates/price';

            var queryParameters: any = {};
            var headerParams: any = {};
            // verify required parameter 'startLatitude' is set
            if (!startLatitude) {
                throw new Error('Missing required parameter startLatitude when calling estimatesPriceGet');
            }

            // verify required parameter 'startLongitude' is set
            if (!startLongitude) {
                throw new Error('Missing required parameter startLongitude when calling estimatesPriceGet');
            }

            // verify required parameter 'endLatitude' is set
            if (!endLatitude) {
                throw new Error('Missing required parameter endLatitude when calling estimatesPriceGet');
            }

            // verify required parameter 'endLongitude' is set
            if (!endLongitude) {
                throw new Error('Missing required parameter endLongitude when calling estimatesPriceGet');
            }

            if (startLatitude !== undefined) {
                queryParameters['start_latitude'] = startLatitude;
            }

            if (startLongitude !== undefined) {
                queryParameters['start_longitude'] = startLongitude;
            }

            if (endLatitude !== undefined) {
                queryParameters['end_latitude'] = endLatitude;
            }

            if (endLongitude !== undefined) {
                queryParameters['end_longitude'] = endLongitude;
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

        public estimatesTimeGet (startLatitude: number, startLongitude: number, customerUuid?: string, productId?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Product>> {
            var path = this.basePath + '/estimates/time';

            var queryParameters: any = {};
            var headerParams: any = {};
            // verify required parameter 'startLatitude' is set
            if (!startLatitude) {
                throw new Error('Missing required parameter startLatitude when calling estimatesTimeGet');
            }

            // verify required parameter 'startLongitude' is set
            if (!startLongitude) {
                throw new Error('Missing required parameter startLongitude when calling estimatesTimeGet');
            }

            if (startLatitude !== undefined) {
                queryParameters['start_latitude'] = startLatitude;
            }

            if (startLongitude !== undefined) {
                queryParameters['start_longitude'] = startLongitude;
            }

            if (customerUuid !== undefined) {
                queryParameters['customer_uuid'] = customerUuid;
            }

            if (productId !== undefined) {
                queryParameters['product_id'] = productId;
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
