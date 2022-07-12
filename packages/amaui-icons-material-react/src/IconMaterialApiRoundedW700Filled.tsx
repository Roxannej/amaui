import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApiRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiRoundedW700Filled'
      short_name='Api'

      {...props}
    >
      <path d="M9.875 7.5 6.85 4.475 9.775 1.55Q10.225 1.1 10.812 0.862Q11.4 0.625 12 0.625Q12.6 0.625 13.188 0.862Q13.775 1.1 14.225 1.55L17.15 4.475L14.125 7.5L12 5.375ZM4.475 17.15 1.55 14.225Q1.1 13.775 0.863 13.188Q0.625 12.6 0.625 12Q0.625 11.4 0.863 10.812Q1.1 10.225 1.55 9.775L4.475 6.85L7.5 9.875L5.375 12L7.5 14.125ZM19.525 17.15 16.5 14.125 18.625 12 16.5 9.875 19.525 6.85 22.45 9.775Q22.9 10.225 23.138 10.812Q23.375 11.4 23.375 12Q23.375 12.6 23.138 13.188Q22.9 13.775 22.45 14.225ZM12 23.375Q11.4 23.375 10.812 23.137Q10.225 22.9 9.775 22.45L6.85 19.525L9.875 16.5L12 18.625L14.125 16.5L17.15 19.525L14.225 22.45Q13.775 22.9 13.188 23.137Q12.6 23.375 12 23.375ZM12.35 13.625Q11.675 13.75 11.075 13.375Q10.475 13 10.35 12.325Q10.225 11.65 10.613 11.05Q11 10.45 11.675 10.325Q12.35 10.2 12.938 10.6Q13.525 11 13.65 11.675Q13.775 12.35 13.4 12.925Q13.025 13.5 12.35 13.625Z"/>
    </Icon>
  )
});

export default IconMaterialApiRoundedW700Filled;
