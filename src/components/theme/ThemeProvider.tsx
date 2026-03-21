import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { flushSync } from 'react-dom';
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  getMaxRadius,
  prefersReducedMotion,
  resolveInitialTheme,
  supportsViewTransitions,
  THEME_STORAGE_KEY,
  THEME_TRANSITION_DURATION_MS,
  ThemeTransitionOrigin,
  ThemeMode,
} from '../../lib/theme';

type ThemeContextValue = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode, origin?: ThemeTransitionOrigin) => void;
  toggleTheme: (origin?: ThemeTransitionOrigin) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => resolveInitialTheme());

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const syncWithSystem = (event: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        setThemeState(event.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', syncWithSystem);

    if (!getStoredTheme()) {
      setThemeState(getSystemTheme());
    }

    return () => mediaQuery.removeEventListener('change', syncWithSystem);
  }, []);

  const setTheme = (nextTheme: ThemeMode, origin?: ThemeTransitionOrigin) => {
    if (nextTheme === theme) {
      return;
    }

    if (!origin || prefersReducedMotion() || !supportsViewTransitions()) {
      setThemeState(nextTheme);
      return;
    }

    const startViewTransition = document.startViewTransition?.bind(document);

    if (!startViewTransition) {
      setThemeState(nextTheme);
      return;
    }

    const transition = startViewTransition(() => {
      flushSync(() => {
        setThemeState(nextTheme);
      });
    });

    document.documentElement.dataset.themeTransition = 'active';

    transition.ready
      .then(() => {
        const endRadius = getMaxRadius(origin.x, origin.y);

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${origin.x}px ${origin.y}px)`,
              `circle(${endRadius}px at ${origin.x}px ${origin.y}px)`,
            ],
          },
          {
            duration: THEME_TRANSITION_DURATION_MS,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => {
        setThemeState(nextTheme);
      })
      .finally(() => {
        delete document.documentElement.dataset.themeTransition;
      });
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: (origin?: ThemeTransitionOrigin) =>
        setTheme(theme === 'light' ? 'dark' : 'light', origin),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
