/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class PriceEstimate {

        /**
         * Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles
         */
        productId: string;

        /**
         * [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.
         */
        currencyCode: string;

        /**
         * Display name of product.
         */
        displayName: string;

        /**
         * Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or \"Metered\" for TAXI.
         */
        estimate: string;

        /**
         * Lower bound of the estimated price.
         */
        lowEstimate: number;

        /**
         * Upper bound of the estimated price.
         */
        highEstimate: number;

        /**
         * Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier.
         */
        surgeMultiplier: number;
    }

}