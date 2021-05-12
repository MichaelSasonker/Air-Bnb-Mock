// import React from 'react';
// import { Link } from 'react-router-dom';

// const SelectCopm = () => {

//     return (
//         <div role="listbox" aria-expanded="false" className="ui selection dropdown" tabIndex="0">
//             <div aria-atomic="true" aria-live="polite" role="alert" className="divider default text">
//                 <i aria-hidden="true" className="ellipsis vertical icon"></i>
//                 <i aria-hidden="true" className="user icon"></i>
//             </div>
//             <div className="menu transition">
//                 <div style={{ pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="true" className="selected item">
//                     <span className="text">
//                         Afghanistan
//                     </span>
//                 </div>
//                 <div style={{ pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Aland Islands
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Albania
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Algeria
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         American Samoa
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Andorra
//                     </span>
//                     </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Angola
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Anguilla
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Antigua
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Argentina
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Armenia
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Aruba
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Australia
//                     </span>
//                 </div>
//                 <div style={{pointerEvents: 'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
//                     <span className="text">
//                         Austria
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SelectCopm;

import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
]

const SelectExample = () => (
  <Select placeholder='Select your country' options={countryOptions} />
)

export default SelectExample