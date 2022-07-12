import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestCamStandTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandTwoTone'
      short_name='NestCamStand'

      {...props}
    >
      <path d="M6.65 21.425q-1.35 0-2.25-.963-.9-.962-.775-2.312l.575-6.4q.1-2.05 1.2-3.663 1.1-1.612 2.8-2.562.175-1.425 1.25-2.4Q10.525 2.15 12 2.15q1.5 0 2.562.975 1.063.975 1.263 2.4 1.7.925 2.8 2.562 1.1 1.638 1.225 3.663l.525 6.4q.125 1.35-.75 2.312-.875.963-2.225.963ZM12 10.8q.35 0 .588-.225.237-.225.237-.575V6q0-.35-.237-.588-.238-.237-.588-.237t-.575.237Q11.2 5.65 11.2 6v4q0 .35.225.575.225.225.575.225Z"/>
    </Icon>
  )
});

export default IconMaterialNestCamStandTwoTone;
