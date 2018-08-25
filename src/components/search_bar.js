// import React from 'react';

// const SearchBar = () => {
//     return <input / > ;
// };

// class SearchBar extends React.Component {
//     onInputChange(event) {
//         console.log(event.target.value);
//     }

//     render() {
//         // When using any React variable/expression inside JSX, wrap it with { and }
//         return <input onChange = {
//             this.onInputChange
//         }
//         />
//     }
// }

import React, {
    Component
} from 'react';

class SearchBar extends React.Component {
    render() {
        return <input onChange = {
            (event) => console.log(event.target.value)
        }
        />
    }
}

export default SearchBar;