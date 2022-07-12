import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureOutlinedW700'
      short_name='Exposure'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM5.8 8.7H11.2V6.8H5.8ZM5.3 18.7H18.7Q18.7 18.7 18.7 18.7Q18.7 18.7 18.7 18.7V5.3Q18.7 5.3 18.7 5.3Q18.7 5.3 18.7 5.3L5.3 18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7ZM13.875 17.775V15.775H11.875V13.875H13.875V11.875H15.775V13.875H17.775V15.775H15.775V17.775Z"/>
    </Icon>
  )
});

export default IconMaterialExposureOutlinedW700;
