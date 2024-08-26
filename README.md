## Start the application

Run `npx create-nx-workspace@latest react-monorepo --preset=react-monorepo` to create react project

Remove node_modules and package-lock.json file, run `pnpm install` to install all dependencies

Run `npx nx g @nx/react:library todolist --directory=libs/todolist --unitTestRunner=vitest --bundler=none`

Run `pnpm start:serve` to start local json server.

Run `pnpm start` to start the development server. Happy coding!

Add lib boundary rule in each project.json file and define the boundary in eslintrc.json

## Issues with Graphql-codegen

Pnpm verison 8 is not compatible with the graphql-codegen, needs to use npm to install all dependencies,
the other thing is even if CodegenConfig is right, the genereated type file always missing some types after run "npm run generate:graphql",
refer to this [article](https://medium.com/@lashanfaliq/integrating-graphql-with-redux-toolkit-and-rtk-query-cc8040f92bd)

## Build for production

Run `npx nx build react-monorepo` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)
