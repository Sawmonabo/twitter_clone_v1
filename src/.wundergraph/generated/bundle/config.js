// wundergraph.config.ts
var import_sdk3 = require("@wundergraph/sdk");

// wundergraph.server.ts
var import_graphql = require("graphql");
var import_sdk = require("@wundergraph/sdk");
var wundergraph_server_default = (0, import_sdk.configureWunderGraphServer)(() => ({
  hooks: {
    queries: {},
    mutations: {}
  },
  graphqlServers: [
    {
      serverName: "gql",
      apiNamespace: "gql",
      schema: new import_graphql.GraphQLSchema({
        query: new import_graphql.GraphQLObjectType({
          name: "RootQueryType",
          fields: {
            hello: {
              type: import_graphql.GraphQLString,
              resolve() {
                return "world";
              }
            }
          }
        })
      })
    }
  ]
}));

// wundergraph.operations.ts
var import_sdk2 = require("@wundergraph/sdk");
var wundergraph_operations_default = (0, import_sdk2.configureWunderGraphOperations)({
  operations: {
    defaultConfig: {
      authentication: {
        required: false
      }
    },
    queries: (config) => ({
      ...config,
      caching: {
        enable: false,
        staleWhileRevalidate: 60,
        maxAge: 60,
        public: true
      },
      liveQuery: {
        enable: true,
        pollingIntervalSeconds: 1
      }
    }),
    mutations: (config) => ({
      ...config
    }),
    subscriptions: (config) => ({
      ...config
    }),
    custom: {}
  }
});

// wundergraph.config.ts
var tweets = import_sdk3.introspect.mongodb({
  apiNamespace: "tweets",
  databaseURL: "mongodb+srv://user:pass@cluster0.uvkwxgc.mongodb.net/TweetsCollection",
  introspection: {
    pollingIntervalSeconds: 5
  }
});
(0, import_sdk3.configureWunderGraphApplication)({
  apis: [
    tweets
  ],
  server: wundergraph_server_default,
  operations: wundergraph_operations_default,
  codeGenerators: [
    {
      templates: [
        ...import_sdk3.templates.typescript.all,
        import_sdk3.templates.typescript.operations,
        import_sdk3.templates.typescript.linkBuilder,
        import_sdk3.templates.typescript.client
      ],
      path: "../components/generated"
    }
  ],
  cors: {
    ...import_sdk3.cors.allowAll,
    allowedOrigins: process.env.NODE_ENV === "production" ? [
      "http://localhost:3000"
    ] : ["http://localhost:3000", new import_sdk3.EnvironmentVariable("WG_ALLOWED_ORIGIN")]
  },
  dotGraphQLConfig: {
    hasDotWunderGraphDirectory: false
  },
  authentication: {
    cookieBased: {
      providers: [
        import_sdk3.authProviders.openIdConnect({
          id: "auth0",
          issuer: new import_sdk3.EnvironmentVariable("AUTH0_ISSUER"),
          clientId: new import_sdk3.EnvironmentVariable("AUTH0_CLIENT_ID"),
          clientSecret: new import_sdk3.EnvironmentVariable("AUTH0_CLIENT_SECRET")
        })
      ],
      authorizedRedirectUris: ["http://localhost:3000/"]
    }
  },
  security: {
    enableGraphQLEndpoint: process.env.NODE_ENV !== "production" || process.env.GITPOD_WORKSPACE_ID !== void 0
  }
});
//# sourceMappingURL=config.js.map
