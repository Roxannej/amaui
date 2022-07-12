import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMyLocationOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocationOutlinedFilled'
      short_name='MyLocation'

      {...props}
    >
      <path d="M11 22.95V20.95Q7.875 20.6 5.638 18.363Q3.4 16.125 3.05 13H1.05V11H3.05Q3.4 7.875 5.638 5.637Q7.875 3.4 11 3.05V1.05H13V3.05Q16.125 3.4 18.363 5.637Q20.6 7.875 20.95 11H22.95V13H20.95Q20.6 16.125 18.363 18.363Q16.125 20.6 13 20.95V22.95ZM12 19Q14.9 19 16.95 16.95Q19 14.9 19 12Q19 9.1 16.95 7.05Q14.9 5 12 5Q9.1 5 7.05 7.05Q5 9.1 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19ZM12 16Q10.35 16 9.175 14.825Q8 13.65 8 12Q8 10.35 9.175 9.175Q10.35 8 12 8Q13.65 8 14.825 9.175Q16 10.35 16 12Q16 13.65 14.825 14.825Q13.65 16 12 16ZM12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialMyLocationOutlinedFilled;