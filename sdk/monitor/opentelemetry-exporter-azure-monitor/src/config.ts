// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Logger } from "@opentelemetry/api";
import { DEFAULT_BREEZE_ENDPOINT } from "./Declarations/Constants";

export interface AzureExporterConfig {
  // Setup String
  connectionString?: string;
}

export interface AzureExporterInternalConfig {
  instrumentationKey: string;

  // Exporter
  logger?: Logger;

  // Channel
  batchSendRetryIntervalMs: number;

  // Sender
  maxConsecutiveFailuresBeforeWarning: number;

  endpointUrl: string;
}

export const DEFAULT_EXPORTER_CONFIG: AzureExporterInternalConfig = {
  instrumentationKey: "",
  endpointUrl: DEFAULT_BREEZE_ENDPOINT,
  batchSendRetryIntervalMs: 60_000,
  maxConsecutiveFailuresBeforeWarning: 10
};
