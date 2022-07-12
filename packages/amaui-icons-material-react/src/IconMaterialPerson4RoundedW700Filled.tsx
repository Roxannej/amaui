import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson4RoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person4RoundedW700Filled'
      short_name='Person4'

      {...props}
    >
      <path d="M12 12.575q-1.875 0-3.188-1.313Q7.5 9.95 7.5 8.075V4.2q0-.7.5-1.188.5-.487 1.2-.487.425 0 .8.2.375.2.6.55.225-.35.6-.55.375-.2.8-.2.425 0 .8.2.375.2.6.55.225-.35.6-.55.375-.2.8-.2.7 0 1.2.487.5.488.5 1.188v3.875q0 1.875-1.312 3.187-1.313 1.313-3.188 1.313Zm-5.7 9.7q-1.325 0-2.238-.913-.912-.912-.912-2.237v-.55q0-1.075.563-1.988.562-.912 1.512-1.387 1.625-.8 3.325-1.213 1.7-.412 3.45-.412 1.8 0 3.5.4t3.275 1.2q.95.475 1.513 1.375.562.9.562 2.025v.55q0 1.325-.912 2.237-.913.913-2.238.913Z"/>
    </Icon>
  )
});

export default IconMaterialPerson4RoundedW700Filled;