import './directory.styles.scss'
import CategoryItem from '../category-item/category-item.components'
const Directory=(props)=>{
    return(
        <div className="directory-container">
      {props.categories.map((category,id)=>{
       return <CategoryItem category={category} key={id}></CategoryItem>
      })}
    </div>
    )
}

export default Directory