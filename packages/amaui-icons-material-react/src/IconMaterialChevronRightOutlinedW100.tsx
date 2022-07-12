import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronRightOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRightOutlinedW100'
      short_name='ChevronRight'

      {...props}
    >
      <path d="M9.4 17.1 8.9 16.6 13.5 12 8.9 7.4 9.4 6.9 14.5 12Z"/>
    </Icon>
  )
});

export default IconMaterialChevronRightOutlinedW100;