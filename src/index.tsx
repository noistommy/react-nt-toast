import React, { createContext, useContext, useRef, useEffect } from 'react';
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
  const toastBoardRef = useRef<any>(null);

  if (window.innerWidth < 480) {
    defaultOptions.position = 'bottom-full-width';
  }

  useEffect(() => {
    toastBoardRef.current = new ToastBoard(defaultOptions);

    return () => {
      if (toastBoardRef.current) {
        toastBoardRef.current.clear();
      }
    };
  }, [defaultOptions]);

  const show = (type: ToastType, contents: string | ToastContents, options: ToastOptions = {}): number | void => {
    if (!toastBoardRef.current) {
      console.error('ToastBoard not initialized');
      return;
    }
    return toastBoardRef.current.show(type, contents, options);
  };

  const clearToast = (): void => {
    if (!toastBoardRef.current) return;
    return toastBoardRef.current.clearToast();
  };

  const clear = (): void => {
    if (!toastBoardRef.current) return;
    return toastBoardRef.current.clear();
  };

  const success = (contents: string | ToastContents, options: ToastOptions = {}): number | void => {
    return show('success', contents, options);
  };

  const info = (contents: string | ToastContents, options: ToastOptions = {}): number | void => {
    return show('info', contents, options);
  };

  const warning = (contents: string | ToastContents, options: ToastOptions = {}): number | void => {
    return show('warning', contents, options);
  };

  const danger = (contents: string | ToastContents, options: ToastOptions = {}): number | void => {
    return show('danger', contents, options);
  };

  const important = (contents: string | ToastContents, options: ToastOptions = {}): number | void => {
    return show('important', contents, options);
  };

  const value: ToastContextType = {
    show,
    clearToast,
    clear,
    success,
    info,
    warning,
    danger,
    important,
    toastBoard: toastBoardRef.current
  };

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