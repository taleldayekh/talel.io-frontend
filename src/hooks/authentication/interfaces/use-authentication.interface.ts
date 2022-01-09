export interface UseAuthentication {
  requestRequiresAuthentication: (requestUrl: string) => boolean;
  accessTokenHasExpired: (accessToken: string) => boolean;
  refreshAccessToken: () => void;
}
