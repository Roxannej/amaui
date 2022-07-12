import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeRoundedW700Filled'
      short_name='Cake'

      {...props}
    >
      <path d="M3.4 13.375V10.775Q3.4 9.45 4.312 8.537Q5.225 7.625 6.55 7.625H10.425V6.75Q9.975 6.4 9.7 5.9Q9.425 5.4 9.425 4.675Q9.425 4.175 9.588 3.737Q9.75 3.3 10.175 2.875L11.45 1.625Q11.525 1.55 12 1.4Q12.075 1.4 12.55 1.625L13.825 2.875Q14.25 3.3 14.413 3.737Q14.575 4.175 14.575 4.675Q14.575 5.4 14.3 5.9Q14.025 6.4 13.575 6.75V7.625H17.45Q18.775 7.625 19.688 8.537Q20.6 9.45 20.6 10.775V13.375ZM3.55 22.775Q2.675 22.775 2.038 22.137Q1.4 21.5 1.4 20.625V18.275Q1.4 17.3 1.963 16.5Q2.525 15.7 3.4 15.375H20.6Q21.475 15.7 22.038 16.5Q22.6 17.3 22.6 18.275V20.625Q22.6 21.5 21.975 22.137Q21.35 22.775 20.45 22.775Z"/>
    </Icon>
  )
});

export default IconMaterialCakeRoundedW700Filled;