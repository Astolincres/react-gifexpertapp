export const ImagesContainer = ({image}) => {
    return (
        
            <img className="card animate__animated animate__fadeIn"
                src={image.url} 
                alt="" 
                width={image.size[0]} 
                height={image.size[1]}
            />
        
    )
}
