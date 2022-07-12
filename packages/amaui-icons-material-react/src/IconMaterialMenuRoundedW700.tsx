import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuRoundedW700'
      short_name='Menu'

      {...props}
    >
      <path d="M4 18.95Q3.35 18.95 2.888 18.487Q2.425 18.025 2.425 17.375Q2.425 16.725 2.888 16.262Q3.35 15.8 4 15.8H20Q20.65 15.8 21.113 16.262Q21.575 16.725 21.575 17.375Q21.575 18.025 21.113 18.487Q20.65 18.95 20 18.95ZM4 13.575Q3.35 13.575 2.888 13.112Q2.425 12.65 2.425 12Q2.425 11.35 2.888 10.887Q3.35 10.425 4 10.425H20Q20.65 10.425 21.113 10.887Q21.575 11.35 21.575 12Q21.575 12.65 21.113 13.112Q20.65 13.575 20 13.575ZM4 8.2Q3.35 8.2 2.888 7.737Q2.425 7.275 2.425 6.625Q2.425 5.975 2.888 5.512Q3.35 5.05 4 5.05H20Q20.65 5.05 21.113 5.512Q21.575 5.975 21.575 6.625Q21.575 7.275 21.113 7.737Q20.65 8.2 20 8.2Z"/>
    </Icon>
  )
});

export default IconMaterialMenuRoundedW700;
