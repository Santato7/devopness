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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Action } from '../../generated/models';
import { ActionListItem } from '../../generated/models';

/**
 * ActionsApiService - Auto-generated
 */
export class ActionsApiService extends ApiBaseService {
    /**
     * 
     * @summary Get an action by ID
     * @param {number} actionId Numeric ID of the action to be retrieved
     */
    public async getAction(actionId: number): Promise<ApiResponse<Action>> {
        if (actionId === null || actionId === undefined) {
            throw new ArgumentNullException('actionId', 'getAction');
        }
        
        let queryString = '';

        const requestUrl = '/actions/{action_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Action>(requestUrl.replace(`{${"action_id"}}`, encodeURIComponent(String(actionId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all actions belonging to current user
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listActions(page?: number, perPage?: number): Promise<ApiResponse<Array<ActionListItem>>> {
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/actions' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ActionListItem>>(requestUrl);
        return new ApiResponse(response);
    }
}