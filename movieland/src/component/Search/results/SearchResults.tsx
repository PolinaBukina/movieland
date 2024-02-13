// import { useSearchState } from '../../../store/search/selectors'
// import React, { useEffect, useState } from 'react'
// import styles from './styles.module.scss'
// import { ButtonThumbUpIcon } from '../../ButtonThumbUp/ButtonThumbUpIcon'
// import { Icon } from '../../ButtonWithIcon/Icon'
// import { MoreIcon } from '../../CardPost1/MoreIcon'
// import { ButtonThumbDownIcon } from '../../ButtonThumbDown/ButtonThumbDownIcon'

// export const SearchResults = () => {
//     // const searchRequestText = 'Astronauts'
//     const { text, data } = useSearchState()

//     const [state, setState] = useState(0)
//     const [state1, setState1] = useState(0)

//     const increase = () => {
//         setState(state + 1)
//     }

//     const increase1 = () => {
//         setState1(state1 + 1)
//     }

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.header1}>
//                 Search results `{text}`
//             </h2>

//             <div className={styles.cardContent}>
//                 {
//                     data.map((item) => (
//                         <div key={item.id} className={styles.card}>

//                             <div className={styles.allText}>
//                                 <img className={styles.image} src={item.image} />
//                                 <div className={styles.text}>
//                                     <p className={styles.date}>
//                                         {item.date}
//                                     </p>
//                                     <h1 className={styles.header}>
//                                         {item.title}
//                                     </h1>
//                                 </div>

//                             </div>

//                             <div className={styles.allButtons}>
//                                 <div className={styles.buttons}>
//                                     <button onClick={increase}>
//                                         <ButtonThumbUpIcon />
//                                     </button>
//                                     <p>{state}</p>
//                                     <button onClick={increase1}>
//                                         <ButtonThumbDownIcon />
//                                     </button>
//                                     <p>{state1}</p>
//                                 </div>
//                                 <div className={styles.buttons}>
//                                     <button>
//                                         <Icon />
//                                     </button>
//                                     <button>
//                                         <MoreIcon />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

import React from 'react'

const SearchResults = () => {
    return (
        <div>

        </div>
    )
}

export default SearchResults

