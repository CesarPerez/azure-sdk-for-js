// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SearchIndexClient,
  AzureKeyCredential,
  SynonymMap
} from "@azure/search-documents";
import * as dotenv from "dotenv";
dotenv.config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main(): Promise<void> {
  console.log(`Running Create Or Update SynonymMap Sample....`);

  const client = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Get Synonym Map my-synonymmap`);
  const sm:SynonymMap = await client.getSynonymMap("my-synonymmap");
  console.log(`Update synonyms Synonym Map my-synonymmap`);
  sm.synonyms.push("Florida, Fld. => FL");
  await client.createOrUpdateSynonymMap(sm);
}

main();
