import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDresserTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DresserTwoTone'
      short_name='Dresser'

      {...props}
    >
      <path d="M3.125 21.875V5.125q0-1.25.875-2.138.875-.887 2.15-.887h11.725q1.25 0 2.138.887.887.888.887 2.138v16.75h-3.025v-2H6.15v2Zm3.025-11.2h4.65v-5.55H6.15Zm7.1-4h4.625v-1.55H13.25Zm0 4h4.625v-1.55H13.25ZM9.5 16.5h5.025v-2.45H9.5Z"/>
    </Icon>
  )
});

export default IconMaterialDresserTwoTone;