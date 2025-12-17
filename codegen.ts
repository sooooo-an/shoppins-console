import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: ["src/**/*.{ts,tsx,graphql}"],
  generates: {
    "src/apollo/generated/apollo-generated-graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "src/apollo/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/apollo/generated/apollo-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
  },
};

export default config;
