import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaleSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleSharpW700'
      short_name='Male'

      {...props}
    >
      <path d="M20.775 3.05V10.2H17.625V8.425L14.575 11.45Q15 12.15 15.188 12.925Q15.375 13.7 15.375 14.5Q15.375 17.025 13.6 18.8Q11.825 20.575 9.3 20.575Q6.775 20.575 5 18.8Q3.225 17.025 3.225 14.5Q3.225 11.975 5 10.2Q6.775 8.425 9.3 8.425Q10.1 8.425 10.875 8.625Q11.65 8.825 12.325 9.25L15.375 6.2H13.625V3.05ZM9.3 11.575Q8.075 11.575 7.225 12.425Q6.375 13.275 6.375 14.5Q6.375 15.725 7.225 16.575Q8.075 17.425 9.3 17.425Q10.525 17.425 11.375 16.575Q12.225 15.725 12.225 14.5Q12.225 13.275 11.375 12.425Q10.525 11.575 9.3 11.575Z"/>
    </Icon>
  )
});

export default IconMaterialMaleSharpW700;
