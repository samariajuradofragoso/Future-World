interface categoryProps {
    params: {
categories: string[]

searhParams?:string

    }
}

export default function category(props: categoryProps){
   console.log(props)
    const { categories } = props.params
    console.log(categories) 
    return(
<h1> categoria dinamica: {categories} </h1>
         
    )
    
}