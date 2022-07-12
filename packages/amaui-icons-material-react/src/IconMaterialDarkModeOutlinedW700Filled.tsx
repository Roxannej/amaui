import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDarkModeOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeOutlinedW700Filled'
      short_name='DarkMode'

      {...props}
    >
      <path d="M12 21.375Q8.1 21.375 5.362 18.637Q2.625 15.9 2.625 12Q2.625 8.1 5.362 5.35Q8.1 2.6 12 2.6Q12.275 2.6 12.562 2.612Q12.85 2.625 13.125 2.675Q12.4 3.5 11.95 4.525Q11.5 5.55 11.5 6.7Q11.5 9.125 13.213 10.825Q14.925 12.525 17.375 12.525Q18.5 12.525 19.525 12.087Q20.55 11.65 21.35 10.925Q21.375 11.2 21.388 11.45Q21.4 11.7 21.4 11.975Q21.4 15.875 18.65 18.625Q15.9 21.375 12 21.375Z"/>
    </Icon>
  )
});

export default IconMaterialDarkModeOutlinedW700Filled;