import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../api.shoppin.com/src/interface/graphql/schema.gql",
  documents: ["src/**/*.{ts,tsx,graphql}"],
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
  },
};

export default config;
