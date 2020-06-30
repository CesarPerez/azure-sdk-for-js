// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SearchIndexerClient, AzureKeyCredential } from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main(): Promise<void> {
  console.log(`Running Reset Indexer Sample....`);

  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Reset Indexer my-azure-indexer-1`);
  await client.resetIndexer("my-azure-indexer-1");
}

main();
