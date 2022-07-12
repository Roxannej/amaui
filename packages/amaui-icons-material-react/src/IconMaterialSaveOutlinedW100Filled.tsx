import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveOutlinedW100Filled'
      short_name='Save'

      {...props}
    >
      <path d="M19.7 7.55V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H16.45ZM12 16.1Q12.7 16.1 13.2 15.6Q13.7 15.1 13.7 14.4Q13.7 13.7 13.2 13.2Q12.7 12.7 12 12.7Q11.3 12.7 10.8 13.2Q10.3 13.7 10.3 14.4Q10.3 15.1 10.8 15.6Q11.3 16.1 12 16.1ZM7 9.7H13.95V7H7Z"/>
    </Icon>
  )
});

export default IconMaterialSaveOutlinedW100Filled;