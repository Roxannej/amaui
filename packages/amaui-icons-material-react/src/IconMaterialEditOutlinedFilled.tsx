import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOutlinedFilled'
      short_name='Edit'

      {...props}
    >
      <path d="M3 21V16.75L16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.75Q21.25 5.325 21.25 6.15Q21.25 6.975 20.675 7.55L7.25 21ZM17.85 7.55 19.25 6.15 17.85 4.75 16.45 6.15Z"/>
    </Icon>
  )
});

export default IconMaterialEditOutlinedFilled;
