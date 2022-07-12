import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTibiaTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaTwoTone'
      short_name='Tibia'

      {...props}
    >
      <path d="M8.325 9.45 6.4 7.55q-.525-.525-.8-1.188-.275-.662-.275-1.387 0-1.525 1.05-2.6Q7.425 1.3 8.95 1.3h6.1q1.5 0 2.55 1.075 1.05 1.075 1.05 2.6 0 .725-.3 1.412-.3.688-.825 1.213L15.7 9.45v5l1.875 1.875q.525.55.813 1.213.287.662.287 1.387 0 1.55-1.075 2.637-1.075 1.088-2.625 1.088-.725 0-1.4-.275-.675-.275-1.2-.8-.05-.05-.15-.1-.1-.05-.225-.05-.1 0-.2.037-.1.038-.15.113-.55.525-1.212.8-.663.275-1.388.275-1.55 0-2.65-1.088-1.1-1.087-1.1-2.612 0-.75.275-1.425t.825-1.2l1.925-1.875Z"/>
    </Icon>
  )
});

export default IconMaterialTibiaTwoTone;
