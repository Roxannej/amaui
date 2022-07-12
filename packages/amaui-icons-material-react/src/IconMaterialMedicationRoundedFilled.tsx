import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationRoundedFilled'
      short_name='Medication'

      {...props}
    >
      <path d="M12 17.5Q12.625 17.5 13.062 17.062Q13.5 16.625 13.5 16V15H14.5Q15.125 15 15.562 14.562Q16 14.125 16 13.5Q16 12.875 15.562 12.438Q15.125 12 14.5 12H13.5V11Q13.5 10.375 13.062 9.938Q12.625 9.5 12 9.5Q11.375 9.5 10.938 9.938Q10.5 10.375 10.5 11V12H9.5Q8.875 12 8.438 12.438Q8 12.875 8 13.5Q8 14.125 8.438 14.562Q8.875 15 9.5 15H10.5V16Q10.5 16.625 10.938 17.062Q11.375 17.5 12 17.5ZM7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V8Q5 7.175 5.588 6.588Q6.175 6 7 6H17Q17.825 6 18.413 6.588Q19 7.175 19 8V19Q19 19.825 18.413 20.413Q17.825 21 17 21ZM7 5Q6.575 5 6.287 4.712Q6 4.425 6 4Q6 3.575 6.287 3.287Q6.575 3 7 3H17Q17.425 3 17.712 3.287Q18 3.575 18 4Q18 4.425 17.712 4.712Q17.425 5 17 5Z"/>
    </Icon>
  )
});

export default IconMaterialMedicationRoundedFilled;
