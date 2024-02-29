interface categoryProps {
    params: {
categories: string[]


    }
}

export default function category(props: categoryProps){
    const { categories } = props.params
    console.log(categories) 
    return(
<h1> categoria dinamica: {categories} </h1>
         
    )
    
}