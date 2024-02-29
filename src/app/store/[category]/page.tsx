interface categoryProps {
    params: {
category: string

    }
}

export default function category(props: categoryProps){
    const { category}=props.params
    return(
<h1>categoria dinamica: {category}</h1>
         
    )
    }