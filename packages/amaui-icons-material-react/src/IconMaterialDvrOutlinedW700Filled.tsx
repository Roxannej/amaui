import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDvrOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrOutlinedW700Filled'
      short_name='Dvr'

      {...props}
    >
      <path d="M9.3 10.2H18V7.8H9.3ZM9.3 14.2H18V11.8H9.3ZM7 10.3Q7.55 10.3 7.925 9.925Q8.3 9.55 8.3 9Q8.3 8.45 7.925 8.075Q7.55 7.7 7 7.7Q6.45 7.7 6.075 8.075Q5.7 8.45 5.7 9Q5.7 9.55 6.075 9.925Q6.45 10.3 7 10.3ZM7 14.3Q7.55 14.3 7.925 13.925Q8.3 13.55 8.3 13Q8.3 12.45 7.925 12.075Q7.55 11.7 7 11.7Q6.45 11.7 6.075 12.075Q5.7 12.45 5.7 13Q5.7 13.55 6.075 13.925Q6.45 14.3 7 14.3ZM7.55 22.225V19.85H4.3Q2.975 19.85 2.062 18.938Q1.15 18.025 1.15 16.7V5.3Q1.15 3.975 2.062 3.062Q2.975 2.15 4.3 2.15H19.7Q21.025 2.15 21.938 3.062Q22.85 3.975 22.85 5.3V16.7Q22.85 18.025 21.938 18.938Q21.025 19.85 19.7 19.85H16.45V22.225Z"/>
    </Icon>
  )
});

export default IconMaterialDvrOutlinedW700Filled;
