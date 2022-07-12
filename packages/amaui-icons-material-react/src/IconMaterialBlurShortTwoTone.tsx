import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlurShortTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurShortTwoTone'
      short_name='BlurShort'

      {...props}
    >
      <path d="M15 14.475Q16.05 14.475 16.775 13.75Q17.5 13.025 17.5 12Q17.5 10.95 16.775 10.225Q16.05 9.5 15 9.5Q13.975 9.5 13.25 10.225Q12.525 10.95 12.525 12Q12.525 13.025 13.25 13.75Q13.975 14.475 15 14.475ZM15 17.5Q13.125 17.5 11.663 16.375Q10.2 15.25 9.7 13.5H6.625Q6.025 13.5 5.575 13.05Q5.125 12.6 5.125 12Q5.125 11.375 5.575 10.925Q6.025 10.475 6.625 10.475H9.7Q9.75 10.25 9.863 9.988Q9.975 9.725 10.125 9.5H4.625Q4.025 9.5 3.575 9.05Q3.125 8.6 3.125 8Q3.125 7.375 3.575 6.925Q4.025 6.475 4.625 6.475H15Q17.3 6.475 18.913 8.087Q20.525 9.7 20.525 12Q20.525 14.275 18.913 15.887Q17.3 17.5 15 17.5Z"/>
    </Icon>
  )
});

export default IconMaterialBlurShortTwoTone;