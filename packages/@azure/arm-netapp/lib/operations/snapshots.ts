/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/snapshotsMappers";
import * as Parameters from "../models/parameters";
import { AzureNetAppFilesManagementClientContext } from "../azureNetAppFilesManagementClientContext";

/** Class representing a Snapshots. */
export class Snapshots {
  private readonly client: AzureNetAppFilesManagementClientContext;

  /**
   * Create a Snapshots.
   * @param {AzureNetAppFilesManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureNetAppFilesManagementClientContext) {
    this.client = client;
  }

  /**
   * List snapshots
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsListResponse>
   */
  list(resourceGroup: string, accountName: string, poolName: string, volumeName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsListResponse>;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param callback The callback
   */
  list(resourceGroup: string, accountName: string, poolName: string, volumeName: string, callback: msRest.ServiceCallback<Models.SnapshotsList>): void;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroup: string, accountName: string, poolName: string, volumeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotsList>): void;
  list(resourceGroup: string, accountName: string, poolName: string, volumeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SnapshotsList>, callback?: msRest.ServiceCallback<Models.SnapshotsList>): Promise<Models.SnapshotsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        accountName,
        poolName,
        volumeName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SnapshotsListResponse>;
  }

  /**
   * Get a snapshot
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsGetResponse>
   */
  get(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsGetResponse>;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param callback The callback
   */
  get(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  get(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Snapshot>, callback?: msRest.ServiceCallback<Models.Snapshot>): Promise<Models.SnapshotsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SnapshotsGetResponse>;
  }

  /**
   * Create a snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsCreateResponse>
   */
  create(body: Models.Snapshot, resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsCreateResponse> {
    return this.beginCreate(body,resourceGroup,accountName,poolName,volumeName,snapshotName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SnapshotsCreateResponse>;
  }

  /**
   * Patch a snapshot
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsUpdateResponse>
   */
  update(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: Models.SnapshotsUpdateOptionalParams): Promise<Models.SnapshotsUpdateResponse>;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param callback The callback
   */
  update(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options: Models.SnapshotsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  update(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: Models.SnapshotsUpdateOptionalParams | msRest.ServiceCallback<Models.Snapshot>, callback?: msRest.ServiceCallback<Models.Snapshot>): Promise<Models.SnapshotsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.SnapshotsUpdateResponse>;
  }

  /**
   * Delete snapshot
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroup,accountName,poolName,volumeName,snapshotName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create a snapshot
   * @param body Snapshot object supplied in the body of the operation.
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(body: Models.Snapshot, resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        resourceGroup,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Delete snapshot
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param snapshotName The name of the mount target
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroup: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroup,
        accountName,
        poolName,
        volumeName,
        snapshotName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotsList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      tags: [
        "options",
        "tags"
      ]
    },
    mapper: {
      ...Mappers.SnapshotPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.Snapshot,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Snapshot
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
