import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatabaseRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseRoundedW700'
      short_name='Database'

      {...props}
    >
      <path d="M12 10.625Q8.1 10.625 5.362 9.325Q2.625 8.025 2.625 6.225Q2.625 4.425 5.362 3.137Q8.1 1.85 12 1.85Q15.9 1.85 18.637 3.137Q21.375 4.425 21.375 6.225Q21.375 8.025 18.637 9.325Q15.9 10.625 12 10.625ZM12 16.375Q8.1 16.375 5.362 15.087Q2.625 13.8 2.625 12V8.725Q2.625 9.725 3.45 10.537Q4.275 11.35 5.613 11.925Q6.95 12.5 8.625 12.812Q10.3 13.125 12 13.125Q13.7 13.125 15.375 12.812Q17.05 12.5 18.388 11.925Q19.725 11.35 20.55 10.537Q21.375 9.725 21.375 8.725V12Q21.375 13.8 18.637 15.087Q15.9 16.375 12 16.375ZM12 22.15Q8.1 22.15 5.362 20.862Q2.625 19.575 2.625 17.775V14.5Q2.625 15.5 3.45 16.3Q4.275 17.1 5.613 17.675Q6.95 18.25 8.625 18.562Q10.3 18.875 12 18.875Q13.7 18.875 15.375 18.562Q17.05 18.25 18.388 17.688Q19.725 17.125 20.55 16.312Q21.375 15.5 21.375 14.5V17.775Q21.375 19.575 18.637 20.862Q15.9 22.15 12 22.15Z"/>
    </Icon>
  )
});

export default IconMaterialDatabaseRoundedW700;
