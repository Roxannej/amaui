import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronOutlinedW100Filled'
      short_name='Iron'

      {...props}
    >
      <path d="M3.625 16.7V14.9Q3.625 13.625 4.537 12.712Q5.45 11.8 6.725 11.8H15.325V10.65Q15.325 9.975 14.838 9.488Q14.35 9 13.675 9H11.1Q10.425 9 9.938 9.488Q9.45 9.975 9.45 10.65H8.75Q8.75 9.675 9.438 8.987Q10.125 8.3 11.1 8.3H13.675Q14.65 8.3 15.338 8.987Q16.025 9.675 16.025 10.65V14.6Q16.7 14.6 17.188 14.113Q17.675 13.625 17.675 12.95V9.65Q17.675 8.675 18.363 7.987Q19.05 7.3 20.025 7.3H20.375V8H20.025Q19.35 8 18.863 8.488Q18.375 8.975 18.375 9.65V12.95Q18.375 13.925 17.688 14.612Q17 15.3 16.025 15.3V16.7Z"/>
    </Icon>
  )
});

export default IconMaterialIronOutlinedW100Filled;
