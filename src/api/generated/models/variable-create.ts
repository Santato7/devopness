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


import { VariableTarget } from './variable-target';
import { VariableType } from './variable-type';

/**
 * 
 * @export
 * @interface VariableCreate
 */
export interface VariableCreate {
    /**
     * The unique key used to identify the variable on the target
     * @type {string}
     * @memberof VariableCreate
     */
    key: string;
    /**
     * The value to be assigned to this variable when deployed to its target
     * @type {string}
     * @memberof VariableCreate
     */
    value: string;
    /**
     * A text describing the variable, provided by the end user
     * @type {string}
     * @memberof VariableCreate
     */
    description?: string;
    /**
     * 
     * @type {VariableTarget}
     * @memberof VariableCreate
     */
    target: VariableTarget;
    /**
     * 
     * @type {VariableType}
     * @memberof VariableCreate
     */
    type: VariableType;
    /**
     * Indicates if the variable value should be visible or not in the deployment logs
     * @type {boolean}
     * @memberof VariableCreate
     */
    hidden: boolean;
}
