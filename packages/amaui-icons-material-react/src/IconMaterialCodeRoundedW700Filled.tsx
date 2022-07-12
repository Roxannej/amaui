import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeRoundedW700Filled'
      short_name='Code'

      {...props}
    >
      <path d="M17.475 17.725Q17.025 18.175 16.363 18.163Q15.7 18.15 15.25 17.7Q14.8 17.25 14.8 16.587Q14.8 15.925 15.25 15.475L18.725 12L15.25 8.525Q14.8 8.075 14.812 7.425Q14.825 6.775 15.275 6.325Q15.725 5.875 16.388 5.875Q17.05 5.875 17.5 6.325L22.075 10.9Q22.525 11.35 22.525 12Q22.525 12.65 22.075 13.1ZM6.525 17.675 1.925 13.1Q1.475 12.65 1.475 12Q1.475 11.35 1.925 10.9L6.525 6.275Q6.975 5.825 7.65 5.825Q8.325 5.825 8.775 6.275Q9.225 6.725 9.225 7.387Q9.225 8.05 8.775 8.5L5.275 12L8.75 15.475Q9.2 15.925 9.2 16.575Q9.2 17.225 8.75 17.675Q8.3 18.125 7.638 18.125Q6.975 18.125 6.525 17.675Z"/>
    </Icon>
  )
});

export default IconMaterialCodeRoundedW700Filled;