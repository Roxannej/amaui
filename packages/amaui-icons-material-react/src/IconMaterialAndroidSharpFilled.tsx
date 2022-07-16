import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAndroidSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidSharpFilled'
      short_name='Android'

      {...props}
    >
      <path d="M1 18Q1.225 15.325 2.638 13.075Q4.05 10.825 6.4 9.5L4.55 6.3Q4.4 6.075 4.475 5.825Q4.55 5.575 4.8 5.45Q5 5.325 5.25 5.4Q5.5 5.475 5.65 5.7L7.5 8.9Q9.65 8 12 8Q14.35 8 16.5 8.9L18.35 5.7Q18.5 5.475 18.75 5.4Q19 5.325 19.2 5.45Q19.45 5.575 19.525 5.825Q19.6 6.075 19.45 6.3L17.6 9.5Q19.95 10.825 21.363 13.075Q22.775 15.325 23 18ZM7 15.25Q7.525 15.25 7.888 14.887Q8.25 14.525 8.25 14Q8.25 13.475 7.888 13.113Q7.525 12.75 7 12.75Q6.475 12.75 6.113 13.113Q5.75 13.475 5.75 14Q5.75 14.525 6.113 14.887Q6.475 15.25 7 15.25ZM17 15.25Q17.525 15.25 17.888 14.887Q18.25 14.525 18.25 14Q18.25 13.475 17.888 13.113Q17.525 12.75 17 12.75Q16.475 12.75 16.113 13.113Q15.75 13.475 15.75 14Q15.75 14.525 16.113 14.887Q16.475 15.25 17 15.25Z"/>
    </Icon>
  );
});

export default IconMaterialAndroidSharpFilled;