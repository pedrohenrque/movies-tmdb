import { HttpConfig, httpConfig } from '@/config/http'
import { DiscoverMovies } from './models'

export function makeRemoteGetDiscoverMovies(): GetDiscoverMovies {
  return new RemoteGetDiscoverMovies(httpConfig)
}

interface GetDiscoverMovies {
  execute(): Promise<DiscoverMovies>
}

export class RemoteGetDiscoverMovies implements GetDiscoverMovies {
  constructor(private readonly httpConfig: HttpConfig) {}

  public async execute(): Promise<DiscoverMovies> {
    const response = await fetch(`${this.httpConfig.baseUrl}discover`)
    const data = await response.json()
    return data
  }
}
