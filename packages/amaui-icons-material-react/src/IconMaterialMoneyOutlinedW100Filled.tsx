import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneyOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOutlinedW100Filled'
      short_name='Money'

      {...props}
    >
      <path d="M14.7 15.35H17.65Q17.8 15.35 17.9 15.25Q18 15.15 18 15V9Q18 8.85 17.9 8.75Q17.8 8.65 17.65 8.65H14.7Q14.55 8.65 14.45 8.75Q14.35 8.85 14.35 9V15Q14.35 15.15 14.45 15.25Q14.55 15.35 14.7 15.35ZM15.05 14.65V9.35H17.3V14.65ZM9.05 15.35H12Q12.15 15.35 12.25 15.25Q12.35 15.15 12.35 15V9Q12.35 8.85 12.25 8.75Q12.15 8.65 12 8.65H9.05Q8.9 8.65 8.8 8.75Q8.7 8.85 8.7 9V15Q8.7 15.15 8.8 15.25Q8.9 15.35 9.05 15.35ZM9.4 14.65V9.35H11.65V14.65ZM6 15.35H6.7V8.65H6ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialMoneyOutlinedW100Filled;
