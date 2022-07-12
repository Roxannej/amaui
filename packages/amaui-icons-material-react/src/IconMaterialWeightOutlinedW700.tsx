import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeightOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightOutlinedW700'
      short_name='Weight'

      {...props}
    >
      <path d="M6.75 18.35h10.5L16 9.65H8l-1.25 8.7ZM12.025 6.5q.3 0 .513-.225.212-.225.212-.55 0-.3-.212-.512Q12.325 5 12 5q-.3 0-.525.213-.225.212-.225.537 0 .3.225.525.225.225.55.225Zm3.55 0h.45q1.2 0 2.062.762.863.763 1.038 1.938l1.25 8.7q.2 1.425-.737 2.513Q18.7 21.5 17.25 21.5H6.75q-1.45 0-2.387-1.087-.938-1.088-.738-2.513l1.25-8.7q.175-1.175 1.038-1.938.862-.762 2.062-.762h.45q-.05-.2-.062-.375-.013-.175-.013-.375 0-1.5 1.075-2.575Q10.5 2.1 12 2.1q1.5 0 2.575 1.075Q15.65 4.25 15.65 5.75q0 .2-.013.375-.012.175-.062.375ZM6.75 18.35h10.5Z"/>
    </Icon>
  )
});

export default IconMaterialWeightOutlinedW700;