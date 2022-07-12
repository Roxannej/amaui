import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCookingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookingTwoTone'
      short_name='Cooking'

      {...props}
    >
      <path d="M8.425 22.85V19.2H.55v-2.625h7.5q1.225 0 2.125.887.9.888.9 2.138v3.25Zm4.525 0V19.6q0-1.25.888-2.138.887-.887 2.137-.887h7.5V19.2H15.6v3.65Zm-7.875-7.225q-1.5 0-2.55-1.063Q1.475 13.5 1.475 12V7.025H22.55V12q0 1.5-1.062 2.562-1.063 1.063-2.563 1.063Zm-3.6-9.55V3.45h6.9v-.825q0-.6.437-1.05.438-.45 1.063-.45h4.275q.6 0 1.05.45.45.45.45 1.05v.825h6.9v2.625Z"/>
    </Icon>
  )
});

export default IconMaterialCookingTwoTone;