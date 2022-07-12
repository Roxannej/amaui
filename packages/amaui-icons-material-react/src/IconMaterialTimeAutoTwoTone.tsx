import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimeAutoTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimeAutoTwoTone'
      short_name='TimeAuto'

      {...props}
    >
      <path d="M8 17.525H9.85L10.425 15.775H13.525L14.1 17.525H16L13 9.075H11ZM10.9 14.325 12 11.025 13.075 14.325ZM8.3 3.075V0.425H15.7V3.075ZM12 23.275Q10 23.275 8.25 22.525Q6.5 21.775 5.2 20.475Q3.9 19.175 3.138 17.425Q2.375 15.675 2.375 13.675Q2.375 11.675 3.138 9.925Q3.9 8.175 5.2 6.875Q6.5 5.575 8.25 4.812Q10 4.05 12 4.05Q13.65 4.05 15.113 4.55Q16.575 5.05 17.8 6L19.45 4.35L21.35 6.25L19.7 7.9Q20.625 9.1 21.125 10.562Q21.625 12.025 21.625 13.675Q21.625 15.675 20.863 17.425Q20.1 19.175 18.8 20.475Q17.5 21.775 15.762 22.525Q14.025 23.275 12 23.275Z"/>
    </Icon>
  )
});

export default IconMaterialTimeAutoTwoTone;
