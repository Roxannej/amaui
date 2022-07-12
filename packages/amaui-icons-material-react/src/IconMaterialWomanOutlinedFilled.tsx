import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWomanOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanOutlinedFilled'
      short_name='Woman'

      {...props}
    >
      <path d="M10 22V16H7L10.05 8.3Q10.3 7.7 10.825 7.35Q11.35 7 12 7Q12.65 7 13.175 7.35Q13.7 7.7 13.95 8.3L17 16H14V22ZM12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6Z"/>
    </Icon>
  )
});

export default IconMaterialWomanOutlinedFilled;