import { getRuntimeKey } from '@/lib/runtime-switch';

const DEFAULT_PROJECT_DIRECTORY_KEY_PREFIX = 'openchamber.defaultProjectDirectory:';

const getStorageKey = (): string => (
  `${DEFAULT_PROJECT_DIRECTORY_KEY_PREFIX}${encodeURIComponent(getRuntimeKey())}`
);

export const getDefaultProjectDirectory = (): string | null => {
  if (typeof window === 'undefined') return null;

  const value = window.localStorage.getItem(getStorageKey())?.trim();
  return value || null;
};

export const setDefaultProjectDirectory = (directory: string): void => {
  if (typeof window === 'undefined') return;

  const value = directory.trim();
  if (!value) return;
  window.localStorage.setItem(getStorageKey(), value);
};
