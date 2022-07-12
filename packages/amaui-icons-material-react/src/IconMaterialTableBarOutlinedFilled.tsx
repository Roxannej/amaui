import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarOutlinedFilled'
      short_name='TableBar'

      {...props}
    >
      <path d="M6 20 7.5 16.25Q7.725 15.675 8.225 15.337Q8.725 15 9.35 15H11V10.975Q7.175 10.85 4.588 9.85Q2 8.85 2 7.5Q2 6.05 4.925 5.025Q7.85 4 12 4Q16.175 4 19.087 5.025Q22 6.05 22 7.5Q22 8.85 19.413 9.85Q16.825 10.85 13 10.975V15H14.65Q15.25 15 15.763 15.337Q16.275 15.675 16.5 16.25L18 20H16L14.8 17H9.2L8 20Z"/>
    </Icon>
  )
});

export default IconMaterialTableBarOutlinedFilled;