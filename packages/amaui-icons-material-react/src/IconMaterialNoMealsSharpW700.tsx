import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMealsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMealsSharpW700'
      short_name='NoMeals'

      {...props}
    >
      <path d="M20.875 23.825 19.375 22.35V22.375H17.775V20.725L10.125 13.075Q9.925 13.15 9.75 13.2Q9.575 13.25 9.375 13.3V22.375H6.625V13.3Q5.175 12.95 4.013 11.65Q2.85 10.35 2.85 8.625V5.8L0.55 3.5L2.225 1.825L22.55 22.15ZM20.525 16.8 17.75 14 14.775 11.025V7Q14.775 4.725 16.475 3.175Q18.175 1.625 20.525 1.625ZM13.15 9.4 10.375 6.65V1.625H13.15ZM6 9ZM9.375 5.65 6.625 2.875V1.625H9.375ZM5.625 1.875 5.35 1.625H5.625Z"/>
    </Icon>
  )
});

export default IconMaterialNoMealsSharpW700;
