import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTodaySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodaySharpW700'
      short_name='Today'

      {...props}
    >
      <path d="M9.2 16.7Q8.15 16.7 7.425 15.975Q6.7 15.25 6.7 14.2Q6.7 13.15 7.425 12.425Q8.15 11.7 9.2 11.7Q10.25 11.7 10.975 12.425Q11.7 13.15 11.7 14.2Q11.7 15.25 10.975 15.975Q10.25 16.7 9.2 16.7ZM2.15 22.85V3.15H6V1.15H8.575V3.15H15.425V1.15H18V3.15H21.85V22.85ZM5.3 19.7H18.7V10H5.3ZM5.3 8H18.7V6.3H5.3ZM5.3 8V6.3V8Z"/>
    </Icon>
  )
});

export default IconMaterialTodaySharpW700;
