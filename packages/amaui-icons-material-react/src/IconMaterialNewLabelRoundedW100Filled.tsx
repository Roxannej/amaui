import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelRoundedW100Filled'
      short_name='NewLabel'

      {...props}
    >
      <path d="M6 19.35Q5.85 19.35 5.75 19.25Q5.65 19.15 5.65 19V16.35H3Q2.85 16.35 2.75 16.25Q2.65 16.15 2.65 16Q2.65 15.85 2.75 15.75Q2.85 15.65 3 15.65H5.65V13Q5.65 12.85 5.75 12.75Q5.85 12.65 6 12.65Q6.15 12.65 6.25 12.75Q6.35 12.85 6.35 13V15.65H9Q9.15 15.65 9.25 15.75Q9.35 15.85 9.35 16Q9.35 16.15 9.25 16.25Q9.15 16.35 9 16.35H6.35V19Q6.35 19.15 6.25 19.25Q6.15 19.35 6 19.35ZM12.35 17.7V14.15Q12.35 13.525 11.913 13.087Q11.475 12.65 10.85 12.65H9.35V11.15Q9.35 10.525 8.912 10.087Q8.475 9.65 7.85 9.65H4.45V7.8Q4.45 7.175 4.888 6.738Q5.325 6.3 5.95 6.3H14.35Q14.9 6.3 15.387 6.55Q15.875 6.8 16.2 7.25L18.925 11.125Q19.2 11.525 19.2 12Q19.2 12.475 18.925 12.875L16.2 16.7Q15.85 17.15 15.388 17.425Q14.925 17.7 14.35 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialNewLabelRoundedW100Filled;
