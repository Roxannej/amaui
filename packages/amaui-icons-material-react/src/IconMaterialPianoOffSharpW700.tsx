import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoOffSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffSharpW700'
      short_name='PianoOff'

      {...props}
    >
      <path d="M20.725 23.675 18.85 21.825Q18.75 21.85 18.675 21.85Q18.6 21.85 18.5 21.85H2.15V5.5Q2.15 5.4 2.15 5.325Q2.15 5.25 2.175 5.15L0.325 3.275L2 1.6L22.4 22ZM21.85 18.1 18.7 14.95V5.3H17.4V13.675L12.625 8.9V5.3H11.375V7.625L5.9 2.15H21.85ZM5.3 18.7H7.85V14.7H6.6V9.575L5.3 8.275ZM10.125 18.7H13.875V16.85L11.15 14.125V14.7H10.125ZM15.625 18.7H15.7L15.625 18.6Z"/>
    </Icon>
  )
});

export default IconMaterialPianoOffSharpW700;
