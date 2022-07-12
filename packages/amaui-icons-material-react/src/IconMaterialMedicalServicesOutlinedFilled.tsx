import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicalServicesOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesOutlinedFilled'
      short_name='MedicalServices'

      {...props}
    >
      <path d="M11 18H13V15H16V13H13V10H11V13H8V15H11ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4Z"/>
    </Icon>
  )
});

export default IconMaterialMedicalServicesOutlinedFilled;
