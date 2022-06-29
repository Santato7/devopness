/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CloudProviderPropertyValidation } from './cloud-provider-property-validation';

/**
 * Cloud provider setting\'s property
 * @export
 * @interface CloudProviderProperty
 */
export interface CloudProviderProperty {
    /**
     * Name of the property
     * @type {string}
     * @memberof CloudProviderProperty
     */
    name: string;
    /**
     * Human readable version of the property\'s name
     * @type {string}
     * @memberof CloudProviderProperty
     */
    name_human_readable: string;
    /**
     * Default property\'s value
     * @type {string | number | boolean}
     * @memberof CloudProviderProperty
     */
    default_value: string | number | boolean | null;
    /**
     * Defines if the property data is a sensitive content
     * @type {boolean}
     * @memberof CloudProviderProperty
     */
    sensitive: boolean;
    /**
     * 
     * @type {CloudProviderPropertyValidation}
     * @memberof CloudProviderProperty
     */
    validation: CloudProviderPropertyValidation;
}
