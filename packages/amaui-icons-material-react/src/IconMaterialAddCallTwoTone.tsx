import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCallTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCallTwoTone'
      short_name='AddCall'

      {...props}
    >
      <path d="M16.375 10.5V7.55H13.425V5.275H16.375V2.325H18.625V5.275H21.575V7.55H18.625V10.5ZM19.775 21.525Q16.5 21.525 13.375 20.038Q10.25 18.55 7.812 16.113Q5.375 13.675 3.888 10.562Q2.4 7.45 2.4 4.175Q2.4 3.375 2.925 2.862Q3.45 2.35 4.225 2.35H8.075Q9 2.35 9.562 2.787Q10.125 3.225 10.325 4.075L10.95 6.95Q11.1 7.65 10.938 8.2Q10.775 8.75 10.275 9.175L7.75 11.375Q8.6 12.725 9.775 13.875Q10.95 15.025 12.35 15.95L14.9 13.5Q15.4 13.025 15.938 12.875Q16.475 12.725 17.15 12.9L19.85 13.5Q20.725 13.725 21.163 14.25Q21.6 14.775 21.6 15.65V19.675Q21.6 20.45 21.088 20.987Q20.575 21.525 19.775 21.525Z"/>
    </Icon>
  )
});

export default IconMaterialAddCallTwoTone;