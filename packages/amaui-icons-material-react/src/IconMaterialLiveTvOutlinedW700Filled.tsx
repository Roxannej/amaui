import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveTvOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvOutlinedW700Filled'
      short_name='LiveTv'

      {...props}
    >
      <path d="M9.125 15.85 16.65 11 9.125 6.15ZM7.55 22.225V19.85H4.3Q2.975 19.85 2.062 18.938Q1.15 18.025 1.15 16.7V5.3Q1.15 3.975 2.062 3.062Q2.975 2.15 4.3 2.15H19.7Q21.025 2.15 21.938 3.062Q22.85 3.975 22.85 5.3V16.7Q22.85 18.025 21.938 18.938Q21.025 19.85 19.7 19.85H16.45V22.225Z"/>
    </Icon>
  )
});

export default IconMaterialLiveTvOutlinedW700Filled;
