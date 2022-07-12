import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicyOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyOutlinedW700Filled'
      short_name='Policy'

      {...props}
    >
      <path d="M12 13.625Q12.675 13.625 13.15 13.15Q13.625 12.675 13.625 12Q13.625 11.325 13.15 10.85Q12.675 10.375 12 10.375Q11.325 10.375 10.85 10.85Q10.375 11.325 10.375 12Q10.375 12.675 10.85 13.15Q11.325 13.625 12 13.625ZM12 22.875Q8.15 21.925 5.65 18.562Q3.15 15.2 3.15 11.1V4.425L12 1.125L20.85 4.425V11.1Q20.85 12.85 20.388 14.425Q19.925 16 19.1 17.425L15.575 13.9Q15.8 13.475 15.9 12.988Q16 12.5 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q12.5 16 12.963 15.9Q13.425 15.8 13.85 15.575L17.675 19.375Q16.625 20.525 15.213 21.475Q13.8 22.425 12 22.875Z"/>
    </Icon>
  )
});

export default IconMaterialPolicyOutlinedW700Filled;