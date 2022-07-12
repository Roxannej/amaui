import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffOutlinedFilled'
      short_name='SubtitlesOff'

      {...props}
    >
      <path d="M20.55 23.35 17.15 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.725 2.062 5.5Q2.125 5.275 2.25 5.05L0.65 3.45L2.05 2.05L21.95 21.95ZM6 12H8V10H6ZM21.75 18.9 14.85 12H18V10H12.85L6.85 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V17.9Q22 18.125 21.95 18.4Q21.9 18.675 21.75 18.9ZM11.15 14H6V16H13.15Z"/>
    </Icon>
  )
});

export default IconMaterialSubtitlesOffOutlinedFilled;
