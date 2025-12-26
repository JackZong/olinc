export function useIsMicroAppEnvironment() {
  const isMicroAppEnvironment = window.__MICRO_APP_ENVIRONMENT__;
  return { isMicroAppEnvironment };
}
