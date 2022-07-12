import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarAddOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnTwoTone'
      short_name='CalendarAddOn'

      {...props}
    >
      <path d="M11.7 19.5H5.525Q4.275 19.5 3.388 18.613Q2.5 17.725 2.5 16.475V6.5Q2.5 5.3 3.237 4.387Q3.975 3.475 5.125 3.475H5.5V1.475H8.525V3.475H13.5V1.475H16.525V3.475H16.9Q18.025 3.475 18.775 4.387Q19.525 5.3 19.525 6.5V11.675Q19.5 11.575 18.95 11.525Q18.4 11.475 18 11.475Q17.6 11.475 17.225 11.525Q16.85 11.575 16.5 11.675V9.5H5.525V16.475Q5.525 16.475 5.525 16.475Q5.525 16.475 5.525 16.475H11.7Q11.6 16.825 11.55 17.212Q11.5 17.6 11.5 18Q11.5 18.4 11.55 18.775Q11.6 19.15 11.7 19.5ZM16.5 22.5V19.5H13.5V16.475H16.5V13.475H19.525V16.475H22.525V19.5H19.525V22.5Z"/>
    </Icon>
  )
});

export default IconMaterialCalendarAddOnTwoTone;
