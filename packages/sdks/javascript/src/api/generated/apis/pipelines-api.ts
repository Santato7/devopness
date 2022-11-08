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
import { ApiError } from '../../generated/models';
import { Pipeline } from '../../generated/models';
import { PipelineUpdate } from '../../generated/models';

/**
 * PipelinesApiService - Auto-generated
 */
export class PipelinesApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given Pipeline
     * @param {number} pipelineId The ID of the pipeline.
     */
    public async deletePipeline(pipelineId: number): Promise<ApiResponse<void>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'deletePipeline');
        }
        
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a Pipeline by ID
     * @param {number} pipelineId The ID of the pipeline.
     */
    public async getPipeline(pipelineId: number): Promise<ApiResponse<Pipeline>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'getPipeline');
        }
        
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Pipeline>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing Pipeline
     * @param {number} pipelineId The ID of the pipeline.
     * @param {PipelineUpdate} pipelineUpdate A JSON object containing the resource data
     */
    public async updatePipeline(pipelineId: number, pipelineUpdate: PipelineUpdate): Promise<ApiResponse<void>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'updatePipeline');
        }
        if (pipelineUpdate === null || pipelineUpdate === undefined) {
            throw new ArgumentNullException('pipelineUpdate', 'updatePipeline');
        }
        
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, PipelineUpdate>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))), pipelineUpdate);
        return new ApiResponse(response);
    }
}
