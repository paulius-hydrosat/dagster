import memoize from 'lodash/memoize';

import {buildRepoPathForHuman, buildRepoPathForURL} from './buildRepoAddress';
import {RepoAddress} from './types';

export const repoAddressAsHumanString = memoize((repoAddress: RepoAddress) => {
  return buildRepoPathForHuman(repoAddress.name, repoAddress.location);
});

export const repoAddressAsURLString = memoize((repoAddress: RepoAddress) => {
  return buildRepoPathForURL(repoAddress.name, repoAddress.location);
});
