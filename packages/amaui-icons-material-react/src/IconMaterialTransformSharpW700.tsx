import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransformSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformSharpW700'
      short_name='Transform'

      {...props}
    >
      <path d="M15.625 24.15 11.075 19.625 13.025 17.625 14.225 18.85V16.8H9.775Q8.625 16.8 7.812 16Q7 15.2 7 14.05V9.95H1.625V7.2H7V5.15L5.775 6.375L3.85 4.375L8.375 -0.15L12.925 4.375L10.975 6.375L9.775 5.15V14.05Q9.775 14.05 9.775 14.05Q9.775 14.05 9.775 14.05H22.375V16.8H17V18.85L18.225 17.625L20.15 19.625ZM14.225 12.05V9.95Q14.225 9.95 14.225 9.95Q14.225 9.95 14.225 9.95H11.775V7.2H14.225Q15.375 7.2 16.188 8Q17 8.8 17 9.95V12.05Z"/>
    </Icon>
  )
});

export default IconMaterialTransformSharpW700;
