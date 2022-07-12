import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOutlinedW100Filled'
      short_name='Extension'

      {...props}
    >
      <path d="M9 19.7H5Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19V15Q5.05 14.675 5.525 14Q6 13.325 6 12.5Q6 11.675 5.525 11Q5.05 10.325 4.3 10V6Q4.3 5.7 4.5 5.5Q4.7 5.3 5 5.3H9Q9.35 4.5 10.012 4.05Q10.675 3.6 11.5 3.6Q12.325 3.6 12.988 4.05Q13.65 4.5 14 5.3H18Q18.3 5.3 18.5 5.5Q18.7 5.7 18.7 6V10Q19.5 10.35 19.95 11.012Q20.4 11.675 20.4 12.5Q20.4 13.325 19.95 13.988Q19.5 14.65 18.7 15V19Q18.7 19.3 18.5 19.5Q18.3 19.7 18 19.7H14Q13.65 18.9 12.975 18.45Q12.3 18 11.5 18Q10.7 18 10.025 18.45Q9.35 18.9 9 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialExtensionOutlinedW100Filled;
