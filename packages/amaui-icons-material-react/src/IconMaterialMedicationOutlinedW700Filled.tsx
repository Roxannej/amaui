import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationOutlinedW700Filled'
      short_name='Medication'

      {...props}
    >
      <path d="M10.5 18.075H13.5V15.575H16V12.575H13.5V10.075H10.5V12.575H8V15.575H10.5ZM7 22.725Q5.7 22.725 4.775 21.8Q3.85 20.875 3.85 19.575V8.575Q3.85 7.275 4.775 6.35Q5.7 5.425 7 5.425H17Q18.3 5.425 19.225 6.35Q20.15 7.275 20.15 8.575V19.575Q20.15 20.875 19.225 21.8Q18.3 22.725 17 22.725ZM5.225 4.425V1.275H18.775V4.425Z"/>
    </Icon>
  )
});

export default IconMaterialMedicationOutlinedW700Filled;
