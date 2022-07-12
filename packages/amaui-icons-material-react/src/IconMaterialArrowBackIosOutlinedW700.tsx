import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosOutlinedW700'
      short_name='ArrowBackIos'

      {...props}
    >
      <path d="M10.8 22.8 0 12 10.8 1.2 13.375 3.775 5.15 12 13.375 20.225Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackIosOutlinedW700;