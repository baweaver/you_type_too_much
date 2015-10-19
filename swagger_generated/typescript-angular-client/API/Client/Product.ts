/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Product {

        /**
         * Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
         */
        productId: string;

        /**
         * Description of product.
         */
        description: string;

        /**
         * Display name of product.
         */
        displayName: string;

        /**
         * Capacity of product. For example, 4 people.
         */
        capacity: string;

        /**
         * Image URL representing the product.
         */
        image: string;
    }

}