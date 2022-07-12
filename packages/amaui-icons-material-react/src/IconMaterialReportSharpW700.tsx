import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportSharpW700'
      short_name='Report'

      {...props}
    >
      <path d="M7.9 21.85 2.15 16.1V7.9L7.9 2.15H16.1L21.85 7.9V16.1L16.1 21.85ZM12 17.575Q12.575 17.575 12.975 17.175Q13.375 16.775 13.375 16.2Q13.375 15.625 12.975 15.212Q12.575 14.8 12 14.8Q11.425 14.8 11.025 15.212Q10.625 15.625 10.625 16.2Q10.625 16.775 11.025 17.175Q11.425 17.575 12 17.575ZM10.8 13.7H13.2V6.55H10.8ZM9.225 18.7H14.775L18.7 14.775V9.225L14.775 5.3H9.225L5.3 9.225V14.775ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialReportSharpW700;
