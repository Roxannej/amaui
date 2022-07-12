import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutletSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutletSharpW700Filled'
      short_name='Outlet'

      {...props}
    >
      <path d="M7.8 12.375H10.2V7H7.8ZM13.8 12.375H16.2V7H13.8ZM10 17.8H14V15.8Q14 14.975 13.413 14.387Q12.825 13.8 12 13.8Q11.175 13.8 10.588 14.387Q10 14.975 10 15.8ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialOutletSharpW700Filled;
