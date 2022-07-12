import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRounded'
      short_name='Edit'

      {...props}
    >
      <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6ZM19.3 8.925 15.05 4.725 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.725Q21.25 5.3 21.275 6.113Q21.3 6.925 20.725 7.5ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V17.175Q3 16.975 3.075 16.788Q3.15 16.6 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7Q7.4 20.85 7.213 20.925Q7.025 21 6.825 21ZM14.325 9.675 13.625 8.975 15.025 10.375Z"/>
    </Icon>
  )
});

export default IconMaterialEditRounded;
