/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorSimple8000SeriesManagementClientContext } from "./storSimple8000SeriesManagementClientContext";


class StorSimple8000SeriesManagementClient extends StorSimple8000SeriesManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  managers: operations.Managers;
  accessControlRecords: operations.AccessControlRecords;
  alerts: operations.Alerts;
  bandwidthSettings: operations.BandwidthSettings;
  cloudAppliances: operations.CloudAppliances;
  devices: operations.Devices;
  deviceSettings: operations.DeviceSettings;
  backupPolicies: operations.BackupPolicies;
  backupSchedules: operations.BackupSchedules;
  backups: operations.Backups;
  hardwareComponentGroups: operations.HardwareComponentGroups;
  jobs: operations.Jobs;
  volumeContainers: operations.VolumeContainers;
  volumes: operations.Volumes;
  storageAccountCredentials: operations.StorageAccountCredentials;

  /**
   * Initializes a new instance of the StorSimple8000SeriesManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription id
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.StorSimple8000SeriesManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.managers = new operations.Managers(this);
    this.accessControlRecords = new operations.AccessControlRecords(this);
    this.alerts = new operations.Alerts(this);
    this.bandwidthSettings = new operations.BandwidthSettings(this);
    this.cloudAppliances = new operations.CloudAppliances(this);
    this.devices = new operations.Devices(this);
    this.deviceSettings = new operations.DeviceSettings(this);
    this.backupPolicies = new operations.BackupPolicies(this);
    this.backupSchedules = new operations.BackupSchedules(this);
    this.backups = new operations.Backups(this);
    this.hardwareComponentGroups = new operations.HardwareComponentGroups(this);
    this.jobs = new operations.Jobs(this);
    this.volumeContainers = new operations.VolumeContainers(this);
    this.volumes = new operations.Volumes(this);
    this.storageAccountCredentials = new operations.StorageAccountCredentials(this);
  }
}

// Operation Specifications

export {
  StorSimple8000SeriesManagementClient,
  StorSimple8000SeriesManagementClientContext,
  Models as StorSimple8000SeriesManagementModels,
  Mappers as StorSimple8000SeriesManagementMappers
};
export * from "./operations";
