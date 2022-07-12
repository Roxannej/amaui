import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicalInformationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationOutlined'
      short_name='MedicalInformation'

      {...props}
    >
      <path d="M7 18H9V16H11V14H9V12H7V14H5V16H7ZM13 14.5H19V13H13ZM13 17.5H17V16H13ZM15 7H20Q20.825 7 21.413 7.587Q22 8.175 22 9V20Q22 20.825 21.413 21.413Q20.825 22 20 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V9Q2 8.175 2.588 7.587Q3.175 7 4 7H9V4Q9 3.175 9.588 2.587Q10.175 2 11 2H13Q13.825 2 14.413 2.587Q15 3.175 15 4ZM11 9H13V4H11ZM12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5Q12 14.5 12 14.5ZM9 9H4Q4 9 4 9Q4 9 4 9V20Q4 20 4 20Q4 20 4 20H20Q20 20 20 20Q20 20 20 20V9Q20 9 20 9Q20 9 20 9H15Q15 9.825 14.413 10.412Q13.825 11 13 11H11Q10.175 11 9.588 10.412Q9 9.825 9 9Z"/>
    </Icon>
  )
});

export default IconMaterialMedicalInformationOutlined;