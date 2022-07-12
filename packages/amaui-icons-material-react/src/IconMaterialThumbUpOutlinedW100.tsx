import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOutlinedW100'
      short_name='ThumbUp'

      {...props}
    >
      <path d="M9.85 19.7Q9.275 19.7 8.812 19.237Q8.35 18.775 8.35 18.2V9.825Q8.35 9.55 8.45 9.325Q8.55 9.1 8.75 8.9L14.4 3.35L14.6 3.55Q14.725 3.675 14.812 3.862Q14.9 4.05 14.9 4.2V4.3L13.9 9.3H21Q21.575 9.3 22.038 9.762Q22.5 10.225 22.5 10.8V11.8Q22.5 11.925 22.475 12.075Q22.45 12.225 22.4 12.35L19.75 18.65Q19.55 19.1 19.075 19.4Q18.6 19.7 18.1 19.7ZM9.85 19H18.1Q18.375 19 18.663 18.85Q18.95 18.7 19.1 18.35L21.8 12V10.8Q21.8 10.45 21.575 10.225Q21.35 10 21 10H13.05L14.15 4.55L9.05 9.6V18.2Q9.05 18.55 9.275 18.775Q9.5 19 9.85 19ZM1.5 19.7H5.85V9.825H1.5ZM9.05 19Q9.05 19 9.05 18.775Q9.05 18.55 9.05 18.2V9.6V10Q9.05 10 9.05 10.225Q9.05 10.45 9.05 10.8V12V18.35Q9.05 18.7 9.05 18.85Q9.05 19 9.05 19Z"/>
    </Icon>
  )
});

export default IconMaterialThumbUpOutlinedW100;
