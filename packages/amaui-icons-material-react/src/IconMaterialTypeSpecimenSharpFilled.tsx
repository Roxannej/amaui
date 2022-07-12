import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTypeSpecimenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenSharpFilled'
      short_name='TypeSpecimen'

      {...props}
    >
      <path d="M9.8 14.5H11.4L12.2 12.2H15.85L16.65 14.5H18.2L14.8 5.5H14H13.2ZM12.65 10.9 13.95 7.15H14.05L15.35 10.9ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialTypeSpecimenSharpFilled;
