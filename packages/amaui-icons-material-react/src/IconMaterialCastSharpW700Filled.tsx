import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastSharpW700Filled'
      short_name='Cast'

      {...props}
    >
      <path d="M13.3 20.85Q13.3 18.325 12.35 16.112Q11.4 13.9 9.75 12.25Q8.1 10.6 5.888 9.65Q3.675 8.7 1.15 8.7V3.15H22.85V20.85ZM8.925 20.85Q8.925 17.6 6.663 15.338Q4.4 13.075 1.15 13.075V11.075Q3.175 11.075 4.95 11.837Q6.725 12.6 8.062 13.938Q9.4 15.275 10.163 17.05Q10.925 18.825 10.925 20.85ZM4.55 20.85Q4.55 19.45 3.55 18.45Q2.55 17.45 1.15 17.45V15.45Q3.4 15.45 4.975 17.025Q6.55 18.6 6.55 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialCastSharpW700Filled;
