import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoBackpackOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackOutlinedW100Filled'
      short_name='NoBackpack'

      {...props}
    >
      <path d="M16 13.175 18.7 15.875V8Q18.7 6.6 17.8 5.687Q16.9 4.775 15.7 4.65V2.65H14V4.65H10V2.65H8.3V4.65Q8.075 4.675 7.9 4.712Q7.725 4.75 7.625 4.8L15.475 12.65H16ZM19.85 20.85 18.675 19.675Q18.55 20.175 18.163 20.513Q17.775 20.85 17.2 20.85H6.8Q6.175 20.85 5.738 20.425Q5.3 20 5.3 19.35V8Q5.3 7.725 5.375 7.3Q5.45 6.875 5.6 6.6L3.15 4.15L3.65 3.65L20.35 20.35ZM8 13.35H12.35L11.65 12.65H8Z"/>
    </Icon>
  )
});

export default IconMaterialNoBackpackOutlinedW100Filled;
