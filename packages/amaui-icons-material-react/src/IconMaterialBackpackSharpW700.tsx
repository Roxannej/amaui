import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackSharpW700'
      short_name='Backpack'

      {...props}
    >
      <path d="M2.65 23.35V7.225Q2.65 5.725 3.475 4.537Q4.3 3.35 5.65 2.95V0.65H9.8V2.65H14.2V0.65H18.35V2.95Q19.7 3.35 20.525 4.537Q21.35 5.725 21.35 7.225V23.35ZM5.8 20.2H18.2V7.225Q18.2 6.625 17.788 6.213Q17.375 5.8 16.775 5.8H7.225Q6.65 5.8 6.225 6.213Q5.8 6.625 5.8 7.225ZM13.925 16.2H16.3V11.8H7.7V14.2H13.925ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z"/>
    </Icon>
  )
});

export default IconMaterialBackpackSharpW700;
