import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOutlinedW700'
      short_name='Label'

      {...props}
    >
      <path d="M21.95 12 17.275 18.575Q16.85 19.175 16.175 19.513Q15.5 19.85 14.75 19.85H5.2Q3.9 19.85 2.975 18.925Q2.05 18 2.05 16.7V7.3Q2.05 6 2.975 5.075Q3.9 4.15 5.2 4.15H14.75Q15.5 4.15 16.175 4.475Q16.85 4.8 17.275 5.425ZM18.075 12 14.75 7.3Q14.75 7.3 14.75 7.3Q14.75 7.3 14.75 7.3H5.2Q5.2 7.3 5.2 7.3Q5.2 7.3 5.2 7.3V16.7Q5.2 16.7 5.2 16.7Q5.2 16.7 5.2 16.7H14.75Q14.75 16.7 14.75 16.7Q14.75 16.7 14.75 16.7ZM5.2 12V16.7Q5.2 16.7 5.2 16.7Q5.2 16.7 5.2 16.7Q5.2 16.7 5.2 16.7Q5.2 16.7 5.2 16.7V7.3Q5.2 7.3 5.2 7.3Q5.2 7.3 5.2 7.3Q5.2 7.3 5.2 7.3Q5.2 7.3 5.2 7.3Z"/>
    </Icon>
  )
});

export default IconMaterialLabelOutlinedW700;
