import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRouterOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouterOutlined'
      short_name='Router'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V15Q3 14.175 3.587 13.587Q4.175 13 5 13H15V9H17V13H19Q19.825 13 20.413 13.587Q21 14.175 21 15V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 19Q19 19 19 19Q19 19 19 19V15Q19 15 19 15Q19 15 19 15H5Q5 15 5 15Q5 15 5 15V19Q5 19 5 19Q5 19 5 19ZM8 17Q8 16.575 7.713 16.288Q7.425 16 7 16Q6.575 16 6.287 16.288Q6 16.575 6 17Q6 17.425 6.287 17.712Q6.575 18 7 18Q7.425 18 7.713 17.712Q8 17.425 8 17ZM11.5 17Q11.5 16.575 11.213 16.288Q10.925 16 10.5 16Q10.075 16 9.788 16.288Q9.5 16.575 9.5 17Q9.5 17.425 9.788 17.712Q10.075 18 10.5 18Q10.925 18 11.213 17.712Q11.5 17.425 11.5 17ZM14 18Q14.425 18 14.713 17.712Q15 17.425 15 17Q15 16.575 14.713 16.288Q14.425 16 14 16Q13.575 16 13.288 16.288Q13 16.575 13 17Q13 17.425 13.288 17.712Q13.575 18 14 18ZM14.25 8.25 12.8 6.8Q13.45 6.2 14.25 5.85Q15.05 5.5 16 5.5Q16.95 5.5 17.75 5.85Q18.55 6.2 19.2 6.8L17.75 8.25Q17.4 7.9 16.963 7.7Q16.525 7.5 16 7.5Q15.475 7.5 15.038 7.7Q14.6 7.9 14.25 8.25ZM11.75 5.75 10.35 4.35Q11.45 3.25 12.9 2.625Q14.35 2 16 2Q17.65 2 19.1 2.625Q20.55 3.25 21.65 4.35L20.25 5.75Q19.425 4.925 18.337 4.463Q17.25 4 16 4Q14.75 4 13.663 4.463Q12.575 4.925 11.75 5.75ZM5 19Q5 19 5 19Q5 19 5 19V15Q5 15 5 15Q5 15 5 15Q5 15 5 15Q5 15 5 15V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialRouterOutlined;
