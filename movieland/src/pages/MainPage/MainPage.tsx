// import { CardPost1 } from '../../component/CardPost1/CardPost1'
import { Card } from '../../component/Card/Card'
import { ShowMore } from '../../component/Buttons/ShowMore/ShowMore'
import { Tabs2 } from '../../component/Tabs2/Tabs2'
import { Title } from '../../component/Ttitle/Title'
import { useNavigate } from 'react-router-dom'
// import { BlogPostNavigation } from '../../component/BlogPostNavigation/BlogPostNavigation'

// НУЖНО ДОБАВИТЬ ЛИНК ДЛЯ КАЖДОЙ КАРТИНКИ ПОСТА
// СМОТРЕТЬ В react37 

export const MainPage = () => {
    // const navigate = useNavigate()

    // const handleShowMore = () => {
    //     <Card />
    // }

    return (
        <>
            <Card />
            {/* <ShowMore onClick={() => handleShowMore} /> */}
            <ShowMore />
            {/* <BlogPostNavigation /> */}
        </>
    )
}