import {GitHub as Octokit, getOctokitOptions} from '@actions/github/lib/utils'
import {getServerApiUrl} from './url-helper'

import type {OctokitOptions} from '@octokit/core/dist-types/types'

// Centralize all Octokit references by re-exporting
export {Octokit} from '@octokit/rest'
export type {OctokitOptions} from '@octokit/core/dist-types/types'

export function getOctokit(authToken: string, opts: OctokitOptions) {
  const options: OctokitOptions = {
    baseUrl: getServerApiUrl(opts.baseUrl)
  }

  if (opts.userAgent) {
    options.userAgent = opts.userAgent
  }

  return new Octokit(getOctokitOptions(authToken, options))
}
