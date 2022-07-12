import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOutlinedW100Filled'
      short_name='ThumbDown'

      {...props}
    >
      <path d="M9.6 20.65 9.4 20.45Q9.275 20.325 9.188 20.137Q9.1 19.95 9.1 19.8V19.7L10.1 14.7H3Q2.425 14.7 1.963 14.237Q1.5 13.775 1.5 13.2V12.2Q1.5 12.075 1.525 11.925Q1.55 11.775 1.6 11.65L4.25 5.35Q4.45 4.9 4.925 4.6Q5.4 4.3 5.9 4.3H14.15Q14.725 4.3 15.188 4.762Q15.65 5.225 15.65 5.8V14.175Q15.65 14.45 15.55 14.675Q15.45 14.9 15.25 15.1ZM18.15 14.175H22.5V4.3H18.15Z"/>
    </Icon>
  )
});

export default IconMaterialThumbDownOutlinedW100Filled;
