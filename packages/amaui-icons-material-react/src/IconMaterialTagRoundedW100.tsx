import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTagRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagRoundedW100'
      short_name='Tag'

      {...props}
    >
      <path d="M7.75 19.35Q7.575 19.35 7.475 19.225Q7.375 19.1 7.425 18.95L8.325 15.35H4.775Q4.6 15.35 4.488 15.225Q4.375 15.1 4.425 14.925Q4.475 14.8 4.562 14.725Q4.65 14.65 4.775 14.65H8.5L9.825 9.35H5.775Q5.6 9.35 5.488 9.225Q5.375 9.1 5.425 8.925Q5.475 8.8 5.562 8.725Q5.65 8.65 5.775 8.65H10L10.95 4.9Q10.975 4.775 11.05 4.712Q11.125 4.65 11.25 4.65Q11.425 4.65 11.525 4.775Q11.625 4.9 11.575 5.05L10.675 8.65H15L15.95 4.9Q15.975 4.775 16.05 4.712Q16.125 4.65 16.25 4.65Q16.425 4.65 16.525 4.775Q16.625 4.9 16.575 5.05L15.675 8.65H19.225Q19.4 8.65 19.513 8.775Q19.625 8.9 19.575 9.075Q19.525 9.2 19.438 9.275Q19.35 9.35 19.225 9.35H15.5L14.175 14.65H18.225Q18.4 14.65 18.513 14.775Q18.625 14.9 18.575 15.075Q18.525 15.2 18.438 15.275Q18.35 15.35 18.225 15.35H14L13.05 19.1Q13.025 19.225 12.95 19.288Q12.875 19.35 12.75 19.35Q12.575 19.35 12.475 19.225Q12.375 19.1 12.425 18.95L13.325 15.35H9L8.05 19.1Q8.025 19.225 7.95 19.288Q7.875 19.35 7.75 19.35ZM9.175 14.65H13.5L14.825 9.35H10.5Z"/>
    </Icon>
  )
});

export default IconMaterialTagRoundedW100;
