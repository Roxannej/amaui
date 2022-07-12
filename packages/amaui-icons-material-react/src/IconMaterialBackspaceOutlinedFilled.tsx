import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceOutlinedFilled'
      short_name='Backspace'

      {...props}
    >
      <path d="M11.4 16 14 13.4 16.6 16 18 14.6 15.4 12 18 9.4 16.6 8 14 10.6 11.4 8 10 9.4 12.6 12 10 14.6ZM3 12 7.35 5.85Q7.625 5.45 8.062 5.225Q8.5 5 9 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19H9Q8.5 19 8.062 18.775Q7.625 18.55 7.35 18.15Z"/>
    </Icon>
  )
});

export default IconMaterialBackspaceOutlinedFilled;
