import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationSharpW700'
      short_name='Medication'

      {...props}
    >
      <path d="M10.5 18.075H13.5V15.575H16V12.575H13.5V10.075H10.5V12.575H8V15.575H10.5ZM3.85 22.725V5.425H20.15V22.725ZM7 19.575H17V8.575H7ZM5.225 4.425V1.275H18.775V4.425ZM7 19.575V8.575V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialMedicationSharpW700;
