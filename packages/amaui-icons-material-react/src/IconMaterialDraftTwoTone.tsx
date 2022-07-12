import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftTwoTone'
      short_name='Draft'

      {...props}
    >
      <path d="M6.4 22.6Q5.125 22.6 4.25 21.725Q3.375 20.85 3.375 19.575V4.425Q3.375 3.15 4.25 2.275Q5.125 1.4 6.4 1.4H14.375L20.625 7.65V19.575Q20.625 20.85 19.75 21.725Q18.875 22.6 17.6 22.6ZM12.775 9.25H17.6L12.775 4.425Z"/>
    </Icon>
  )
});

export default IconMaterialDraftTwoTone;
