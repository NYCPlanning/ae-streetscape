# Streetscape

This repo contains the primary implementation of Streetscape, NYC Planning Digital's design system. It contains code to run and publish a website with [Storybook](https://storybook.js.org/), as well as an NPM package.

## Contributing to this repo

Once you've cloned the repo, `cd` into it and install dependencies by running `npm install`.

> Internally, we use [nvm](https://github.com/nvm-sh/nvm) to manage versions of Node.js. The `.nvmrc` file in this repo tells you which version of Node you should be using when working on it. If you are using `nvm`, you can have it switch automatically by running `nvm use` from the root of this repository.

Then, to run the Storybook site locally, simply run `npm run dev`.

### Creating Conventional Commits

OO
For any new commits to be merged into `main` of this repo, we require that those commits conform to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. Please review that documentation to understand the basic components of Conventional Commits. This repo comes packaged with `devDependencies` to make creating Conventional Commits easy. Specifically, we use tools from [Commitlint](https://commitlint.js.org/#/) and [Commitizen](https://github.com/commitizen) projects. When you have staged changes and are ready to create a commit, simply run `npm run commit` and the interactive CLI will walk you through creating a Conventional Commit. Note that we do not have a git hook configured in this project to require Conventional Commits in contributors' local environments. This is to allow developers to create non-conventional commits locally for the purposes of tracking their work incrementally. However, contributors who work in that way will be required make all commits in a PR match the Conventional Commit standard before their PR will be reviewed, either through squashing or otherwise updating their commit messages.
