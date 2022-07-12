import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenOutlinedW700Filled'
      short_name='Straighten'

      {...props}
    >
      <path d="M4.375 18.625Q3.05 18.625 2.138 17.712Q1.225 16.8 1.225 15.475V8.525Q1.225 7.2 2.138 6.287Q3.05 5.375 4.375 5.375H7V12H9V5.375H11V12H13V5.375H15V12H17V5.375H19.625Q20.95 5.375 21.863 6.287Q22.775 7.2 22.775 8.525V15.475Q22.775 16.8 21.863 17.712Q20.95 18.625 19.625 18.625Z"/>
    </Icon>
  )
});

export default IconMaterialStraightenOutlinedW700Filled;