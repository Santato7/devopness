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


import { DeploymentType } from './deployment-type';

/**
 * 
 * @export
 * @interface DeploymentCreate
 */
export interface DeploymentCreate {
    /**
     * 
     * @type {DeploymentType}
     * @memberof DeploymentCreate
     */
    type: DeploymentType;
    /**
     * The name of the branch from which the application source code will be retrieved and deployed. This parameter is ignored when `hash` is provided.
     * @type {string}
     * @memberof DeploymentCreate
     */
    branch: string;
    /**
     * The commit hash from which the application source code will be retrieved and deployed. When provided `branch` parameter is ignored
     * @type {string}
     * @memberof DeploymentCreate
     */
    hash?: string;
    /**
     * List of servers ids that the deploy will be triggered to
     * @type {Array<number>}
     * @memberof DeploymentCreate
     */
    servers?: Array<number>;
}
