/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Profile {

        /**
         * First name of the Uber user.
         */
        firstName: string;

        /**
         * Last name of the Uber user.
         */
        lastName: string;

        /**
         * Email address of the Uber user
         */
        email: string;

        /**
         * Image URL of the Uber user.
         */
        picture: string;

        /**
         * Promo code of the Uber user.
         */
        promoCode: string;
    }

}