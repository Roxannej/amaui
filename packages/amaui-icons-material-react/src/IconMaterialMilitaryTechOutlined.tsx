import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMilitaryTechOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechOutlined'
      short_name='MilitaryTech'

      {...props}
    >
      <path d="M7 2H17V9.85Q17 10.425 16.75 10.875Q16.5 11.325 16.05 11.6L12.5 13.7L13.2 16H17L13.9 18.2L15.1 22L12 19.65L8.9 22L10.1 18.2L7 16H10.8L11.5 13.7L7.95 11.6Q7.5 11.325 7.25 10.875Q7 10.425 7 9.85ZM9 4V9.85Q9 9.85 9 9.85Q9 9.85 9 9.85L11 11.05V4ZM15 4H13V11.05L15 9.85Q15 9.85 15 9.85Q15 9.85 15 9.85ZM12 7.825ZM11 7.525Q11 7.525 11 7.525Q11 7.525 11 7.525ZM13 7.525Q13 7.525 13 7.525Q13 7.525 13 7.525Z"/>
    </Icon>
  )
});

export default IconMaterialMilitaryTechOutlined;
