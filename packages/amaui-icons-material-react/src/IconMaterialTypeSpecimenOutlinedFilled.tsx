import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTypeSpecimenOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenOutlinedFilled'
      short_name='TypeSpecimen'

      {...props}
    >
      <path d="M9.8 14.5H11.4L12.2 12.2H15.85L16.65 14.5H18.2L14.8 5.5H13.2ZM12.65 10.9 13.95 7.15H14.05L15.35 10.9ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialTypeSpecimenOutlinedFilled;