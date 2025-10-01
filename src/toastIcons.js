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
  
  importance: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
    </svg>
  `
}

export const statusIconSolid = {
  success: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-check" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M8 12.5L10.5 15L16 9.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" mask="url(#tick-cut-check)" />
    </svg>
  `,
  info: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-info" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M12 16V12" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="8" r="1" fill="black"/>
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" mask="url(#tick-cut-info)"/>
    </svg>
  `,
  danger: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-err" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M12 8V12" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="16" r="1" fill="black"/>
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" mask="url(#tick-cut-err)"/>
    </svg>
  `,
  attention: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-warning" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M12 8V12" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="16" r="1" fill="black"/>
        </mask>
      </defs>
      <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" mask="url(#tick-cut-warning)" />
    </svg>
  `,
  importance: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor"/>
    </svg>
  `
}