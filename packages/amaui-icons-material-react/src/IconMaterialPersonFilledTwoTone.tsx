import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonFilledTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonFilledTwoTone'
      short_name='PersonFilled'

      {...props}
    >
      <path d="M12 11.6Q10.025 11.6 8.65 10.225Q7.275 8.85 7.275 6.875Q7.275 4.875 8.65 3.525Q10.025 2.175 12 2.175Q14 2.175 15.363 3.525Q16.725 4.875 16.725 6.875Q16.725 8.85 15.363 10.225Q14 11.6 12 11.6ZM3.375 20.95V17.4Q3.375 16.35 3.925 15.475Q4.475 14.6 5.4 14.125Q7 13.35 8.65 12.938Q10.3 12.525 12 12.525Q13.75 12.525 15.4 12.925Q17.05 13.325 18.6 14.1Q19.525 14.55 20.075 15.425Q20.625 16.3 20.625 17.4V20.95Z"/>
    </Icon>
  )
});

export default IconMaterialPersonFilledTwoTone;
