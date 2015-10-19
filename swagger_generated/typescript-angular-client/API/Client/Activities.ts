/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Activities {

        /**
         * Position in pagination.
         */
        offset: number;

        /**
         * Number of items to retrieve (100 max).
         */
        limit: number;

        /**
         * Total number of items available.
         */
        count: number;

        history: Array<Activity>;
    }

}