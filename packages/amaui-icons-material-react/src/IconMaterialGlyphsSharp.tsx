import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGlyphsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlyphsSharp'
      short_name='Glyphs'

      {...props}
    >
      <path d="M5.6 2.05h1.95l3.375 9H9.05L8.3 8.9H4.85l-.75 2.15H2.225Zm.125 10.05q1.05 0 1.775.725.725.725.725 1.775 0 .5-.188.962-.187.463-.537.813l-.375.35.7.7 1.425-1.4 1.425 1.425-1.4 1.4 1.4 1.425-1.425 1.4-1.4-1.4-1.05 1.05q-.375.375-.85.562-.475.188-1 .188-1.05 0-1.75-.738-.7-.737-.7-1.787 0-.5.2-.963.2-.462.55-.812l1.05-1.05-.35-.35q-.35-.35-.55-.8-.2-.45-.2-.95 0-1.05.738-1.788.737-.737 1.787-.737Zm0 6.05L4.65 19.2q-.075.075-.1.162-.025.088-.025.188 0 .2.138.35.137.15.337.15.1 0 .188-.037.087-.038.162-.113l1.075-1.05ZM5.7 14.1q-.2 0-.337.15-.138.15-.138.35 0 .1.025.187.025.088.1.163l.375.35.325-.325q.075-.075.112-.163.038-.087.038-.187 0-.2-.15-.363-.15-.162-.35-.162ZM6.525 4l-1.15 3.35h2.4L6.625 4Zm10.95-2.625q.2.325.337.675.138.35.238.7l-1.075.325L22 3.05v2.025h-1.675q-.275.825-.712 1.562Q19.175 7.375 18.6 8q.675.4 1.4.662.725.263 1.5.463l-.475 1.925q-1.075-.275-2.087-.675-1.013-.4-1.938-1.025-.925.6-1.938 1.012-1.012.413-2.087.688l-.45-1.925q.75-.2 1.475-.463.725-.262 1.4-.662-.575-.625-1.012-1.363-.438-.737-.688-1.562H12v-2h4.4q-.075-.325-.2-.637-.125-.313-.25-.613Zm2.6 11.1 1.425 1.4-7.775 7.775-1.425-1.4Zm-5.575.575q.625 0 1.062.437.438.438.438 1.063t-.438 1.063q-.437.437-1.062.437t-1.062-.437Q13 15.175 13 14.55t.438-1.063q.437-.437 1.062-.437Zm1.325-7.975q.2.475.5.9.3.425.675.8.375-.375.675-.8.3-.425.525-.9ZM19.5 18.05q.625 0 1.062.438.438.437.438 1.062t-.438 1.063q-.437.437-1.062.437t-1.062-.437Q18 20.175 18 19.55t.438-1.062q.437-.438 1.062-.438Z"/>
    </Icon>
  )
});

export default IconMaterialGlyphsSharp;