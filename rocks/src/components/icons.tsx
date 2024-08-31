export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="162"
      height="99"
    >
      <defs>
        <filter
          id="a"
          width="107.7%"
          height="112.9%"
          x="-3.9%"
          y="-3.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="1.5"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196705638 0"
          />
        </filter>
        <path
          id="b"
          d="M39.28 56a.463.463 0 00.34-.14.463.463 0 00.14-.34V44.6c0-.133.067-.2.2-.2h2.52c.08 0 .147.053.2.16l4.04 11.04c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36a.445.445 0 00-.04-.2L48 43.96c-.053-.133-.013-.227.12-.28 1.36-.613 2.413-1.547 3.16-2.8.747-1.253 1.12-2.733 1.12-4.44 0-1.653-.333-3.12-1-4.4a7.203 7.203 0 00-2.84-2.98c-1.227-.707-2.627-1.06-4.2-1.06H34.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.16-15.92h-3.48c-.133 0-.2-.067-.2-.2v-6.84c0-.133.067-.2.2-.2h3.48c.987 0 1.787.327 2.4.98s.92 1.54.92 2.66c0 1.093-.307 1.967-.92 2.62s-1.413.98-2.4.98zm21.2 16.28c1.84 0 3.467-.373 4.88-1.12 1.413-.747 2.507-1.8 3.28-3.16.773-1.36 1.16-2.947 1.16-4.76V36.68c0-1.787-.387-3.36-1.16-4.72-.773-1.36-1.867-2.413-3.28-3.16-1.413-.747-3.04-1.12-4.88-1.12-1.84 0-3.46.373-4.86 1.12a8.003 8.003 0 00-3.26 3.16c-.773 1.36-1.16 2.933-1.16 4.72v10.64c0 1.813.387 3.4 1.16 4.76a8.003 8.003 0 003.26 3.16c1.4.747 3.02 1.12 4.86 1.12zm0-4.84c-1.093 0-1.973-.367-2.64-1.1-.667-.733-1-1.687-1-2.86V36.52c0-1.2.333-2.167 1-2.9.667-.733 1.547-1.1 2.64-1.1 1.12 0 2.013.367 2.68 1.1.667.733 1 1.7 1 2.9v11.04c0 1.173-.333 2.127-1 2.86-.667.733-1.56 1.1-2.68 1.1zm21.76 4.8c1.813 0 3.413-.353 4.8-1.06 1.387-.707 2.46-1.713 3.22-3.02.76-1.307 1.14-2.813 1.14-4.52v-.12a.463.463 0 00-.14-.34.463.463 0 00-.34-.14l-4.68-.2c-.32 0-.48.147-.48.44v.52c0 1.093-.32 1.967-.96 2.62-.64.653-1.493.98-2.56.98s-1.92-.327-2.56-.98c-.64-.653-.96-1.527-.96-2.62V36.16c0-1.093.32-1.973.96-2.64.64-.667 1.493-1 2.56-1s1.92.333 2.56 1c.64.667.96 1.547.96 2.64v.52c0 .293.16.44.48.44l4.68-.2a.436.436 0 00.34-.16.533.533 0 00.14-.36v-.2c0-1.707-.38-3.2-1.14-4.48-.76-1.28-1.833-2.273-3.22-2.98-1.387-.707-2.987-1.06-4.8-1.06-1.813 0-3.413.36-4.8 1.08-1.387.72-2.46 1.74-3.22 3.06-.76 1.32-1.14 2.847-1.14 4.58v11.12c0 1.76.38 3.307 1.14 4.64a7.716 7.716 0 003.22 3.08c1.387.72 2.987 1.08 4.8 1.08zm17.92-.32a.463.463 0 00.34-.14.463.463 0 00.14-.34v-8c0-.053.027-.133.08-.24l1.8-2.6c.053-.08.107-.12.16-.12.053 0 .093.04.12.12l5.68 10.96c.133.24.32.36.56.36h5.12c.293 0 .44-.107.44-.32a.614.614 0 00-.08-.24l-7.84-15.12a.498.498 0 010-.28l7.4-11.48c.107-.16.127-.293.06-.4-.067-.107-.193-.16-.38-.16h-5.16a.627.627 0 00-.56.32l-7.16 10.88c-.027.08-.073.107-.14.08-.067-.027-.1-.08-.1-.16V28.48a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.68a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zM39.16 88a.463.463 0 00.34-.14.463.463 0 00.14-.34v-10.4c0-.133.067-.2.2-.2h4.32c1.6 0 3.02-.347 4.26-1.04a7.197 7.197 0 002.88-2.94c.68-1.267 1.02-2.727 1.02-4.38 0-1.68-.34-3.173-1.02-4.48-.68-1.307-1.64-2.32-2.88-3.04-1.24-.72-2.66-1.08-4.26-1.08h-9.68a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.08c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.08-15.56h-3.4c-.133 0-.2-.067-.2-.2v-7.2c0-.133.067-.2.2-.2h3.4c1.04 0 1.873.347 2.5 1.04.627.693.94 1.627.94 2.8 0 1.147-.313 2.06-.94 2.74-.627.68-1.46 1.02-2.5 1.02zM59.36 88c.267 0 .44-.133.52-.4l.92-3.92c.027-.107.093-.16.2-.16h7.48c.107 0 .173.053.2.16l.92 3.92c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36l-.04-.16-7.2-27.08c-.08-.267-.267-.4-.56-.4h-5.8c-.293 0-.48.133-.56.4l-7.2 27.08c-.08.347.053.52.4.52h4.84zm8-8.84h-5.28a.266.266 0 01-.16-.06c-.053-.04-.067-.1-.04-.18l2.68-11.6c.027-.107.067-.16.12-.16.053 0 .093.053.12.16l2.76 11.6c.027.08.013.14-.04.18a.266.266 0 01-.16.06zM83.48 88a.463.463 0 00.34-.14.463.463 0 00.14-.34v-10.4c0-.133.067-.2.2-.2h4.32c1.6 0 3.02-.347 4.26-1.04a7.197 7.197 0 002.88-2.94c.68-1.267 1.02-2.727 1.02-4.38 0-1.68-.34-3.173-1.02-4.48-.68-1.307-1.64-2.32-2.88-3.04-1.24-.72-2.66-1.08-4.26-1.08H78.8a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.08c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.08-15.56h-3.4c-.133 0-.2-.067-.2-.2v-7.2c0-.133.067-.2.2-.2h3.4c1.04 0 1.873.347 2.5 1.04.627.693.94 1.627.94 2.8 0 1.147-.313 2.06-.94 2.74-.627.68-1.46 1.02-2.5 1.02zM116.24 88a.463.463 0 00.34-.14.463.463 0 00.14-.34v-3.88a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-10.72c-.133 0-.2-.067-.2-.2v-6.44c0-.133.067-.2.2-.2h6.68a.463.463 0 00.34-.14.463.463 0 00.14-.34v-3.88a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-6.68c-.133 0-.2-.067-.2-.2v-6.24c0-.133.067-.2.2-.2h10.72a.463.463 0 00.34-.14.463.463 0 00.14-.34v-3.88a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-16.08a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h16.08zm9.04 0a.463.463 0 00.34-.14.463.463 0 00.14-.34V76.6c0-.133.067-.2.2-.2h2.52c.08 0 .147.053.2.16l4.04 11.04c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36a.445.445 0 00-.04-.2L134 75.96c-.053-.133-.013-.227.12-.28 1.36-.613 2.413-1.547 3.16-2.8.747-1.253 1.12-2.733 1.12-4.44 0-1.653-.333-3.12-1-4.4a7.203 7.203 0 00-2.84-2.98c-1.227-.707-2.627-1.06-4.2-1.06h-9.76a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.16-15.92h-3.48c-.133 0-.2-.067-.2-.2v-6.84c0-.133.067-.2.2-.2h3.48c.987 0 1.787.327 2.4.98s.92 1.54.92 2.66c0 1.093-.307 1.967-.92 2.62s-1.413.98-2.4.98zm-86.92 48.24c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98zm21.08 0c1.813 0 3.413-.353 4.8-1.06 1.387-.707 2.46-1.713 3.22-3.02.76-1.307 1.14-2.813 1.14-4.52v-.12a.463.463 0 00-.14-.34.463.463 0 00-.34-.14l-4.68-.2c-.32 0-.48.147-.48.44v.52c0 1.093-.32 1.967-.96 2.62-.64.653-1.493.98-2.56.98s-1.92-.327-2.56-.98c-.64-.653-.96-1.527-.96-2.62v-11.72c0-1.093.32-1.973.96-2.64.64-.667 1.493-1 2.56-1s1.92.333 2.56 1c.64.667.96 1.547.96 2.64v.52c0 .293.16.44.48.44l4.68-.2a.436.436 0 00.34-.16.533.533 0 00.14-.36v-.2c0-1.707-.38-3.2-1.14-4.48-.76-1.28-1.833-2.273-3.22-2.98-1.387-.707-2.987-1.06-4.8-1.06-1.813 0-3.413.36-4.8 1.08-1.387.72-2.46 1.74-3.22 3.06-.76 1.32-1.14 2.847-1.14 4.58v11.12c0 1.76.38 3.307 1.14 4.64a7.716 7.716 0 003.22 3.08c1.387.72 2.987 1.08 4.8 1.08zm17.92-.32a.463.463 0 00.34-.14.463.463 0 00.14-.34V92.48a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.68a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm13.08.32c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98zm20.8 0c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98zm21.2.04c1.84 0 3.467-.373 4.88-1.12 1.413-.747 2.507-1.8 3.28-3.16.773-1.36 1.16-2.947 1.16-4.76v-10.64c0-1.787-.387-3.36-1.16-4.72-.773-1.36-1.867-2.413-3.28-3.16-1.413-.747-3.04-1.12-4.88-1.12-1.84 0-3.46.373-4.86 1.12a8.003 8.003 0 00-3.26 3.16c-.773 1.36-1.16 2.933-1.16 4.72v10.64c0 1.813.387 3.4 1.16 4.76a8.003 8.003 0 003.26 3.16c1.4.747 3.02 1.12 4.86 1.12zm0-4.84c-1.093 0-1.973-.367-2.64-1.1-.667-.733-1-1.687-1-2.86v-11.04c0-1.2.333-2.167 1-2.9.667-.733 1.547-1.1 2.64-1.1 1.12 0 2.013.367 2.68 1.1.667.733 1 1.7 1 2.9v11.04c0 1.173-.333 2.127-1 2.86-.667.733-1.56 1.1-2.68 1.1zm18.24 4.48a.463.463 0 00.34-.14.463.463 0 00.14-.34V108.6c0-.133.067-.2.2-.2h2.52c.08 0 .147.053.2.16l4.04 11.04c.08.267.267.4.56.4h4.88c.293 0 .44-.12.44-.36a.445.445 0 00-.04-.2l-4.56-11.48c-.053-.133-.013-.227.12-.28 1.36-.613 2.413-1.547 3.16-2.8.747-1.253 1.12-2.733 1.12-4.44 0-1.653-.333-3.12-1-4.4a7.203 7.203 0 00-2.84-2.98c-1.227-.707-2.627-1.06-4.2-1.06h-9.76a.463.463 0 00-.34.14.463.463 0 00-.14.34v27.04c0 .133.047.247.14.34.093.093.207.14.34.14h4.68zm4.16-15.92h-3.48c-.133 0-.2-.067-.2-.2v-6.84c0-.133.067-.2.2-.2H159c.987 0 1.787.327 2.4.98s.92 1.54.92 2.66c0 1.093-.307 1.967-.92 2.62s-1.413.98-2.4.98zm20.8 16.24c2.72 0 4.9-.713 6.54-2.14 1.64-1.427 2.46-3.353 2.46-5.78 0-1.36-.293-2.52-.88-3.48a8.124 8.124 0 00-2.18-2.38c-.867-.627-2.073-1.367-3.62-2.22l-.84-.48c-1.36-.667-2.373-1.207-3.04-1.62-.667-.413-1.16-.847-1.48-1.3-.32-.453-.48-.987-.48-1.6 0-.88.273-1.567.82-2.06.547-.493 1.3-.74 2.26-.74 1.147 0 2.053.32 2.72.96.667.64 1 1.44 1 2.4v.72c0 .133.047.247.14.34.093.093.207.14.34.14h4.6a.463.463 0 00.34-.14.463.463 0 00.14-.34v-.8c0-1.6-.387-3.013-1.16-4.24-.773-1.227-1.853-2.18-3.24-2.86-1.387-.68-2.973-1.02-4.76-1.02-1.707 0-3.227.313-4.56.94-1.333.627-2.367 1.52-3.1 2.68-.733 1.16-1.1 2.513-1.1 4.06 0 1.547.36 2.867 1.08 3.96.72 1.093 1.587 1.987 2.6 2.68 1.013.693 2.32 1.44 3.92 2.24 1.307.667 2.273 1.193 2.9 1.58.627.387 1.113.8 1.46 1.24.347.44.52.967.52 1.58 0 .827-.273 1.507-.82 2.04-.547.533-1.34.8-2.38.8-1.173 0-2.107-.313-2.8-.94-.693-.627-1.04-1.407-1.04-2.34v-.76a.463.463 0 00-.14-.34.463.463 0 00-.34-.14h-4.6a.463.463 0 00-.34.14.463.463 0 00-.14.34v1.04c0 1.547.38 2.913 1.14 4.1.76 1.187 1.833 2.107 3.22 2.76 1.387.653 3 .98 4.84.98z"
        />
      </defs>
      <g fill="none" transform="translate(-30 -27)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use fill="#FFF" xlinkHref="#b" />
      </g>
    </svg>
  );
};

