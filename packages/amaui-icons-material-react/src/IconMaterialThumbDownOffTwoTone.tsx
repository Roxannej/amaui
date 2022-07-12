import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffTwoTone'
      short_name='ThumbDownOff'

      {...props}
    >
      <path d="M21.625 14.95Q20.575 14.95 19.85 14.212Q19.125 13.475 19.125 12.45V5.475Q19.125 4.45 19.863 3.712Q20.6 2.975 21.625 2.975Q22.675 2.975 23.413 3.7Q24.15 4.425 24.15 5.45V12.425Q24.15 13.45 23.413 14.2Q22.675 14.95 21.625 14.95ZM11.975 21.125Q11.175 21.85 10.163 22.025Q9.15 22.2 8.35 21.575Q7.775 21.125 7.675 20.4Q7.575 19.675 7.775 18.95L8.475 16.525H2.875Q1.725 16.525 0.788 15.6Q-0.15 14.675 -0.15 13.5V13.075Q-0.15 12.85 -0.1 12.587Q-0.05 12.325 0.025 12.125L3.125 4.825Q3.575 3.75 4.55 3.35Q5.525 2.95 6.45 2.95H14.225Q15.475 2.95 16.363 3.837Q17.25 4.725 17.25 5.975V14.95Q17.25 15.6 17 16.188Q16.75 16.775 16.25 17.2Z"/>
    </Icon>
  )
});

export default IconMaterialThumbDownOffTwoTone;
