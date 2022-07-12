import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarlyOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOnTwoTone'
      short_name='EarlyOn'

      {...props}
    >
      <path d="M16.5 19.925q-1.425 0-2.425-1-1-1-1-2.425 0-1.425 1-2.438 1-1.012 2.425-1.012 1.425 0 2.438 1.012 1.012 1.013 1.012 2.438 0 1.425-1.012 2.425-1.013 1-2.438 1Zm-1.175-8V9.05H17.7v2.875Zm0 12V21.05H17.7v2.875ZM20.55 14.1l-1.65-1.7 2.025-2.025 1.7 1.675Zm-8.475 8.475-1.65-1.65 2.025-2.05 1.675 1.675Zm9-4.9V15.3h2.875v2.375Zm-12 0V15.3h2.875v2.375Zm11.875 4.9-2.025-2.025 1.675-1.7 2.025 2.05ZM12.425 14.1l-2-2.025 1.65-1.7 2.05 2.05ZM5.4 20.6q-1.275 0-2.15-.875t-.875-2.15v-13.2q0-1.275.875-2.15T5.4 1.35h.825v-2h2.45v2h6.65v-2h2.45v2h.825q1.275 0 2.15.875t.875 2.15V8.05H5.4v9.525h2.65V20.6Z"/>
    </Icon>
  )
});

export default IconMaterialEarlyOnTwoTone;