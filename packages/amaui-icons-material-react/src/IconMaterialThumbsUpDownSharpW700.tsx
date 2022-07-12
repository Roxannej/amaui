import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownSharpW700'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M0 14.8V5.775L5.775 0L7.425 1.65L6.65 5.15H12.275V8.725L9.575 14.8ZM2.775 12.05H7.75L9.575 7.95V7.925H3.85L4.375 5.375L2.775 6.975ZM18.225 24 16.575 22.35 17.35 18.85H11.725V15.275L14.45 9.2H24V18.225ZM19.625 18.625 21.225 17.025V11.95H16.25L14.425 16.05V16.075H20.15ZM2.775 12.05V6.975V7.925V7.95V12.05ZM21.225 17.025V16.075V16.05V11.95V17.025Z"/>
    </Icon>
  )
});

export default IconMaterialThumbsUpDownSharpW700;
