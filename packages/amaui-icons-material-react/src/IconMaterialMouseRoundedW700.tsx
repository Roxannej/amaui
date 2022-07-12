import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMouseRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseRoundedW700'
      short_name='Mouse'

      {...props}
    >
      <path d="M12 22.85Q8.75 22.85 6.45 20.55Q4.15 18.25 4.15 15V9Q4.15 5.75 6.45 3.45Q8.75 1.15 12 1.15Q15.25 1.15 17.55 3.45Q19.85 5.75 19.85 9V15Q19.85 18.25 17.55 20.55Q15.25 22.85 12 22.85ZM13 9H16.7Q16.7 7.35 15.675 6.062Q14.65 4.775 13 4.4ZM7.3 9H11V4.4Q9.35 4.775 8.325 6.062Q7.3 7.35 7.3 9ZM12 19.7Q13.95 19.7 15.325 18.325Q16.7 16.95 16.7 15V11H7.3V15Q7.3 16.95 8.675 18.325Q10.05 19.7 12 19.7ZM12 11Q12 11 12 11Q12 11 12 11ZM13 9Q13 9 13 9Q13 9 13 9ZM11 9Q11 9 11 9Q11 9 11 9ZM12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Z"/>
    </Icon>
  )
});

export default IconMaterialMouseRoundedW700;
