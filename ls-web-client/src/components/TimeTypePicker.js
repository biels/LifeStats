import React from 'react';
import * as _ from "lodash";

const TimeTypePicker = ({timeTypes, selectedIndex, updateSelectedIndex}) => {
  const buttons = timeTypes.map((timeType, i) => {
    const active = selectedIndex === i;
    var additionaStyles = []
    if(active) additionaStyles = additionaStyles.concat('pt-active')
    return <button key={i} type={'button'} className={'pt-button ' + _.join(additionaStyles, ' ')} onClick={updateSelectedIndex.bind(this, i)}>{timeType}</button>
  })
  return (
      <div className={'pt-button-group pt-vertical'}>
        {buttons}
      </div>
  );
}

export default TimeTypePicker;