# Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 4.1.14 (2023-03-10)

**Note:** Version bump only for package mrm

## 4.1.13 (2022-10-19)

**Note:** Version bump only for package mrm

## 4.1.12 (2022-10-19)

**Note:** Version bump only for package mrm

## 4.1.11 (2022-10-19)

**Note:** Version bump only for package mrm

## 4.1.10 (2022-10-18)

**Note:** Version bump only for package mrm

## 4.1.9 (2022-10-18)

**Note:** Version bump only for package mrm

## 4.1.8 (2022-10-17)

**Note:** Version bump only for package mrm

## 4.1.7 (2022-10-16)

**Note:** Version bump only for package mrm

## 4.1.6 (2022-09-15)

**Note:** Version bump only for package mrm

## 4.1.5 (2022-09-15)

### Bug Fixes

- Pass correct parameters to pnpm ([#235](https://github.com/sapegin/mrm/issues/235)) ([92cb61c](https://github.com/sapegin/mrm/commit/92cb61c03c02559269cfaadaa391a069ef9add08))

## 4.1.4 (2022-09-15)

**Note:** Version bump only for package mrm

## 4.1.3 (2022-09-15)

**Note:** Version bump only for package mrm

## 4.1.2 (2022-09-15)

**Note:** Version bump only for package mrm

## 4.1.1 (2022-09-15)

**Note:** Version bump only for package mrm

# 4.1.0 (2022-08-23)

### Features

- Aliases could reference other aliases ([#104](https://github.com/sapegin/mrm/issues/104)) ([4c718f8](https://github.com/sapegin/mrm/commit/4c718f80029a218357204fd788c0bccdf99b7d67))

# 4.0.0 (2022-03-22)

### Features

- **lint-staged:** Husky upgrade v6 to v7 ([#206](https://github.com/sapegin/mrm/issues/206)) ([87779e8](https://github.com/sapegin/mrm/commit/87779e891efbd61ec10b59f7c41ac66b4263d6ce)), closes [#205](https://github.com/sapegin/mrm/issues/205) [#192](https://github.com/sapegin/mrm/issues/192)

### BREAKING CHANGES

- **lint-staged:** Node 10 support was dropped from Husky v7

## 3.0.10 (2021-10-14)

**Note:** Version bump only for package mrm

## 3.0.9 (2021-09-18)

**Note:** Version bump only for package mrm

## 3.0.8 (2021-08-03)

**Note:** Version bump only for package mrm

## 3.0.7 (2021-08-03)

### Bug Fixes

- **core:** Fix types of yaml method ([#190](https://github.com/sapegin/mrm/issues/190)) ([7cdd216](https://github.com/sapegin/mrm/commit/7cdd216681155e44a3d17f4d734a2d6f91fede4c))

## 3.0.6 (2021-08-02)

### Bug Fixes

- **eslint:** Add missing lodash dependency ([#164](https://github.com/sapegin/mrm/issues/164)) ([cea24d8](https://github.com/sapegin/mrm/commit/cea24d80d031c835519db595a3da6a16556be28f))

## 3.0.5 (2021-07-21)

**Note:** Version bump only for package mrm

## 3.0.4 (2021-07-21)

**Note:** Version bump only for package mrm

## [3.0.3](https://github.com/sapegin/mrm/compare/mrm@3.0.2...mrm@3.0.3) (2021-07-21)

### Bug Fixes

- `Cannot read property 'length' of undefined` when listing tasks ([#184](https://github.com/sapegin/mrm/issues/184)) ([0a33730](https://github.com/sapegin/mrm/commit/0a33730820f6da573c32725e8d8ba1852a696d5d)), closes [#160](https://github.com/sapegin/mrm/issues/160) [#178](https://github.com/sapegin/mrm/issues/178)

## [3.0.2](https://github.com/sapegin/mrm/compare/mrm@3.0.1...mrm@3.0.2) (2021-05-20)

### Bug Fixes

- Correct preset loading priority and npm binary resolution ([#163](https://github.com/sapegin/mrm/issues/163)) ([5208741](https://github.com/sapegin/mrm/commit/52087415dd9620153b0caf92898cf6eeb4500bcb)), closes [#159](https://github.com/sapegin/mrm/issues/159)

## [3.0.1](https://github.com/sapegin/mrm/compare/mrm@3.0.0...mrm@3.0.1) (2021-04-07)

**Note:** Version bump only for package mrm

# [3.0.0](https://github.com/sapegin/mrm/compare/mrm@2.6.2...mrm@3.0.0) (2021-04-07)

### Features

- Autoload tasks and presets ([#99](https://github.com/sapegin/mrm/issues/99)) ([b866455](https://github.com/sapegin/mrm/commit/b866455f98c72b7698ec7cc5fb277df3b3f9ce25)), closes [#97](https://github.com/sapegin/mrm/issues/97)
- Increase supported node version from 8 to 10 ([#138](https://github.com/sapegin/mrm/issues/138)) ([224c673](https://github.com/sapegin/mrm/commit/224c67332ee71b9e275dbea1435cd9088852ff6f))
- Remove default preset from mrm package dependencies ([#136](https://github.com/sapegin/mrm/issues/136)) ([9fdc2e9](https://github.com/sapegin/mrm/commit/9fdc2e9ad77c04d9b1ea8fb9adb5793400518230))
- Remove old config API ([#139](https://github.com/sapegin/mrm/issues/139)) ([391d2ae](https://github.com/sapegin/mrm/commit/391d2ae3cb37b0dbbbf6d9b7d17c7223104dbc01))

### BREAKING CHANGES

- Node 8 or 9 are no longer supported, the minimum supported version is now 10.13.
- The old config API (`.defaults()`, `.required()` and `.values()`) is no longer available.
- Mrm will no longer load globally installed tasks and presets but will autoload them directly from npm, similar to how npx works (we're actually using npx under the hood).

## [2.6.2](https://github.com/sapegin/mrm/compare/mrm@2.6.1...mrm@2.6.2) (2021-04-01)

**Note:** Version bump only for package mrm

## [2.6.1](https://github.com/sapegin/mrm/compare/mrm@2.6.0...mrm@2.6.1) (2021-03-22)

**Note:** Version bump only for package mrm

# [2.6.0](https://github.com/sapegin/mrm/compare/mrm@2.5.19...mrm@2.6.0) (2021-02-25)

### Features

- Add more fields to package.json ([#134](https://github.com/sapegin/mrm/issues/134)) ([d80840a](https://github.com/sapegin/mrm/commit/d80840a5e771976ef38cdf8a3b535a412e1097f6))

## [2.5.19](https://github.com/sapegin/mrm/compare/mrm@2.5.18...mrm@2.5.19) (2021-02-20)

**Note:** Version bump only for package mrm

## [2.5.18](https://github.com/sapegin/mrm/compare/mrm@2.5.17...mrm@2.5.18) (2021-02-09)

**Note:** Version bump only for package mrm

## [2.5.17](https://github.com/sapegin/mrm/compare/mrm@2.5.16...mrm@2.5.17) (2021-02-09)

**Note:** Version bump only for package mrm

## [2.5.16](https://github.com/sapegin/mrm/compare/mrm@2.5.15...mrm@2.5.16) (2021-02-08)

**Note:** Version bump only for package mrm

## [2.5.15](https://github.com/sapegin/mrm/compare/mrm@2.5.14...mrm@2.5.15) (2021-02-05)

**Note:** Version bump only for package mrm

## [2.5.14](https://github.com/sapegin/mrm/compare/mrm@2.5.13...mrm@2.5.14) (2021-02-03)

**Note:** Version bump only for package mrm

## [2.5.13](https://github.com/sapegin/mrm/compare/mrm@2.5.12...mrm@2.5.13) (2020-11-25)

**Note:** Version bump only for package mrm

## [2.5.12](https://github.com/sapegin/mrm/compare/mrm@2.5.11...mrm@2.5.12) (2020-11-05)

**Note:** Version bump only for package mrm

## [2.5.11](https://github.com/sapegin/mrm/compare/mrm@2.5.10...mrm@2.5.11) (2020-11-05)

**Note:** Version bump only for package mrm

## [2.5.10](https://github.com/sapegin/mrm/compare/mrm@2.5.9...mrm@2.5.10) (2020-11-04)

**Note:** Version bump only for package mrm

## [2.5.9](https://github.com/sapegin/mrm/compare/mrm@2.5.8...mrm@2.5.9) (2020-10-30)

**Note:** Version bump only for package mrm

## [2.5.8](https://github.com/sapegin/mrm/compare/mrm@2.5.7...mrm@2.5.8) (2020-10-28)

**Note:** Version bump only for package mrm

## [2.5.7](https://github.com/sapegin/mrm/compare/mrm@2.5.6...mrm@2.5.7) (2020-10-27)

**Note:** Version bump only for package mrm

## [2.5.6](https://github.com/sapegin/mrm/compare/mrm@2.5.5...mrm@2.5.6) (2020-10-27)

**Note:** Version bump only for package mrm

## [2.5.5](https://github.com/sapegin/mrm/compare/mrm@2.5.4...mrm@2.5.5) (2020-10-27)

**Note:** Version bump only for package mrm

## [2.5.4](https://github.com/sapegin/mrm/compare/mrm@2.5.3...mrm@2.5.4) (2020-10-26)

**Note:** Version bump only for package mrm

## [2.5.3](https://github.com/sapegin/mrm/compare/mrm@2.5.2...mrm@2.5.3) (2020-10-20)

**Note:** Version bump only for package mrm

## [2.5.2](https://github.com/sapegin/mrm/compare/mrm@2.5.1...mrm@2.5.2) (2020-10-08)

**Note:** Version bump only for package mrm

## [2.5.1](https://github.com/sapegin/mrm/compare/mrm@2.5.0...mrm@2.5.1) (2020-09-23)

**Note:** Version bump only for package mrm

# [2.5.0](https://github.com/sapegin/mrm/compare/mrm@2.4.2...mrm@2.5.0) (2020-09-18)

### Features

- Automatic global npm install for tasks and presets ([#92](https://github.com/sapegin/mrm/issues/92)) ([87dc649](https://github.com/sapegin/mrm/commit/87dc64960fdeced19783b77360229bc6c54e08e4)), closes [#59](https://github.com/sapegin/mrm/issues/59)

## [2.4.2](https://github.com/sapegin/mrm/compare/mrm@2.4.1...mrm@2.4.2) (2020-09-05)

**Note:** Version bump only for package mrm

## [2.4.1](https://github.com/sapegin/mrm/compare/mrm@2.4.0...mrm@2.4.1) (2020-09-05)

### Bug Fixes

- Add dependabot task to dependencies ([0f698f4](https://github.com/sapegin/mrm/commit/0f698f461793678fda5678ce995360b9877378aa))

# [2.4.0](https://github.com/sapegin/mrm/compare/mrm@2.3.6...mrm@2.4.0) (2020-09-05)

### Features

- Add task that adds GitHub Actions workflow to automerge Dependabot pull requests ([072b443](https://github.com/sapegin/mrm/commit/072b443b912fe44f1188cce54b26ea933bd5a6db))

## [2.3.6](https://github.com/sapegin/mrm/compare/mrm@2.3.5...mrm@2.3.6) (2020-09-02)

**Note:** Version bump only for package mrm

## [2.3.5](https://github.com/sapegin/mrm/compare/mrm@2.3.4...mrm@2.3.5) (2020-08-19)

**Note:** Version bump only for package mrm

## [2.3.4](https://github.com/sapegin/mrm/compare/mrm@2.3.3...mrm@2.3.4) (2020-08-15)

**Note:** Version bump only for package mrm

## [2.3.3](https://github.com/sapegin/mrm/compare/mrm@2.3.2...mrm@2.3.3) (2020-06-18)

### Bug Fixes

- Migrate to the new parameters API ([fcc2d61](https://github.com/sapegin/mrm/commit/fcc2d61be7ec720b0cd4c45e3cb65c6f543a45fb))

## [2.3.2](https://github.com/sapegin/mrm/compare/mrm@2.3.1...mrm@2.3.2) (2020-06-18)

**Note:** Version bump only for package mrm

## [2.3.1](https://github.com/sapegin/mrm/compare/mrm@2.3.0...mrm@2.3.1) (2020-06-08)

### Bug Fixes

- **mrm:** Fix link in readme ([3558b83](https://github.com/sapegin/mrm/commit/3558b837ca3d2c6a31daa000877f157b2c39ab7f)), closes [#78](https://github.com/sapegin/mrm/issues/78)
- **mrm:** Fix links in readme ([e837d45](https://github.com/sapegin/mrm/commit/e837d4557765e5e08947bb8e7f03718e0ce14bf3)), closes [#78](https://github.com/sapegin/mrm/issues/78)

# [2.3.0](https://github.com/sapegin/mrm/compare/mrm@2.2.1...mrm@2.3.0) (2020-04-29)

### Features

- Support scoped presets and tasks ([#76](https://github.com/sapegin/mrm/issues/76)) ([281c800](https://github.com/sapegin/mrm/commit/281c800308bffa6784e31a8ab82e2205eb8ff4b8)), closes [#75](https://github.com/sapegin/mrm/issues/75)

## [2.2.1](https://github.com/sapegin/mrm/compare/mrm@2.2.0...mrm@2.2.1) (2020-04-10)

**Note:** Version bump only for package mrm

# [2.2.0](https://github.com/sapegin/mrm/compare/mrm@2.1.1...mrm@2.2.0) (2020-04-07)

### Features

- Finish interactive mode ([#70](https://github.com/sapegin/mrm/issues/70)) ([52cbb85](https://github.com/sapegin/mrm/commit/52cbb85924d37455cd37d0ab4c1b552bbe0d41ab))

## [2.1.1](https://github.com/sapegin/mrm/compare/mrm@2.1.0...mrm@2.1.1) (2020-03-20)

**Note:** Version bump only for package mrm

# [2.1.0](https://github.com/sapegin/mrm/compare/mrm@2.0.4...mrm@2.1.0) (2020-02-27)

### Bug Fixes

- fixed interactive config defaults (avoid manually calling initials) ([a07aeba](https://github.com/sapegin/mrm/commit/a07aeba0168c65f8abc1535ae8cf04e997cb9667))
- fixed MrmInvalidTask constructor ([6018cc0](https://github.com/sapegin/mrm/commit/6018cc0c2cc51fbab8e82371fbf31bf5b4eb90f5))

### Features

- added getInteractiveConfig util ([677dc0f](https://github.com/sapegin/mrm/commit/677dc0fff747ff01a883f9f6c7845f5eff725152))
- added opt-in interactive config prompting to task runner ([e1fd27a](https://github.com/sapegin/mrm/commit/e1fd27ac7cd3ee5e940d668e739851dda524bc6c))
- allow parameters initials to be functions (as per enquirer spec) ([30ac1bf](https://github.com/sapegin/mrm/commit/30ac1bf7d4439f260d664adc2e28eb39c52b68fe))
- replaced enquirer with inquirer ([097d245](https://github.com/sapegin/mrm/commit/097d24534918dabe445ca96276048ab497189edd))
- replaced getInteractiveConfig with processTaskOptions for semantic purposes; ensure initials are respected outside interactive mode. ([cc38a24](https://github.com/sapegin/mrm/commit/cc38a24573d2977053e1f228ca1d6ec00699051b))
- updated descriptive config API to an easier to use one ([3ee9b38](https://github.com/sapegin/mrm/commit/3ee9b38ca809dde1f1e1b07b095516f15ff04173))

## [2.0.4](https://github.com/sapegin/mrm/compare/mrm@2.0.3...mrm@2.0.4) (2020-01-31)

**Note:** Version bump only for package mrm

## [2.0.3](https://github.com/sapegin/mrm/compare/mrm@2.0.2...mrm@2.0.3) (2020-01-27)

**Note:** Version bump only for package mrm

## [2.0.2](https://github.com/sapegin/mrm/compare/mrm@2.0.1...mrm@2.0.2) (2019-12-12)

**Note:** Version bump only for package mrm

## [2.0.1](https://github.com/sapegin/mrm/compare/mrm@0.0.0-development.0...mrm@2.0.1) (2019-12-10)

**Note:** Version bump only for package mrm

# 0.0.0-development.0 (2019-12-10)

**Note:** Version bump only for package mrm
