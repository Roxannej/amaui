import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicySharpW700Filled'
      short_name='Policy'

      {...props}
    >
      <path d="M12 22.875Q8.15 21.925 5.65 18.562Q3.15 15.2 3.15 11.1V4.425L12 1.125L20.85 4.425V11.1Q20.85 12.8 20.413 14.412Q19.975 16.025 19.1 17.425L15.575 13.9Q15.8 13.475 15.9 12.988Q16 12.5 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q12.5 16 12.963 15.9Q13.425 15.8 13.85 15.575L17.675 19.375Q16.55 20.65 15.1 21.55Q13.65 22.45 12 22.875ZM12 13.625Q11.325 13.625 10.85 13.15Q10.375 12.675 10.375 12Q10.375 11.325 10.85 10.85Q11.325 10.375 12 10.375Q12.675 10.375 13.15 10.85Q13.625 11.325 13.625 12Q13.625 12.675 13.15 13.15Q12.675 13.625 12 13.625Z"/>
    </Icon>
  )
});

export default IconMaterialPolicySharpW700Filled;