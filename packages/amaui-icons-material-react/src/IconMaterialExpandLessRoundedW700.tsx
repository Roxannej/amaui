import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandLessRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessRoundedW700'
      short_name='ExpandLess'

      {...props}
    >
      <path d="M6.3 15.05Q5.85 14.6 5.85 13.95Q5.85 13.3 6.3 12.85L10.9 8.25Q11.125 8.025 11.413 7.912Q11.7 7.8 12 7.8Q12.3 7.8 12.588 7.912Q12.875 8.025 13.1 8.25L17.725 12.875Q18.175 13.325 18.163 13.962Q18.15 14.6 17.7 15.05Q17.25 15.5 16.6 15.5Q15.95 15.5 15.5 15.05L12 11.55L8.475 15.075Q8.025 15.525 7.388 15.512Q6.75 15.5 6.3 15.05Z"/>
    </Icon>
  )
});

export default IconMaterialExpandLessRoundedW700;
