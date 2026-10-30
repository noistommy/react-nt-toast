import React, { createContext, useContext, useRef, useEffect , useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import ToastBoard from './toastBoard';
import type { ToastContextType, ToastOptions, ToastContents, ToastType } from './types/toast.ts';

import './toast.scss'

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
  defaultOptions?: ToastOptions;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children, defaultOptions = {} }) => {
  const toastBoardRef = useRef<ToastBoard>(null);
  const defaultOptionsStr = JSON.stringify(defaultOptions);
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 480;
    const initialOptions: ToastOptions = {
      ...defaultOptions,
      ...(isMobile && !defaultOptions.position ? { position: 'bottom-full-width' } : {})
    };
    toastBoardRef.current = new ToastBoard(initialOptions);

    return () => {
      toastBoardRef.current?.clear();
      toastBoardRef.current = null;
    };
  }, [defaultOptionsStr]);

  const show = useCallback((type: ToastType, contents: string | ToastContents, options: ToastOptions = {}): number | void => {
    return toastBoardRef.current?.show(type, contents, options);
  }, []);

  const clearToast = useCallback((): void => {
    return toastBoardRef.current?.clearToast();
  }, []);

  const clear = useCallback((): void => {
    return toastBoardRef.current?.clear();
  }, []);

  const value = useMemo<ToastContextType>(() => ({
    show,
    clearToast,
    clear,
    success: (c, o) => show('success', c, o), // c: contents | o: options
    info: (c, o) => show('info', c, o),
    warning: (c, o) => show('attention', c, o),
    danger: (c, o) => show('danger', c, o),
    important: (c, o) => show('important', c, o),
    get toastBoard() { return toastBoardRef.current; } // getter로 항상 최신 인스턴스 반환
  }), [show, clear, clearToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  return context;
};