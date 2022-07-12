import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicyOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyOutlinedFilled'
      short_name='Policy'

      {...props}
    >
      <path d="M12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 12.725 19.575 14.2Q19.15 15.675 18.4 17L15.45 14.05Q15.725 13.575 15.863 13.062Q16 12.55 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q12.525 16 13.038 15.863Q13.55 15.725 14 15.45L17.225 18.675Q16.15 19.875 14.888 20.725Q13.625 21.575 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialPolicyOutlinedFilled;
