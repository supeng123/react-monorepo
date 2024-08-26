import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'libs/api-types/src/lib/graphql/schema.graphql',
  documents: 'libs/api-types/src/lib/graphql/document.graphql',
  generates: {
    'libs/api-types/src/lib/services/generated.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: './baseApi',
            importBaseApiAlternateName: 'baseApiWithGraphql',
            exportHooks: true,
          },
        },
      ],
    },
  },
}

export default config