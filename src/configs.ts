export enum Environment {
  Prod = 'production',
  Sandbox = 'sandbox',
  UAT = 'uat',
  SIT = 'sit',
  Dev = 'development',
  Local = 'local',
}

/**
 * @function getEnvironment
 * @description get environment by url. If there is no prefix, return production
 * @output dev | sit | uat | sandbox | production
 */
export const getEnvironment = (): string => {
  const {
    location: { hostname },
  } = window;

  // Production
  if (hostname === 'retail-portal.credify.one') return Environment.Prod;

  // Sandbox
  if (hostname === 'sandbox-retail-portal.credify.dev') return Environment.Sandbox;

  // UAT
  if (hostname === 'uat-retail-portal.credify.dev') return Environment.UAT;

  // SIT
  if (hostname === 'sit-retail-portal.credify.ninja') return Environment.SIT;

  // DEV
  if (hostname === 'dev-retail-portal.credify.ninja') return Environment.Dev;

  // Local
  return Environment.Local;
};

/**
 * @function getEcosystemApiKey
 * @description get ecosystem api key depends on environment.
 * @output an api string
 */
export const getEcosystemApiKey = (): string => {
  const evn = getEnvironment();
  switch (evn) {
    case Environment.Dev:
      return '4KcU8dUGk5MCiN7IZTcY';
    case Environment.SIT:
      return '4KcU8dUGk5MCiN7IZTcY';
    case Environment.UAT:
      return '4KcU8dUGk5MCiN7IZTcY';
    case Environment.Sandbox:
      return '4KcU8dUGk5MCiN7IZTcY';
    case Environment.Prod:
      return 'FbIHvB8gwpDicd8GC10JPQsB6lbhN53RJNKD840I9i8ImbiiR2nq6kfXMJ9iQywZ';
    default:
      return '4KcU8dUGk5MCiN7IZTcY';
  }
};
export const APP_ECOSYSTEM_API_KEY = getEcosystemApiKey();
