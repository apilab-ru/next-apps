'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Language = 'ru' | 'en';
type Translation = { ru: string; en: string };
type TranslationNode =
  | Translation
  | TranslationNode[]
  | { [key: string]: TranslationNode | undefined };
export type TranslationMessages = {
  [key: string]: TranslationNode | undefined;
};

function isTranslation(node: TranslationNode): node is Translation {
  return (
    typeof (node as Translation).ru === 'string' &&
    typeof (node as Translation).en === 'string'
  );
}

function getTranslationNode(
  messages: TranslationMessages,
  path: string,
): TranslationNode | undefined {
  return path.split('.').reduce<TranslationNode | undefined>((current, key) => {
    if (!current || isTranslation(current)) return undefined;
    if (Array.isArray(current)) return current[Number(key)];
    return current[key];
  }, messages);
}

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (
    messages: TranslationMessages,
    key: string,
    variables?: Record<string, string>,
  ) => string;
  translateList: (messages: TranslationMessages, path: string) => string[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  language: initialLanguage,
}: {
  children: ReactNode;
  language: Language;
}) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const syncLanguageWithUrl = () => {
      setLanguage(window.location.pathname === '/en' ? 'en' : 'ru');
    };

    window.addEventListener('popstate', syncLanguageWithUrl);
    return () => window.removeEventListener('popstate', syncLanguageWithUrl);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      translate: (messages, key, variables = {}) => {
        const node = getTranslationNode(messages, key);
        const message = node && isTranslation(node) ? node[language] : key;
        return Object.entries(variables).reduce(
          (result, [name, value]) => result.replaceAll(`{${name}}`, value),
          message,
        );
      },
      translateList: (messages, path) => {
        const node = getTranslationNode(messages, path);
        if (!Array.isArray(node)) return [];
        return node.flatMap((item) =>
          isTranslation(item) ? [item[language]] : [],
        );
      },
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
