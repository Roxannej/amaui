import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCableSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableSharpW700Filled'
      short_name='Cable'

      {...props}
    >
      <path d="M3.625 21.375V19.375H2.625V13.625H4.625V7Q4.625 5.2 5.912 3.912Q7.2 2.625 9 2.625Q10.8 2.625 12.088 3.912Q13.375 5.2 13.375 7V17Q13.375 17.675 13.85 18.15Q14.325 18.625 15 18.625Q15.675 18.625 16.15 18.15Q16.625 17.675 16.625 17V10.375H14.625V4.625H15.625V2.625H20.375V4.625H21.375V10.375H19.375V17Q19.375 18.8 18.087 20.087Q16.8 21.375 15 21.375Q13.2 21.375 11.913 20.087Q10.625 18.8 10.625 17V7Q10.625 6.325 10.15 5.85Q9.675 5.375 9 5.375Q8.325 5.375 7.85 5.85Q7.375 6.325 7.375 7V13.625H9.375V19.375H8.375V21.375Z"/>
    </Icon>
  )
});

export default IconMaterialCableSharpW700Filled;
