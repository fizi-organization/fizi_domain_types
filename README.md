# @fizi/domain-types

Shared TypeScript contract package used by Fizi clients.

## Client usage

Install the dependency directly from GitHub:

```json
{
  "dependencies": {
    "@fizi/domain-types": "git+https://github.com/fizi-organization/fizi_domain_types.git#main"
  }
}
```

## Repository setup

This directory needs to live in a dedicated Git repository, for example:

`https://github.com/fizi-organization/fizi_domain_types`

The root `.d.ts` files are the artifacts consumed by the clients during `yarn install`, with no local build step required.