export const Triangle = () => {
  return (
    <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="#000"
        strokeWidth="15"
        fill="none"
        opacity=".2"
        d="M156.5 262 300 8H13z"
      />
    </svg>
  );
};

export const Paper = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="59">
      <path
        fill="#3B4262"
        d="M47.125 11.832a2.922 2.922 0 00-1.232-.198c-.57.04-1.029.271-1.302.65-1.604 2.248-2.919 6.493-3.979 9.905-.486 1.577-1.14 3.688-1.612 4.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865 1.816-1.446 8.19l-.002.028c-.32 3.502-1.058 11.566-1.965 12.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698 1.638-.894.995-.578 4.292.41 12.102.47 3.718 1.44 11.395.83 12.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183 3.183 0 00-.377.049c-.787.156-2.584.881-2.2 4.226 1.06 4.637 2.213 8.041 3.331 11.346l.023.066c.669 1.98 1.302 3.85 1.89 5.925 1.385 4.9.846 7.94.84 7.975-.046.312-.143.503-.288.57a.556.556 0 01-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803 1.441-.914 1.32-.535 3.002-.444 3.34l.052.12c.028.051 2.834 5.165 3.268 7.544.374 2.04 2.311 4.25 3.869 6.026l.064.073c.508.58.946 1.083 1.292 1.548 4.519 4.713 11.665 8.677 11.723 8.71.892.657 1.387 1.293 1.44 1.84a.798.798 0 01-.16.58l-.155.162.988.96 18.853-1.324.804-3.684c2.486-10.402 1.967-19.272 1.958-19.33.01-.327.706-3.483 1.266-6.033l.017-.065c1.117-5.08 2.505-11.4 2.772-13.803.116-1.028-.542-1.972-1.675-2.401z"
      />
    </svg>
  );
};

export const Rock = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <path
        fill="#3B4262"
        d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"
      />
    </svg>
  );
};

export const Scissors = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="58">
      <path
        fill="#3B4262"
        d="M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z"
      />
    </svg>
  );
};
