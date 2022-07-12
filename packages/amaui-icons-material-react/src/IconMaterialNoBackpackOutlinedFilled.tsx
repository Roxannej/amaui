import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoBackpackOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackOutlinedFilled'
      short_name='NoBackpack'

      {...props}
    >
      <path d="M16.5 13.675 20 17.175V8Q20 6.6 19.15 5.55Q18.3 4.5 17 4.15V2H14V4H10V2H7V4.15Q7 4.15 6.988 4.15Q6.975 4.15 6.975 4.15L14.825 12H16.5ZM19.775 22.6 18.925 21.75Q18.725 21.875 18.5 21.938Q18.275 22 18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V8Q4 7.725 4.037 7.475Q4.075 7.225 4.15 6.975L1.4 4.225L2.8 2.8L21.175 21.2ZM7.5 14H11.175L9.175 12H7.5Z"/>
    </Icon>
  )
});

export default IconMaterialNoBackpackOutlinedFilled;