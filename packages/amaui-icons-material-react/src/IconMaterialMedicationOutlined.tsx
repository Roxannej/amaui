import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationOutlined'
      short_name='Medication'

      {...props}
    >
      <path d="M10.5 17.5H13.5V15H16V12H13.5V9.5H10.5V12H8V15H10.5ZM7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V8Q5 7.175 5.588 6.588Q6.175 6 7 6H17Q17.825 6 18.413 6.588Q19 7.175 19 8V19Q19 19.825 18.413 20.413Q17.825 21 17 21ZM7 19H17Q17 19 17 19Q17 19 17 19V8Q17 8 17 8Q17 8 17 8H7Q7 8 7 8Q7 8 7 8V19Q7 19 7 19Q7 19 7 19ZM6 5V3H18V5ZM7 8Q7 8 7 8Q7 8 7 8V19Q7 19 7 19Q7 19 7 19Q7 19 7 19Q7 19 7 19V8Q7 8 7 8Q7 8 7 8Z"/>
    </Icon>
  )
});

export default IconMaterialMedicationOutlined;
