import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffTwoTone'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M9.775 21.3Q8.625 21.3 7.688 20.363Q6.75 19.425 6.75 18.275V9.35Q6.75 8.625 6.95 8.112Q7.15 7.6 7.8 7.025L14.125 1.275L15.85 2.875Q16.1 3.125 16.25 3.537Q16.4 3.95 16.425 4.35V4.425L15.525 7.75H21.125Q22.275 7.75 23.213 8.688Q24.15 9.625 24.15 10.775V11.175Q24.15 11.4 24.113 11.675Q24.075 11.95 23.975 12.15L20.875 19.45Q20.55 20.25 19.725 20.775Q18.9 21.3 18.05 21.3ZM-0.15 21.3H4.875V9.35H-0.15Z"/>
    </Icon>
  )
});

export default IconMaterialThumbUpOffTwoTone;
