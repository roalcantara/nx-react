# nx-react - a simple [react][8] experiment

[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![Editor Config](https://img.shields.io/badge/Editor%20Config-1.0.1-crimson.svg)][3]
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)][4]
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)][4]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)][13]
[![prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)][17]
[![jest](https://jestjs.io/img/jest-badge.svg)][18]

## Dependencies

- [git][5]
- [pre-commit][11]
- [gitlint][12]
- [asdf][14]
- [direnv][15]

## Install

- Run `git clone https://github.com/roalcantara/nx-react` to clone the repo

## Usage

- Run `npm run build` to build the main app
- Run `npm run start` to start the main app
- Run `npm run test` to test the main app
- Run `npm run e2e` to run the e2e tests
- Run `npm run lint:all` to lint all apps and libs
- Run `npm run test:all` to test all apps and libs
- Run `npm run e2e:all` to run the e2e tests for all apps and libs

### Front

- Run `npx nx run front:build` to build the front app
- Run `npx nx run front:serve` to start the front app
- Run `npx nx run front:test` to test the front app
- Run `npx nx run front:lint` to lint the front app

### Nx: Smart, Fast and Extensible Build System

[Nx][16] supports many plugins which add capabilities for developing different types of applications and different tools.

#### Commands

- Run `nx build my-app` to build the projects into the the `dist/` directory.
- Run `nx serve my-app` for a hot-reloadable dev server
- Run `nx graph` to see a diagram of the dependencies of your projects.
- Run `nx run-many --target=lint --all` to lint all projects.
- Run `nx affected --target=build --parallel` to build all projects affected by the current changes in parallel.
- Run `nx affected --target=lint --parallel` to lint all projects affected by the current changes in parallel.
- Run `nx g @nrwl/react:app my-app` to generate an application.
- Run `nx g @nrwl/react:lib my-lib` to generate shareable libraries across and applications.
- Run `nx g @nrwl/react:component my-component --project=my-app` to generate new components.

## Acknowledgements

- [Standard Readme][4]
- [GNU Make][10]
- [Conventional Commits][13]
- [ASDF: Manage multiple runtime versions with a single CLI tool][14]
- [Direnv: A better way to manage your environments][15]
- [Nx][16]

## Contributing

- Bug reports and pull requests are welcome on [GitHub][0]
- Do follow [Editor Config][2] rules.
- Everyone interacting in the project`s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [Contributor Covenant][3] code of conduct.

## License

The project is available as open source under the terms of the [MIT][1] [License](LICENSE)

[0]: https://github.com/roalcantara/nx-react 'nx-react: a simple react experiment'
[1]: https://opensource.org/licenses/MIT 'The MIT License'
[2]: https://editorconfig.org 'EditorConfig'
[3]: https://contributor-covenant.org 'A Code of Conduct for Open Source Communities'
[4]: https://github.com/RichardLitt/standard-readme 'Standard Readme'
[5]: https://git-scm.com 'Git'
[6]: https://nodejs.dev 'NodeJs'
[8]: https://reactjs.org 'React'
[9]: https://typescript.org 'TypeScript'
[10]: https://www.gnu.org/s/make/manual/make.html 'GNU Make'
[11]: https://pre-commit.com 'A framework for managing and maintaining multi-language pre-commit hooks'
[12]: https://jorisroovers.com/gitlint 'git commit message linter'
[13]: https://conventionalcommits.org 'Conventional Commits'
[14]: https://asdf-vm.com 'Manage multiple runtime versions with a single CLI tool'
[15]: http://direnv.net 'A better way to manage your environments'
[16]: https://nx.dev 'Nx: Smart, Fast and Extensible Build System'
[17]: https://prettier.io 'Prettier: Opinionated Code Formatter'
[18]: https://jestjs.io 'Jest: Delightful JavaScript Testing'
