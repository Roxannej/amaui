import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelOutlined'
      short_name='NewLabel'

      {...props}
    >
      <path d="M12 19V17H15Q15 17 15 17Q15 17 15 17L18.55 12L15 7Q15 7 15 7Q15 7 15 7H5Q5 7 5 7Q5 7 5 7V10H3V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L21 12L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19ZM11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12ZM5 20V17H2V15H5V12H7V15H10V17H7V20Z"/>
    </Icon>
  )
});

export default IconMaterialNewLabelOutlined;