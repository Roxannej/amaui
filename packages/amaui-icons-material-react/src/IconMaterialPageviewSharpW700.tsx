import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPageviewSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewSharpW700'
      short_name='Pageview'

      {...props}
    >
      <path d="M15.95 17.625 17.625 15.95 15.675 14.025Q16.025 13.5 16.15 12.975Q16.275 12.45 16.275 11.775Q16.275 9.9 14.963 8.587Q13.65 7.275 11.775 7.275Q9.9 7.275 8.588 8.587Q7.275 9.9 7.275 11.775Q7.275 13.65 8.588 14.962Q9.9 16.275 11.775 16.275Q12.375 16.275 12.938 16.125Q13.5 15.975 14.025 15.675ZM11.775 13.875Q10.9 13.875 10.275 13.262Q9.65 12.65 9.65 11.775Q9.65 10.9 10.275 10.275Q10.9 9.65 11.775 9.65Q12.65 9.65 13.262 10.275Q13.875 10.9 13.875 11.775Q13.875 12.65 13.262 13.262Q12.65 13.875 11.775 13.875ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialPageviewSharpW700;