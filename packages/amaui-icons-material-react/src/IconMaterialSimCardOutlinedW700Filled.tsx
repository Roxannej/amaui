import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardOutlinedW700Filled'
      short_name='SimCard'

      {...props}
    >
      <path d="M7.225 18.775H9.225V16.775H7.225ZM14.775 18.775H16.775V16.775H14.775ZM7.225 14.775H9.225V10.775H7.225ZM11 18.775H13V14.775H11ZM11 12.775H13V10.775H11ZM14.775 14.775H16.775V10.775H14.775ZM6.3 22.85Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V7.65L9.65 1.15H17.7Q19.025 1.15 19.938 2.062Q20.85 2.975 20.85 4.3V19.7Q20.85 21.025 19.938 21.938Q19.025 22.85 17.7 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialSimCardOutlinedW700Filled;
