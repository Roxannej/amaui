import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressOutlined'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M20.5 13.125q-.625 0-1.062-.437Q19 12.25 19 11.625v-6q0-.625.438-1.063.437-.437 1.062-.437t1.062.437Q22 5 22 5.625v6q0 .625-.438 1.063-.437.437-1.062.437Zm-12.925 8q-.425 0-.8-.163-.375-.162-.65-.437l-5.15-5.15 1.4-1.45q.35-.35.788-.538.437-.187.912-.062l1.925.45v-8.15q0-1.05.725-1.775.725-.725 1.775-.725 1.05 0 1.775.725.725.725.725 1.775v4.5h.675q.125 0 .238.037.112.038.237.088l3.775 1.625q.6.275.887.887.288.613.163 1.263l-.9 5.45q-.125.725-.7 1.188-.575.462-1.3.462Zm0-2h6.5l.925-5.45-4.275-1.875H9V5.625q0-.225-.137-.363-.138-.137-.363-.137-.225 0-.363.137Q8 5.4 8 5.625v10.6l-4.225-.9Zm0 0h6.5Z"/>
    </Icon>
  )
});

export default IconMaterialNestWakeOnPressOutlined;
