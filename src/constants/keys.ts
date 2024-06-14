const queryKeys = {
  AUTH: 'auth',
  GET_ACCESS_TOKEN: 'getAccessToken',
  GET_PROFILE: 'getProfile',
} as const;

const storageKeys = {
  REFRESH_TOKEN: 'refreshToken',
  SHOW_LEGEND: 'showLegend',
  MARKER_FILTER: 'markerFilter',
} as const;

export {queryKeys, storageKeys};