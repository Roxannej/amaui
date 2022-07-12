import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelRoundedW700Filled'
      short_name='Label'

      {...props}
    >
      <path d="M5.2 19.85Q3.9 19.85 2.975 18.925Q2.05 18 2.05 16.7V7.3Q2.05 6 2.975 5.075Q3.9 4.15 5.2 4.15H14.75Q15.5 4.15 16.175 4.475Q16.85 4.8 17.275 5.425L20.65 10.175Q21.225 10.975 21.225 11.988Q21.225 13 20.65 13.825L17.275 18.575Q16.85 19.175 16.175 19.513Q15.5 19.85 14.75 19.85Z"/>
    </Icon>
  )
});

export default IconMaterialLabelRoundedW700Filled;
