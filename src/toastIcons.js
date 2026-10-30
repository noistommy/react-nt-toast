// toastIcons.js - SVG 아이콘 모음
export const statusIcon = {
  success: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  
  info: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="8" r="1" fill="currentColor"/>
    </svg>
  `,
  
  danger: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 8V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
    </svg>
  `,
  
  attention: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
      <path d="M12 9V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="17" r="1" fill="currentColor"/>
    </svg>
  `,
  
  important: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
    </svg>
  `
}

export const statusIconSolid = {
  success: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z M16.71 8.71a1 1 0 0 0-1.42 0L10.5 13.59l-1.79-1.79a1 1 0 0 0-1.42 1.41l2.5 2.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.41z"/>
    </svg>
  `,
  info: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z M11 12a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z"/>
    </svg>
  `,
  danger: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z M11 8a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z M12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
  `,
  attention: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fill-rule="evenodd" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M11 9a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z M12 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
  `,
  important: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor"/>
    </svg>
  `
}