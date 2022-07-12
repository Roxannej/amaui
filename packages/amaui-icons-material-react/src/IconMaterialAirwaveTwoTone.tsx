import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirwaveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirwaveTwoTone'
      short_name='Airwave'

      {...props}
    >
      <path d="M19.1 7.75q-.75.75-1.675 1.125T15.5 9.25q-1 0-1.938-.375-.937-.375-1.712-1.125L9.975 5.875q-.3-.325-.675-.463-.375-.137-.8-.137-.4 0-.775.137-.375.138-.65.463l-1.2 1.175q-.425.425-1.063.425-.637 0-1.062-.425-.45-.45-.45-1.075T3.75 4.9L4.9 3.75Q5.65 3 6.562 2.612q.913-.387 1.913-.387t1.938.387Q11.35 3 12.075 3.75l1.875 1.875q.325.3.713.45.387.15.812.15.4 0 .8-.163.4-.162.7-.487L18.15 4.4q.425-.425 1.062-.425.638 0 1.063.425.475.475.475 1.087 0 .613-.475 1.088Zm0 6.25q-.75.75-1.687 1.125-.938.375-1.938.375t-1.925-.375q-.925-.375-1.7-1.125l-1.875-1.875q-.3-.325-.675-.463-.375-.137-.8-.137-.4 0-.775.137-.375.138-.675.463L5.875 13.3q-.475.475-1.075.475T3.725 13.3q-.45-.45-.45-1.062 0-.613.45-1.063L4.9 10q.75-.75 1.662-1.137.913-.388 1.913-.388t1.938.388q.937.387 1.662 1.137l1.875 1.875q.325.3.713.45.387.15.812.15.4 0 .8-.15t.7-.5l1.175-1.175q.425-.425 1.062-.425.638 0 1.063.425.475.475.475 1.088 0 .612-.475 1.087Zm-.025 6.25q-.725.725-1.662 1.113-.938.387-1.938.387t-1.925-.387q-.925-.388-1.7-1.113l-1.9-1.875q-.3-.325-.675-.462-.375-.138-.8-.138-.4 0-.775.138-.375.137-.65.462l-1.2 1.175q-.425.45-1.038.45-.612 0-1.087-.45-.45-.475-.45-1.075t.45-1.05L4.9 16.25q.75-.775 1.662-1.15.913-.375 1.913-.375t1.938.388q.937.387 1.662 1.137l1.875 1.875q.325.3.725.45.4.15.8.15.425 0 .813-.15.387-.15.687-.5l1.15-1.15q.475-.45 1.075-.45t1.05.475q.475.45.475 1.05 0 .6-.475 1.075Z"/>
    </Icon>
  )
});

export default IconMaterialAirwaveTwoTone;
