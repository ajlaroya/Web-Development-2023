import { createClient } from "@sanity/client";

const config = {
  projectId: "gbclu14u",
  dataset: "production",
  apiVersion: "2023-09-10",
  useCdn: false,
};

const client = createClient(config);

export default client;