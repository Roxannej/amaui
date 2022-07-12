import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson2RoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2RoundedW700Filled'
      short_name='Person2'

      {...props}
    >
      <path d="M10.525 11.5q-1.425 0-2.375-1.062Q7.2 9.375 7.4 7.95l.225-1.725q.2-1.625 1.463-2.675Q10.35 2.5 12 2.5t2.913 1.05q1.262 1.05 1.462 2.675L16.6 7.95q.2 1.425-.75 2.488-.95 1.062-2.375 1.062ZM6.3 21.275q-1.325 0-2.238-.913-.912-.912-.912-2.237v-.55q0-1.075.563-1.988.562-.912 1.512-1.387 1.625-.8 3.325-1.213 1.7-.412 3.45-.412 1.8 0 3.5.4t3.275 1.2q.95.475 1.513 1.375.562.9.562 2.025v.55q0 1.325-.912 2.237-.913.913-2.238.913Z"/>
    </Icon>
  )
});

export default IconMaterialPerson2RoundedW700Filled;