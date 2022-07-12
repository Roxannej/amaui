import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtrSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtrSharpW700'
      short_name='Atr'

      {...props}
    >
      <path d="M5.075 22.675Q3.05 22.675 1.613 21.238Q0.175 19.8 0.175 17.775Q0.175 15.75 1.613 14.3Q3.05 12.85 5.075 12.85Q7.1 12.85 8.55 14.3Q10 15.75 10 17.775Q10 19.8 8.55 21.238Q7.1 22.675 5.075 22.675ZM12 11.15Q9.975 11.15 8.525 9.7Q7.075 8.25 7.075 6.225Q7.075 4.2 8.525 2.762Q9.975 1.325 12 1.325Q14.025 1.325 15.475 2.762Q16.925 4.2 16.925 6.225Q16.925 8.25 15.475 9.7Q14.025 11.15 12 11.15ZM18.925 22.675Q16.9 22.675 15.45 21.238Q14 19.8 14 17.775Q14 15.75 15.45 14.3Q16.9 12.85 18.925 12.85Q20.95 12.85 22.388 14.3Q23.825 15.75 23.825 17.775Q23.825 19.8 22.388 21.238Q20.95 22.675 18.925 22.675Z"/>
    </Icon>
  )
});

export default IconMaterialAtrSharpW700;
