import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaRoundedW100Filled'
      short_name='Schema'

      {...props}
    >
      <path d="M6.3 21.85Q5.825 21.85 5.488 21.513Q5.15 21.175 5.15 20.7V19.3Q5.15 18.825 5.488 18.487Q5.825 18.15 6.3 18.15H7.15V13.85H6.3Q5.825 13.85 5.488 13.512Q5.15 13.175 5.15 12.7V11.3Q5.15 10.825 5.488 10.487Q5.825 10.15 6.3 10.15H7.15V5.85H6.3Q5.825 5.85 5.488 5.512Q5.15 5.175 5.15 4.7V3.3Q5.15 2.825 5.488 2.487Q5.825 2.15 6.3 2.15H8.7Q9.175 2.15 9.513 2.487Q9.85 2.825 9.85 3.3V4.7Q9.85 5.175 9.513 5.512Q9.175 5.85 8.7 5.85H7.85V10.15H8.7Q9.175 10.15 9.513 10.487Q9.85 10.825 9.85 11.3V11.65H15.15V11.3Q15.15 10.825 15.488 10.487Q15.825 10.15 16.3 10.15H18.7Q19.175 10.15 19.513 10.487Q19.85 10.825 19.85 11.3V12.7Q19.85 13.175 19.513 13.512Q19.175 13.85 18.7 13.85H16.3Q15.825 13.85 15.488 13.512Q15.15 13.175 15.15 12.7V12.35H9.85V12.7Q9.85 13.175 9.513 13.512Q9.175 13.85 8.7 13.85H7.85V18.15H8.7Q9.175 18.15 9.513 18.487Q9.85 18.825 9.85 19.3V20.7Q9.85 21.175 9.513 21.513Q9.175 21.85 8.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialSchemaRoundedW100Filled;