import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableViewOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableViewOutlined'
      short_name='TableView'

      {...props}
    >
      <path d="M9 21Q8.175 21 7.588 20.413Q7 19.825 7 19V9Q7 8.175 7.588 7.587Q8.175 7 9 7H19Q19.825 7 20.413 7.587Q21 8.175 21 9V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM9 11H19V9Q19 9 19 9Q19 9 19 9H9Q9 9 9 9Q9 9 9 9ZM13 15H15V13H13ZM13 19H15V17H13ZM9 15H11V13H9ZM17 15H19V13H17ZM9 19H11V17H9V19Q9 19 9 19Q9 19 9 19ZM17 19H19Q19 19 19 19Q19 19 19 19V17H17ZM5 17Q4.175 17 3.587 16.413Q3 15.825 3 15V5Q3 4.175 3.587 3.587Q4.175 3 5 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V6H15V5Q15 5 15 5Q15 5 15 5H5Q5 5 5 5Q5 5 5 5V15Q5 15 5 15Q5 15 5 15H6V17Z"/>
    </Icon>
  )
});

export default IconMaterialTableViewOutlined;