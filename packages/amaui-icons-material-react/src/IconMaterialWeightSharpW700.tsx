import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeightSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightSharpW700'
      short_name='Weight'

      {...props}
    >
      <path d="M6.75 18.35h10.5L16 9.65H8ZM12 6.5q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.537Q12.325 5 12 5q-.3 0-.525.213-.225.212-.225.537 0 .3.225.525.225.225.525.225Zm-8.875 15 2.125-15h3.175q-.05-.2-.062-.375-.013-.175-.013-.375 0-1.5 1.075-2.575Q10.5 2.1 12 2.1q1.5 0 2.575 1.075Q15.65 4.25 15.65 5.75q0 .2-.013.375-.012.175-.062.375h3.175l2.125 15Zm3.625-3.15h10.5Z"/>
    </Icon>
  )
});

export default IconMaterialWeightSharpW700;
