export type ToastType = 'success' | 'info' | 'danger' | 'warning' | 'important';

export type ToastTheme = 'light' | 'icon' | 'icon-bg' | 'line' | '';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'top-full-width'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-full-width'

export interface ToastContents {
  title?: string;
  description: string;
}

export interface ToastOptions {
  useTitle?: boolean;
  useIcon?: boolean;
  round?: boolean;
  closeButton?: boolean;
  displayOnTop?: boolean;
  snackbar?: boolean;
  freeze?: boolean;
  timeout?: number;
  theme?: ToastTheme;
  position?: ToastPosition;
  clickToClose?: boolean;
}

export interface ToastContextType {
  show: (
    type: ToastType,
    contents: string | ToastContents,
    options?: ToastOptions
  ) => number | void;
  clearToast: () => void;
  clear: () => void;
  success: (contents: string | ToastContents, options?: ToastOptions) => number | void;
  info: (contents: string | ToastContents, options?: ToastOptions) => number | void;
  warning: (contents: string | ToastContents, options?: ToastOptions) => number | void;
  danger: (contents: string | ToastContents, options?: ToastOptions) => number | void;
  important: (contents: string | ToastContents, options?: ToastOptions) => number | void;
  toastBoard: any;
}




