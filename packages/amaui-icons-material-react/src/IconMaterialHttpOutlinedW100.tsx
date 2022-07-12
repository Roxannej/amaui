import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHttpOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HttpOutlinedW100'
      short_name='Http'

      {...props}
    >
      <path d="M1.95 14.6V9.4H2.65V11.4H5.45V9.4H6.15V14.6H5.45V12.1H2.65V14.6ZM9.15 14.6V10.1H7.4V9.4H11.6V10.1H9.85V14.6ZM14.15 14.6V10.1H12.4V9.4H16.6V10.1H14.85V14.6ZM17.85 14.6V9.4H20.55Q21.15 9.4 21.6 9.85Q22.05 10.3 22.05 10.9V11.1Q22.05 11.7 21.6 12.15Q21.15 12.6 20.55 12.6H18.55V14.6ZM18.55 11.9H20.55Q20.85 11.9 21.1 11.65Q21.35 11.4 21.35 11.1V10.9Q21.35 10.6 21.1 10.35Q20.85 10.1 20.55 10.1H18.55Z"/>
    </Icon>
  )
});

export default IconMaterialHttpOutlinedW100;
