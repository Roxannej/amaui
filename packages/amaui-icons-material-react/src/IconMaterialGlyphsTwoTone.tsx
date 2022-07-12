import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGlyphsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlyphsTwoTone'
      short_name='Glyphs'

      {...props}
    >
      <path d="M5.225 1.6H7.45l3.5 9.375H8.425L7.95 9.65H4.7l-.475 1.325h-2.5Zm.25 10.45q1.175 0 2 .812.825.813.825 1.988 0 .55-.262 1.025-.263.475-.663.875l-.275.3.65.625 1.475-1.5 1.7 1.7-1.475 1.45 1.25 1.2-1.7 1.65-1.2-1.2-.9.9q-.4.4-.937.612-.538.213-1.088.213-1.15 0-1.975-.787-.825-.788-.825-1.913 0-.55.2-1.038.2-.487.6-.887L3.9 17.05l-.325-.3q-.4-.4-.65-.863-.25-.462-.25-1.012 0-1.175.812-2 .813-.825 1.988-.825Zm0 6.6-.9.925q-.05.05-.087.15-.038.1-.038.2 0 .175.112.287.113.113.288.113.125 0 .225-.037.1-.038.15-.088l.9-.9Zm0-4.225q-.175 0-.3.112-.125.113-.125.313 0 .1.038.212.037.113.112.163l.275.25.225-.225q.1-.1.163-.188.062-.087.062-.187 0-.2-.125-.325t-.325-.125Zm.8-9.225L5.45 7.475H7.2L6.375 5.2ZM17.825.575q.25.4.413.825.162.425.287.9l-1.075.3h5V5H20.6q-.275.725-.65 1.375t-.875 1.25q.7.375 1.425.637.725.263 1.475.463L21.425 11q-1.15-.25-2.225-.675-1.075-.425-2-1.075-.925.65-1.962 1.062-1.038.413-2.138.688l-.55-2.275q.75-.2 1.475-.463Q14.75 8 15.4 7.65q-.5-.6-.838-1.263-.337-.662-.612-1.387h-1.875V2.625h4.4q-.075-.375-.225-.75-.15-.375-.325-.75Zm2.5 11.875 1.7 1.675-8.05 8.025L12.3 20.5Zm-5.575.65q.7 0 1.2.5t.5 1.2q0 .7-.5 1.188-.5.487-1.2.487t-1.188-.487q-.487-.488-.487-1.188t.487-1.2q.488-.5 1.188-.5ZM16.475 5q.175.325.363.612.187.288.412.538.225-.25.413-.538.187-.287.387-.612Zm3.275 13.1q.7 0 1.2.5t.5 1.2q0 .7-.5 1.188-.5.487-1.2.487t-1.188-.487q-.487-.488-.487-1.188t.487-1.2q.488-.5 1.188-.5Z"/>
    </Icon>
  )
});

export default IconMaterialGlyphsTwoTone;
